const body = document.body;

const div = document.createElement("div");
const img = document.createElement("img");

img.setAttribute("src","https://images.unsplash.com/photo-1683637234905-d04b6579b428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")


div.classList.add("container")
div.append(img); 
body.append(div)