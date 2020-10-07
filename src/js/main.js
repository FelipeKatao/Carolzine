import EngineApp from "../../Framework/engine.js"
import {manageRoutes} from "../routes/route.js"
let eng = new EngineApp()
let times=0
export default function start(){
    setTimeout(function(){
        console.log("hello")
        eng.renderEngine.pageDynamic="app"
        eng.renderEngine.clearPage()
        times+=1
        manageRoutes(2)
    },6000)
}
function gotoPages(page){
    console.log(page)
}


export {eng,gotoPages,start}