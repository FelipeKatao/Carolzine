import {eng} from "../routes/route.js"

function menu(){
    eng.componentsEngine.createComponent("menu",menurender())
    eng.componentsEngine.renderComponent("app","menu")
    document.getElementById("userID").addEventListener("click",GotoMenu_User,false)
}

function GotoMenu_User(){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#user")
}

function menurender(){
    return "<nav class='menuWork'>"+
    "<ul>"+
    "<li id='brandlogomenu'><img height=40 width=40 src='src/img/logoBrand.svg'></li>"+
        "<li id='nameApp'>Carolzine </li>"+
        "<li>| Criar novo espaço |</li>"+
        "<li>| Adicionar elemento |</li>"+
        "<li>| Gerar relatorio |</li>"+
    "</ul>"+
    "<a id='userID' href='http://127.0.0.1:5500/index.html#user'><div class='avatar'>F</div></a>"+
    "</nav>"
}

export default menu