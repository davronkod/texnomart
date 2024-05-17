const btnEl = document.querySelector(".btn");
const menuEl = document.querySelector(".bi-list");
const closeEl = document.querySelector(".bi-x-lg");
const catalogEl = document.querySelector(".catalog");
const catalogEl1 = document.querySelector(".catalog_text1");
const catalogEl2 = document.querySelector(".catalog_text2");
const catalogEl3 = document.querySelector(".catalog_text3");
const catalogEl4 = document.querySelector(".catalog_text4");
const catalogEl5 = document.querySelector(".catalog_text5");
btnEl.addEventListener("click", () => {
    catalogEl.style.marginLeft = "0px";
    btnEl.classList.toggle()
});

catalogEl1.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "red";
});

catalogEl2.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "blue";
});

catalogEl3.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "black";
});

catalogEl4.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "gold";
});

catalogEl5.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "green";
});
btnEl.addEventListener("click", () => {
    menuEl.style.display = "none";
    closeEl.style.display = "block";
})
closeEl.addEventListener("click", () => {
    closeEl.style.display = "none";
    menuEl.style.display = "block";
})
