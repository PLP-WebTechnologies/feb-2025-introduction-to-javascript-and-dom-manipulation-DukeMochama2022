const about=document.getElementById("about")
const aboutButton=document.getElementById("aboutButton")
const services=document.getElementById("services")
const service=document.getElementById("service")
const servicesButton=document.getElementById("servicesButton")

// changing the font size of the about paragraph
about.style.fontSize='20px'

// When the user clicks the button the content changes and color to brown
aboutButton.addEventListener('click',()=>{
    about.textContent="Our services are the best so far!. Customers have positive feedback."
    about.style.color="brown"
})

// javascript stles the service paragraph dynamically.
services.style.fontSize="20px"
services.style.color="purple"

// When the button is clicked the list of services are displayed on the screen

const servicesOffered=[
    "Website Design",
    "UI UX designer",
    "Project Management",
    "Social media Management",
    "Content creation"
]
servicesButton.addEventListener('click',()=>{
    if(service.style.display=='none'){
        service.innerHTML=''//clears previous list of services
    servicesOffered.forEach(serviceOffered => {
        const newServices=document.createElement("li") //this create a new list element
        newServices.textContent=`${serviceOffered}`
        newServices.style.listStyle='none' // it changes the list style type to none 
        service.appendChild(newServices)
        
    });
    service.style.display='block' //show the list
    servicesButton.textContent='Hide Services'
}else{
    service.style.display='none'//hides the list
    servicesButton.textContent='Show Services'
}
})
