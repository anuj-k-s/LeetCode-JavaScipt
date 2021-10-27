/* Function Race - this function may or may not give username as a result */
function setTextToDOM(text) {
  document.getElementById("username").innerHTML = text;
}

function appendTextToDOM(text) {
  let element = document.getElementById("username");
  element.innerHTML = element.innerHTML.concat(text);
}

const httpRespToString = (resp) => JSON.stringify(JSON.parse(resp));
function functionRace() {
  let xhr = new XMLHttpRequest();
  let listUsers = [];
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onload = () => {
    listUsers = JSON.parse(xhr.responseText);
  };
  xhr.send();

  let xhr2 = new XMLHttpRequest();
  let username = "";
  xhr2.open("GET", "https://jsonplaceholder.typicode.com/users/2");
  xhr2.onload = () => {
    let user = JSON.parse(xhr2.responseText);
    username = listUsers.find((usr) => usr.id === user.id);
    document.getElementById("username").innerHTML = JSON.stringify(username);
  };
  xhr2.send();
}

/*  Callback Pyramid - this function  guarantees that we will be having proper username as a result
 but give rise to callback pyramid */
function innerfunction() {
  let xhr = new XMLHttpRequest();
  let listUsers = [];
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onload = () => {
    listUsers = JSON.parse(xhr.responseText);
    let xhr2 = new XMLHttpRequest();
    let username = "";
    xhr2.open("GET", "https://jsonplaceholder.typicode.com/users/2");
    xhr2.onload = () => {
      let user = JSON.parse(xhr2.responseText);
      username = listUsers.find((usr) => usr.id === user.id);
      document.getElementById("username").innerHTML = JSON.stringify(username);
    };
    xhr2.send();
  };
  xhr.send();
}

function createPromise() {
  let wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yeah promise created");
    }, 3000);
  });

  wait.then((data) => (document.getElementById("username").innerHTML = JSON.stringify(data)));
}

function promisewithInterval() {
  let counter = 0;
  let promise = new Promise((resolve, reject) => {
    setInterval(() => {
      let element = document.getElementById("counter");
      element.innerHTML = `Counter Value in setInterval ${counter}`;
      resolve(`Yeah Promise created for ${++counter} time.`);
    }, 1000);
  });
  promise.then((data) => (document.getElementById("username").innerHTML = JSON.stringify(data)));
} 

function promiseWithReject() {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicoe.com/users/2");
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(httpRespToString(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject("Error Occured"); //xhr gives onerror only when there is  a network failure, all other call goes to onload
    xhr.send();
  });
  promise.then((result) => setTextToDOM(result)).catch((reason) => setTextToDOM(reason));
}

/* Promise settles when all promises gets fulfilled or one of them gets rejected */
function promiseAll() {
  /*  these all are promises */
  let call1 = axios.get("https://jsonplaceholder.typicode.com/users/2");
  let call2 = axios.get("https://jsonplaceholder.typicode.com/users/2");
  let call3 = axios.get("https://jsonplaceholder.typicode.com/users/2");

  Promise.all([call1, call2, call3])
    .then(([resp1, resp2, resp3]) => {
      setTextToDOM("");
      appendTextToDOM(JSON.stringify(resp1.data));
      appendTextToDOM(JSON.stringify(resp2.data));
      appendTextToDOM(JSON.stringify(resp3.data));
    })
    .catch((response) => {
      setTextToDOM(response);
    });
}
/* 
resolved state
{
  status:"fullfilled",
  value: {}
}

rejected state
{
  status:"rejected",
  reason: {}
}
doesnt require a catch block specifically, but its good to have

The Promise.allSettled() method returns a promise that resolves after 
all of the given promises have either fulfilled or rejected, with an 
array of objects that each describes the outcome of each promise.
It is typically used when you have multiple asynchronous tasks that are 
not dependent on one another to complete successfully, or you'd always like to know the result of each promise.



 */
function promiseAllSettled() {
  Promise.allSettled([
    Promise.resolve(20),
    new Promise((resolve) => setTimeout(() => resolve(70), 0)),
    Promise.reject(new Error("error Happened")),
  ]).then((values) => console.log(values));

  Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error("an error")),
  ]).then((values) => {
    let finalString = values.map((v) => {
      if (v.status === "fulfilled") {
        return `FULFILLED: ${JSON.stringify(v.value)}`;
      } else {
        return `REJECTED: ${v.reason}`;
      }
    });
    console.log(finalString);
  });
}

/* race will wait until a fastest promise gets settles.
If it resolves that it will be picked in then block,if gets rehjected then catch block */
function promiseRace() {
  Promise.race([
    Promise.reject(new Error("error Happened")),
    Promise.resolve(20),
    new Promise((resolve) => setTimeout(() => resolve(70), 0))
    
  ])
    .then((values) => console.log(values))
    .catch((error) => console.log(error.message));
}
// CallBack Hell - Pyramid Code - Sequential Loading of Data- code is meesy alongwith error handling is not proper
/* xhr.onload = () =>{
     xhr2.onload = () => {
         xhr3.onload = () => {
            xhr4.onload =() => {
            }
            xhr4.onerror = () =>{}
         }
         xhr3.onerror = () =>{}
     }
     xhr2.onerror = () =>{}
}
xhr1.onerror = () =>{} */

/* Promise - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. */
