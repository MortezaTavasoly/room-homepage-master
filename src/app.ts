const left = document.querySelector(".left") as HTMLImageElement;
const right = document.querySelector(".right") as HTMLImageElement;
const h1 = document.querySelector(".discription h1") as HTMLHeadingElement;
const p = document.querySelector(".discription p") as HTMLParagraphElement;
const menuIcon = document.querySelector(".menu-icon") as HTMLImageElement;
const closeIcon = document.querySelector(".close") as HTMLImageElement;
const mobileMenu = document.querySelector(".mobile-menu") as HTMLDivElement;
const images = document.querySelectorAll(".image img")!;


let counter: number = 0;

left.addEventListener("click", () => {
  counter++;
  slide();
});

right.addEventListener("click", () => {
  counter--;
  slide();
});

const slide = (): void => {
  text();
  images.forEach((img: any) => {
    if (counter >= -2 && counter <= 0) {
      img.style.transform = `translateX(${counter * 100}%)`;
    } else if (counter > 0) {
      counter = 0;
    } else if (counter < -2) {
      counter = -2;
    }
  });
};

const text = (): void => {
  if (counter === -1) {
    h1.textContent = `We are available all across the globe`;
    p.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;
  } else if (counter === -2) {
    h1.textContent = `Manufactured with the best materials`;
    p.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`;
  } else if (counter === 0) {
    h1.textContent = `Discover innovative ways to decorate`;
    p.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
  }
};

menuIcon.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});
closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
