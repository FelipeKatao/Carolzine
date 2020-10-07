
import login from "../components/login.js"
import {routesCreated,eng} from "../routes/route.js"


function Welcomepage(){
    if(sessionStorage.getItem('user')!=undefined){
        eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#workArea")
    }
    else{
    eng.componentsEngine.createComponent("pageWelcomeLogin",pageRender())
    eng.componentsEngine.renderComponent("footer","pageWelcomeLogin")
    }
}

function pageRender(){
    return  login(),"<div class='backElement'></div>"
}

export default Welcomepage