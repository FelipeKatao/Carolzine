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
    axios.get('http://kataofelipe.pythonanywhere.com/projects/geradores_Quimicos',{
        headers:{"Acess-Control-Allow-Origin":"http://kataofelipe.pythonanywhere.com"}
    })
    .then(function(response){
        console.log(response)
    })
   fetch('http://kataofelipe.pythonanywhere.com/projects/geradores_Quimicos')
  .then(response => response.json())
  .then(function(data){
      document.getElementById("teste").innerText+=data["Quimica_organica"]["corpo"]
      console.log(data)
  })
}
function workdashRender(){
    return menu(),sidemenu(),"<div id='teste' class='dashpaper'></div>" 
}

export default workdash