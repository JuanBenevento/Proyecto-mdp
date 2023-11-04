const wspImg = document.querySelector(".wapp-boton > img")
const LARGE_IMAGE_PATH = "./imagenes/large-wsp.png"
const SMALL_IMAGE_PATH = "./imagenes/whatsapp-svgrepo-com.svg"

const checkAndModifyWspImage = () => {
    const {innerWidth} = window;
    if (innerWidth > 992){
        wspImg.setAttribute('src', LARGE_IMAGE_PATH)
    }else{
        wspImg.setAttribute('src', SMALL_IMAGE_PATH)
    }
}


window.onresize = checkAndModifyWspImage;
window.onload = checkAndModifyWspImage;
