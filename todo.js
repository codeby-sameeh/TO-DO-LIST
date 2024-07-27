
let input = document.getElementById('inputfield')
let output = document.getElementById('Outputfield')
let button = document.getElementById('add-a-button')
let completetask = document.getElementById('cmplt-task')




function display(){
   const newli = document.createElement('li')
    newli.textContent = input.value
    output.appendChild(newli)
    const check = document.createElement('input')
    check.type="checkbox"
    // check.id("check")
    // const checked = document.getElementById("check")
    newli.appendChild(check)
       newli.id("newline")
    
    
    checked.addEventListener('click', function() {
        // completetask.appendChild(newli)
        console.log("click")
    });
    
}

