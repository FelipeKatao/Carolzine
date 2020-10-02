import EngineApp from "../../Framework/engine.js"
import verifyPassword from "../controlers/acessLogin.js"
import gotoPages from "../js/main.js"

let eng = new EngineApp()

function login(){
    eng.componentsEngine.createComponent("login",loginRender())
    eng.componentsEngine.renderComponent("app","login")
    addList()
}

function addList(){
    document.getElementById("btAcess").addEventListener("click",function(){
        if(verifyPassword(document.getElementById("IdLogin").value,document.getElementById("PassIdLogin").value)){
           eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#workArea") 
        }
        else{
            eng.renderEngine.changeContentElement("identLogin","Senha ou usuarios incorretos")
            document.getElementById("IdLogin").value =""
            document.getElementById("PassIdLogin").value=""            
        }
    })
}

function loginRender(){
   return "<div class='login-box'>"+
   "<div><img src='src/img/logoBrand.svg'></div>"+
   "<h2>Faça o login</h2>"+
   "<p id='identLogin'>Faça o login para criar seus projetos com a Carolzine.</p>"+
   "<form>"+
        "<h4>Seu login:</h4>"+
        "<input id='IdLogin' placeholder='login' autocomplete='username'>"+
        "<h4>Senha:</h4>"+
        "<input id='PassIdLogin' placeholder='senha' type='password' autocomplete='current-password'><br>"+
        "<button id='btAcess'>Acessar</button>"+
   "</form>"+
   "</div>"
}

export default login