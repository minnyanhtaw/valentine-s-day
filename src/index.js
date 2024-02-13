const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const text = document.querySelector(".text");
const firstImg = document.querySelector(".first-img");
const secImg = document.querySelector(".sec-img");
const thirdImg = document.querySelector(".third-img");
const fourthImg = document.querySelector(".fourth-img");
const fiveImg = document.querySelector(".five-img");
const sixImg = document.querySelector(".six-img");
const sevenImg = document.querySelector(".seven-img");
const eightImg = document.querySelector(".eight-img");
const yesImg = document.querySelector(".yes-img");
const valentine = document.querySelector(".valentine");

const sadImg = [
  firstImg,
  secImg,
  thirdImg,
  fourthImg,
  fiveImg,
  sixImg,
  sevenImg,
  eightImg,
];

yesBtn.addEventListener("click", yes);

function yes() {
  yesBtn.remove();
  noBtn.remove();
  text.remove();
  firstImg.remove();
  secImg.remove();
  thirdImg.remove();
  fourthImg.remove();
  fiveImg.remove();
  sixImg.remove();
  sevenImg.remove();
  eightImg.remove();
  yesImg.classList.remove("hidden");
  valentine.classList.remove("hidden");
}

noBtn.addEventListener("click", changeSadImg);

let currentsadImgIndex = 0;
function changeSadImg() {
  firstImg.classList.add("hidden");
  sadImg[currentsadImgIndex].classList.add("hidden"); // Hide the current sad image
  currentsadImgIndex++; // Move to the next sad image
  if (currentsadImgIndex >= sadImg.length) {
    currentsadImgIndex = 0; // Reset index if it exceeds the length of the array
  }
  sadImg[currentsadImgIndex].classList.remove("hidden"); // Show the next sad image
}
