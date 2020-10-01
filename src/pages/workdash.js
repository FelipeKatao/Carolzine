import EngineApp from "../../Framework/engine.js"
import menu from "../components/menu.js"
import sidemenu from "../components/sidemenu.js"

let eng = new EngineApp()
function workdash(){
    eng.renderEngine.pageDynamic="app"
    eng.renderEngine.clearPage()
    eng.componentsEngine.createComponent("workdash",workdashRender())
    eng.componentsEngine.renderComponent("app","workdash")
}
function workdashRender(){
    return menu(),sidemenu(),"<div class='dashpaper'></div>"
}

export default workdash