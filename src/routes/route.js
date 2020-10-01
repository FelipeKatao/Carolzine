import EngineApp from "../../Framework/engine.js"
import welcomePage  from "../pages/welcomepage.js"
import workdash from "../pages/workdash.js"

let eng = new EngineApp()

function manageRoutes(){
    eng.routesEngine.registerRoute("http://127.0.0.1:5500/index.html#Login",welcomePage)
    eng.routesEngine.registerRoute("http://127.0.0.1:5500/index.html?#Login",welcomePage)
    eng.routesEngine.registerRoute("http://127.0.0.1:5500/index.html#workArea",workdash)
    eng.routesEngine.runRoute("http://127.0.0.1:5500/","http://127.0.0.1:5500/index.html#Login")
}

export default manageRoutes