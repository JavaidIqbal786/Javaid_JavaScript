let div = document.querySelector('div');
div.onmouseout = () => {
    div.style.backgroundColor='yellow';
}
div.onmousemove = () => {
    div.style.backgroundColor='green';
}
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    alert("Single Click")
}
let btn2 = document.querySelector('#btn2');
btn2.ondblclick = () => {
    alert("Double Click")
}
let btn3 = document.querySelector('#btn3');
btn3.onclick = () => {
    console.log('Hello!');
}

// toggle button event

let modebtn = document.querySelector('#mode');
let curmode = "light";
modebtn.addEventListener("click", () => {
    if (curmode === "light"){
        curmode = "dark";
        document.querySelector('body').style.backgroundColor="black"
    }else{
        curmode = "light";
        document.querySelector('body').style.backgroundColor="white"
    }
})

