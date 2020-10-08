import {eng} from "../routes/route.js"
function addEvents(){
document.getElementById("userID").addEventListener("click",function(){eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#user")},false)
}

export default addEvents