import EngineApp from "../../Framework/engine.js"
import login from "../components/login.js"

let eng = new EngineApp()

function Welcomepage(){
    eng.componentsEngine.createComponent("pageWelcomeLogin",pageRender())
    eng.componentsEngine.renderComponent("footer","pageWelcomeLogin")
}

function pageRender(){
    return  login(),"<div class='backElement'></div>"
}

export default Welcomepage