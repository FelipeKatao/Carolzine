import EngineApp from "../../Framework/engine.js"
import menu from "../components/menu.js"

let eng = new EngineApp()
function workdash(){
    eng.renderEngine.pageDynamic="app"
    eng.renderEngine.clearPage()
    eng.componentsEngine.createComponent("workdash",workdashRender())
    eng.componentsEngine.renderComponent("app","workdash")
}
function workdashRender(){
    return menu(),"<div>Area de trabalho</div>"
}

export default workdash