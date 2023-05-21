let container = document.querySelector(".continer");

let all = document.querySelectorAll(".all-img");

all.forEach(item => {
    item.addEventListener("mouseover", (eo) => {


        document.querySelector(".active").classList.remove("active");

        eo.target.classList.add("active")

    })
})