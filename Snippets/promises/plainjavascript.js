/* Function Race - this function may or may not give username as a result */
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
function innerfunction(){
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

//code is meesy alongwith error handling is not proper
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