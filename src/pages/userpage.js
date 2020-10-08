import {eng} from "../routes/route.js"
import menu from "../components/menu.js"
import  SquareData from "../components/SquareData.js"
import squareData from "../components/SquareData.js"

function userpage(){
    document.getElementById("app").classList+="app-before"
    eng.componentsEngine.createComponent("pageUser",userpagerender())
    eng.componentsEngine.renderComponent("app","pageUser")
    squareData(1,"Criação de artigos","Os seus relatorios dos ultimos 15 dias de criação","","red")
    squareData(2,"Conexões e referencias","Suas referencias esse mês foi baixa","","blue")
    squareData(3,"Consumo na plataforma","Você esta consumindo mais que criando","")
}

function userpagerender(){
    return menu(),"<br>"+
    "<div class='userbanner'>"+
    "<div class='avatarLarge'>F</div>"+
    "<div class='userAbout'><h1>Seja bem vindo(a) "+sessionStorage.getItem("user")+"</h1>"+
    "<br> <h4>Você possui: 0 </h4>"+
    "<br> <h4>Conexões e referências: 0 </h4>"+
    "</div>"+
    "</div>"+
    "<div id='box-info-data' class='box-info'>"+
    "</div>"  
}

export default userpage