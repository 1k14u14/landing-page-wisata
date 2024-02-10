const menu = document.querySelector("nav span");

const close = document.querySelector("aside ul span");

const aside = document.querySelector("aside");

menu.addEventListener("click", (e) => {
  aside.style.left = "0";
});

close.addEventListener("click", (e) => {
  aside.style.left = "750px";
});
