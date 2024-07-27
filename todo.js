
let input = document.getElementById('inputfield')
let output = document.getElementById('Outputfield')
let button = document.getElementById('add-a-button')
let completetask = document.getElementById('cmplt-task')


function display(){
   const newli = document.createElement('li')
   const edit = document.createElement('button')
    const dlt = document.createElement('button')
    newli.textContent = input.value
    output.appendChild(newli)
    const check = document.createElement('input')
    check.type="checkbox"
    newli.appendChild(check)
    dlt.textContent ="dlt"
    newli.appendChild(dlt)
    dlt.style.fontSize = '13px'
    dlt.style.height = '20px'
    dlt.style.width = '20px'
    edit.textContent ="edit"
    newli.appendChild(edit)


    
    check.addEventListener('click', function() {
        completetask.appendChild(newli)
    });
   dlt.addEventListener('click',function(){
        newli.remove()
   })
    }  
    
  
    
   
    


