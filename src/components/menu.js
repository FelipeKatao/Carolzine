import EngineApp from '../../Framework/engine.js'

let eng =new EngineApp()
function menu(){
    eng.componentsEngine.createComponent("menu",menurender())
    eng.componentsEngine.renderComponent("app","menu")
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
    "<div class='avatar'>F</div>"+
    "</nav>"
}

export default menu