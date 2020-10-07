const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )   
    .then( data => {     
      const firstName = data["results"][0]["name"]["first"]    
      const lastName = data["results"][0]["name"]["last"]    
      const title = data["results"][0]["name"]["title"]    
      const nameForm = document.querySelector("label")    
      const givenName = `${title} ${firstName} ${lastName}`    
      const nameP = document.createElement("p")
      nameP.innerText = givenName    
      nameForm.appendChild(nameP)  
    })
});
