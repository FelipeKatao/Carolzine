import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function login(){
    eng.componentsEngine.createComponent("login",loginRender())
    eng.componentsEngine.renderComponent("app","login")
}

function loginRender(){
   return "<div class='login-box'>"+
   "<div><img src='src/img/logoBrand.svg'></div>"+
   "<h2>Faça o login</h2>"+
   "<p>Faça o login para criar seus projetos com a Carolzine.</p>"+
   "<form>"+
        "<h4>Seu login:</h4>"+
        "<input placeholder='login'>"+
        "<h4>Senha:</h4>"+
        "<input placeholder='senha'><br>"+
        "<button>Acessar</button>"+
   "</form>"+
   "</div>"
}

export default login