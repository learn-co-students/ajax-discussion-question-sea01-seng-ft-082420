const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const newPersonBtn = document.querySelector('button');
  newPersonBtn.addEventListener('click', newPersonFetch);
  
  function newPersonFetch() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => updateInformation(json.results[0]));
  }

  function updateInformation(person){
    console.log(person)
    fullname.textContent = `${person.name.first} ${person.name.last}`;
    document.getElementById('email').textContent = person.email;
    document.getElementById('street').textContent = `${person.location.street.number} ${person.location.street.name}`;
    document.getElementById('state').textContent = person.location.state;
    document.getElementById('city').textContent = person.location.city;
    document.getElementById('postcode').textContent = person.location.postcode;
    document.getElementById('phone').textContent = person.phone;
    document.getElementById('cell').textContent = person.cell;
    document.getElementById('date_of_birth').textContent = person.dob.date.toString().slice(0,10);
    
  }
});


