import EngineApp from "../../Framework/engine.js"
import manageRoutes from "../routes/route.js"
var eng = new EngineApp()
start()
function start(){
    setTimeout(function(){
        console.log("hello")
        eng.renderEngine.pageDynamic="app"
        eng.renderEngine.clearPage()
        manageRoutes()
        
    },6000)
}