
const container = document.querySelector (".container");
const cards = [
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
];

cards.forEach((data)=>container.innerHTML += ` <div class="cardContainer">
      <div class="card">
          <img src="${data.img1}">
      </div>
      <div class="adid">
          <img src="${data.img2}">
     </div>
   <div class="description">
          <h2>${data.title}</h2>
          <p>${data.desc}</p>
     </div>
  </div>`);