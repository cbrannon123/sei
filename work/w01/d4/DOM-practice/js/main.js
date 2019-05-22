let titelEL = document.getElementById('title');

//selects cool class in a var
let pEl = document.querySelector('.cool');
//sets cool class 
pEl.innerHTML = 'Comments for <strong>Today</strong>';
//.style to stle an element
titelEL.style.textAlign = 'center';


let gog = document.querySelector("a");
//to set an attribute
gog.setAttribute('href', "www.google.com")

// selects all elemets with the class 'comment' (li)

let commentEls = document.querySelectorAll('li.comment');

//nodeList (for loops, forEach method, for of loop)


for (let commentEl of commentEls) {
    console.log(commentEl);

}
