let btn_open = document.querySelector(".icon-btn-open");
let btn_close = document.querySelector(".icon-btn-close");
let menu_sub = document.querySelector(".menu-sub");
let slider = document.querySelector(".slider");

btn_open.addEventListener("click", () => {
    menu_sub.style.position = "fixed";
    menu_sub.style.right = "0%";
    menu_sub.style.transition = ".7s";
    slider.style.position = "fixed";
    slider.style.right = "50%";
    slider.style.transition = ".6s";
    btn_open.style.transition = ".7s";
    btn_open.style.opacity = "0";
})

btn_close.addEventListener("click", () => {
    menu_sub.style.position = "fixed";
    menu_sub.style.right = "-50%";
    menu_sub.style.transition = ".6s";
    slider.style.position = "fixed";
    slider.style.right = "-100%";
    slider.style.transition = ".7s";
    btn_open.style.transition = ".7s";
    btn_open.style.opacity = "1";
}) 
let user={
    age:12,
        reading:'sahayn'
}
// 
sessionStorage.setItem("user",JSON.stringify(user))