const manbou = document.getElementById("manbou")
const dolphin = document.getElementById("dolphin")

manbou.addEventListener('click',() => {
    const manbouContent = document.getElementById("manbouContent")
    manbouContent.classList.add('visible')
},false)
dolphin.addEventListener('click',() => {
    const dolphinContent = document.getElementById("dolphinContent")
    dolphinContent.classList.add('visible')
},false)

function clicked(){
    const pic3 = document.getElementById("explain1");
    pic3.style.visibility = "visible";
}
function clickAgain(){
    const pic4 = document.getElementById("explain2");
    pic4.style.visibility = "visible";
}
