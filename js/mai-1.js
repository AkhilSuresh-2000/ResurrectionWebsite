var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let users = [{
  name: 'Akhil Suresh',
  email: 'admin',
  password: '1234'
},
{
  name: 'Kim jong-Un',
  email: 'someone@something.com',
  password: '12345'
},
{
  name: 'Donald Trupe',
  email: 'someoneagain.com',
  password: '12346'
}]


let submit = document.querySelector('.sbt');


submit.onclick = function(event){
  event.preventDefault();
  let email = document.querySelector('.email').value;
  let password = document.querySelector('.passwd').value;
  console.log(email,password);

  let userFound = false;
  users.forEach(function(user){
      if(email.toUpperCase() == user.email.toUpperCase()){
          userFound = true;

          if(password.toUpperCase() == user.password.toUpperCase()){
              alert('welcome');

              document.querySelector('#container .heading button').innerText = user.name;
              document.querySelector('.modal').style.display = 'none';
             
          }
          else{
              alert('wrong password')
          }

      }
  });

  if(!userFound){
      alert('user not found');
  }
  
}