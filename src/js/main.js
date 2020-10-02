import EngineApp from "../../Framework/engine.js"
import manageRoutes from "../routes/route.js"
let eng = new EngineApp()
start()
export default function start(){
    setTimeout(function(){
        console.log("hello")
        eng.renderEngine.pageDynamic="app"
        eng.renderEngine.clearPage()
        manageRoutes()
        
    },6000)
}
function gotoPages(page){
    console.log(page)
    //eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#workArea")
}


export {eng,gotoPages,start}