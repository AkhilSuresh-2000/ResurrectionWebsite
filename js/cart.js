let buttons = document.querySelectorAll('.btnCart');
let cart = document.querySelector('.cart');
// localStorage.heading.clear();
buttons.forEach((btn)=>{
  // console.log(btn);
  
  btn.onclick = () =>{
   
    let name = btn.parentElement.querySelector('h3').innerText;
    let price = btn.parentElement.querySelector('#price').innerText;
    
 

    // console.log(name,price);
    
    const item = `
        <div class="item">
            <h1> ${name} </h1>
            <p> ${price} </p>
        </div>
    `;

    // console.log(item);
    
    localStorage.items += item;
    // alert("This Item has been added to the Cart!");


  }
})

let btns = document.querySelectorAll('.btnCart');


// btns.forEach(btn=>{
//   btn.onclick = ()=>{
//     localStorage.heading += `<h1> ${btn.parentElement.querySelector('#heading').innerText} </h1>`;
//   }
// });

function Cartadd(){
  alert("Thanks for shopping with Ressurection!. You will be remembered!")
}
