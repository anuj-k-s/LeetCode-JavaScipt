/* There are many different types of events that can occur. For example:

The user selects a certain element or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or finishes.
An error occurs. */
/* Each Event is associated with an event handler also called event listner */

/*  Event Listner or Event Handler */

/* Method1 */
/* 
Step:1 Stroring a Reference of html button in btn variable 
Step:2 Associating the reference to event handler onclick and assigning it to a anonymous function
*/
const btn = document.querySelector("button");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.onclick = function () {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

btn.onfocus = function () {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
btn.onblur = function () {
  const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

/* Method2 */
/* Using addEventListner Method :- consu
Step:1 creating reference to DOM
Step:2 addeventListner consumes first parameter as name of the event we want to register this handler for,
        and the code that comprises the handler function we want to run in response to it, and a boolean
        if set to true event delegation will be capturing
Step:3 we can remove a listner by using btn.removeEventListner('click',functionName)
        */

btn.addEventListener("click", function () {
  var rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
});

function bgChange() {
  var rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  return rndCol;
}
const parentDiv = document.getElementsByClassName("wrapper");
let parentHtmlDiv = parentDiv[0].children;
for (let i = 0; i < parentHtmlDiv.length; i++) {
  parentHtmlDiv[i].onclick = function (e) {
    e.target.style.backgroundColor = bgChange();
  };
}
/* console.log(parentDiv[0].children); */


let buttonBar = document.querySelector(".button-bar");
buttonBar.addEventListener('click',(event)=>{
  let color = event.target.getAttribute("data-color");
  buttonBar.style.backgroundColor = color;
})
/*
Event Bubbling and Capturing
Event bubbling and capture
are two mechanisms that describe what happens when two handlers of the same 
event type are activated on one element. */
/* events occure in three phases - capturing,target and bubbling phase */

/* First Capturing Phase happens and all the event listners registered with event capturing phase gets invloked.
Then in target phase the event from which element is triggered gets invoked and lastly Event Bubbling phase occures
and all the events listners registered with event bubbling phase gets invloked */

document.getElementById("superparent").addEventListener("click",()=>{
  console.log("superparent called")
  document.getElementById("superparent").style.backgroundColor = bgChange();
},true) //capture flag set to true means the callback function will be involed in capturing phase

document.getElementById("parent").addEventListener("click",()=>{
  console.log("parent called")
  document.getElementById("parent").style.backgroundColor = bgChange();
})

document.getElementById("child").addEventListener("click",()=>{
  console.log("child called")
  document.getElementById("child").style.backgroundColor = bgChange();
},true)

/* Child Bubbling
Parent Bubbling
SuperParent Bubbling

On child click - child,parent,SuperParent
On parent click - parent,SuperParent
On superparent click - SuperParent */

/* Child Capturing
Parent Bubbling
SuperParent Bubbling

On child click - child,parent,SuperParent
On parent click - parent,SuperParent
On superparent click - SuperParent */

/* Child Bubbling
Parent capturing
SuperParent Bubbling

On child click - parent,child,SuperParent
On parent click - parent,SuperParent
On superparent click - SuperParent */


/* 
Event delegation
Bubbling also allows us to take advantage of event delegation — this concept relies on 
the fact that if you want some code to run when you select any one of a large number of
 child elements, you can set the event listener on their parent and have events that
  happen on them bubble up to their parent rather than having to set the event listener 
  on every child individually. Remember, bubbling involves checking the element the event 
  is fired on for an event handler first, then moving up to the element's parent, etc.

A good example is a series of list items — if you want each one to pop up a message when selected, 
you can set the click event listener on the parent <ul>, and events will bubble from the list items to the <ul>.


Pros: Memory Optimization as only single event handler
Writing less code
DOM manipulation(if dynamic dom is happening then we have to add more event listners)

Cons:- All the events are not bubbled of resize,blur
e.stoppropogation is used wisely else event will not be bubbled up
 */
