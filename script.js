// document.getElementById("count").innerText = 5;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


console.log(countEl);

let count = 0 //this is a variable

function increment() {
    count += 1;
    console.log(count);
    countEl.innerText = count;
    // this function allowes you to increase the count when you press the increment button
}

//if you want reset button seprately uncomment the code below and in the html program

// function reset() {
//   count = 0
//       countEl.innerText = count

// }

function save() {
    // console.log(count);
    countstr = count + " - ";
    saveEl.textContent += countstr; //using of textcontent instead of inner element
    count = 0;
    countEl.innerText = count;  //this sets the count to 0 again
    // this function is for saving the count in a string
}


/*
    Difference btw innerText & textContent
    innerText :- The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
    textContent :- textContent gets the content of all elements, including <script> and <style> elements. 
    In contrast, innerText only shows "human-readable" elements.
*/
