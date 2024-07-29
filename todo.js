
let input = document.getElementById('inputfield')
let output = document.getElementById('Outputfield')
let button = document.getElementById('add-a-button')
let completetask = document.getElementById('cmplt-task')
let darkmode = document.getElementById('dark-mode')
let main = document.getElementById('main')



function display(){
    if(input.value== ""){
        alert('type somethig')
    }
    else{
           
   const newli = document.createElement('li')
   const edit = document.createElement('span')
    const dlt = document.createElement('button')
    const check = document.createElement('input')
    newli.textContent = input.value
    output.appendChild(newli)
    check.type="checkbox"
    check.style.height = '30px'
    check.style.width = '30px'
    newli.appendChild(check)
    newli.appendChild(dlt)
    dlt.style.fontSize = '13px'
    dlt.style.height = '35px'
    dlt.style.width = '35px'
     edit.style.height = '35px'
     edit.style.width = '35px'
    dlt.style.backgroundColor = 'white'
    newli.appendChild(edit)
   input.value = ""
   const letters = '0123456789ABCDEF';
   let color = 'green';
   for (let i = 0; i < 6; i++) {
       newli.color += letters[Math.floor(Math.random() * 16)];
   }

    check.addEventListener('click', function() {
        completetask.appendChild(newli)
        check.remove()
        dlt.remove()
        edit.remove()
    });
   dlt.addEventListener('click',function(){
        newli.remove()
    })
    edit.addEventListener('click',function(){
       input.value = newli.textContent
       newli.remove()
    }) }
}


  darkmode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
  })


  
    
   
    


