const wallpaper = document.querySelector(".wallpaper");
const register = document.querySelector(".registerlink");
const login = document.querySelector(".loginlink");
const btnpop = document.querySelector(".Login")
const cancel = document.querySelector(".icon-close")

register.addEventListener("click",()=>{
    wallpaper.classList.add("active")
});

login.addEventListener("click",()=>{
    wallpaper.classList.remove("active")
});

btnpop.addEventListener("click",()=>{
    wallpaper.classList.add("active-pop")
});

cancel.addEventListener("click",()=>{
    wallpaper.classList.remove("active-pop")
});
