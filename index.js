const body = document.body;

const h2   = document.createElement("h2");
const div  = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");

const img  = document.createElement("img"); 
const img1 = document.createElement("img"); 
const img2 = document.createElement("img"); 
const img3 = document.createElement("img"); 
const img4 = document.createElement("img"); 
const img5 = document.createElement("img"); 
const img6 = document.createElement("img"); 
const img7 = document.createElement("img"); 
const img8 = document.createElement("img"); 

img.setAttribute("src", "./assets/anime.jpg")
img1.setAttribute("src","./assets/girl.jpg")
img2.setAttribute("src","./assets/green.jpg")
img3.setAttribute("src","./assets/katana.jpg")
img4.setAttribute("src","./assets/red.jpg")
img5.setAttribute("src","./assets/pexels1.jpeg")
img6.setAttribute("src","./assets/tachi.jpg")
img7.setAttribute("src","./assets/pexel2.jpeg")
img8.setAttribute("src","./assets/pexels.jpeg")

div.classList.add("container")
div1.classList.add("puzzle")
div2.classList.add("box")
div3.classList.add("box")
div4.classList.add("box")

body.append(div);
div.append(h2)
div.append(div1);
div1.append(div2); 
div1.append(div3); 
div1.append(div4); 
div2.append(img);
div2.append(img1);
div2.append(img2);
div3.append(img3);
div3.append(img4);
div3.append(img5);
div4.append(img6);
div4.append(img7);
div4.append(img8);








