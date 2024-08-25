
const container = document.querySelector (".container");
const cards = [
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
    {title:"Perfected Strategies for you", desc: "Lorem ipsum dolor sit amet consectetur. Id est convallis neque elementum.", img1: "./a22c95a96b25b207b760ab6545995150.png", img2:"./b3de947c39102b151251150791b5ba1e.png"},
];
for (let i = 0; i< cards.length; i++) {
    
    container.innerHTML += ` <div class="cardContainer">
    <div class="card">
        <img src="${cards [i].img1}">
    </div>
    <div class="adid">
        <img src="${cards [i].img2}">
    </div>
    <div class="description">
        <h2>${cards [i].title}</h2>
        <p>${cards [i].desc}</p>
    </div>
</div>`
};