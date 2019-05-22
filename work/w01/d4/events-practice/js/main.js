//sntax for event listener - // method/ element.addEventListener(<event-name>,<callback>,<use-capture>);
// method signature = number or type of arguments and what it returns / takes ? and return ?
//Event  bubbling ,bubble up thought the dom / method to stop "stopPropagation" / event delegtion listens to all of its children
//button selected
const btn = document.querySelector('button');
//
const ul = document.querySelector('ul');
//annonamus in-line function / produced a event object / mouse event/ remember target in console



btn.addEventListener('click', function(evt) {
  // creates an element, is in Memory not part of dom   
    const li = document.createElement('li');
    var imp = document.querySelector('input');
    li.textContent = imp.value;
    // clears the input
    imp.value = '';
    //appends text to to input wiht ul var
    ul.appendChild(li);



});

//event delegation get this down change 

ul.addEventListener('click', handleClick);

function handleClick (evt) {
  evt.target.style.fontSize = "40px"; 
  evt.target.style.color = "red" 
console.log(evt)
};
