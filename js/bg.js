const body = document.querySelector("body");

function paintImg(number){

  const img = new Image();
  img.src = `pictures/${number}.jpg`;
  img.classList.add('bgimage');
  body.appendChild(img);
}

function getRandom(){
  const random = Math.random() *6 +1
  const result = Math.floor(random);
  
  paintImg(result);
}

getRandom();