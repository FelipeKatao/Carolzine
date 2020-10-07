import EngineApp from "../../Framework/engine.js"
import menu from "../components/menu.js"
import sidemenu from "../components/sidemenu.js"

let eng = new EngineApp()
function workdash(){
    document.getElementById("app").classList+="app-before"
    eng.renderEngine.pageDynamic="app"
    eng.renderEngine.clearPage()
    eng.componentsEngine.createComponent("workdash",workdashRender())
    eng.componentsEngine.renderComponent("app","workdash")
    ApiPager()
}
function ApiPager(){
    fetch('https://carolzine.herokuapp.com/projects/Quimica_organica')
    .then(response => response.json())
    .then(json => ChangeContent(json))
}
function ChangeContent(object){
    document.getElementById("titulo1").innerText=object["Quimica_organica"]["titulo"]
    document.getElementById("article1").innerText=object["Quimica_organica"]["corpo"]
}
function workdashRender(){
    return menu(),sidemenu(),"<div id='teste' class='dashpaper'>"+
    "<h1 id='titulo1' class='tituloPage'></h1>"+
    "<article id='article1' class='corpoPage'></article>"+
    "</div>" 
}

export default workdash