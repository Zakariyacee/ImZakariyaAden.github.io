const cars = [
  {
    id: 1,
    model: "Rolls Royce Ghost",
    year: 2021,
    price: 630,
    img: "./imgs/rolls2021.jpg"
  },
  {
    id: 2,
    model: "McLaren 720s Coupe",
    year: 2020,
    price: 800,
    img: "./imgs/mclaren3.jpg"
  },
  {
    id: 3,
    model: "Mercedes-Benz AMG G63",
    year: 2022,
    price: 545,
    img: "./imgs/gwagon.jpeg"
  },
  {
    id: 4,
    model: "BMW M4 Coupe",
    year: 2018,
    price: 380,
    img: "./imgs/bmw-m4-coupe-tuned-by-revozport-1.jpg"
  },
  {
    id: 7,
    model: "Dodge Charger F&F edition",
    year: 1970,
    price: 550,
    img: "./imgs/dom.jpg"
  },
  {
    id: 8,
    model: "Maserati Ghibli",
    year: 2022,
    price: 640,
    img: "./imgs/maserati.jpg"
  },
]

const sectionCenter = document.querySelector(".services-container");


function displayCarsItems(carsItems){
  let displayCars = carsItems.map(function (item){

    return `
    <div class="box">
        <div class="box-img">
          <img src="${item.img}" alt="">
        </div>
        <p>${item.year}</p>
        <h3>${item.model}</h3>
        <h2>£${item.price} <span>per day</span></h2>
        <a href="#" class="btn">Hire Now</a>
      </div>
    `
    
  })
  displayCars = displayCars.join("")

  sectionCenter.innerHTML = displayCars
}

displayCarsItems(cars)



let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-menu");
  navbar.classList.toggle("active")
}
