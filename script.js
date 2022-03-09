let adviceIdElement=document.querySelector('.card-title')
let adviceElement=document.querySelector('.content')


fetch('https://api.adviceslip.com/advice')
.then(res=>res.json())
.then(data=>
    {
        let idElment=document.createElement('h3')
        idElment.textContent=`ADVICE # ${data.slip['id']}`
        idElment.setAttribute('class','card-title')
        adviceElement.appendChild(idElment)

        let quouteElement=document.createElement('p')
        quouteElement.textContent=`"${data.slip["advice"]}"`
        quouteElement.setAttribute('class','card-content')
        adviceElement.appendChild(quouteElement)
    })
.catch(error=>console.log(error))