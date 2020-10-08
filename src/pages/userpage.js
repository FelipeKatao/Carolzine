import {eng} from "../routes/route.js"
import menu from "../components/menu.js"
import squareData from "../components/SquareData.js"
import squareFile from "../components/FileSquare.js"

function userpage(){
    document.getElementById("app").classList+="app-before"
    eng.componentsEngine.createComponent("pageUser",userpagerender())
    eng.componentsEngine.renderComponent("app","pageUser")
    squareData(1,"Criação de artigos","Os seus relatorios dos ultimos 15 dias de criação","","red")
    squareData(2,"Conexões e referencias","Suas referencias esse mês foi baixa","","blue")
    squareData(3,"Consumo na plataforma","Você esta consumindo mais que criando","")
    //Colocar aqui a logica para implementar a logica dos arquivos criados: 
    squareFile("filebox-user","Quimica Organica","Projeto de quimica organica a ser implementada na empresa.")
}

function userpagerender(){
    return menu(),"<br>"+
    "<div class='userbanner'>"+
    "<div class='avatarLarge'>F</div>"+
    "<div class='userAbout'><h1>Seja bem vindo(a) "+sessionStorage.getItem("user")+"</h1>"+
    "<br> <h4>Você possui: 0 </h4>"+
    "<br> <h4>Conexões e referências: 0 </h4>"+
    "<br><h4 class='log-out'><a href='#'>Encerrar Sessão</a></h4>"+
    "</div>"+
    "</div>"+
    "<div id='box-info-data' class='box-info'>"+
    "</div>"+
    "<div id='worksSapce'>"+
    "<div class='titleBasic'>Seus trabalhos</div>"+
    "<div id='filebox-user' class='box-info'>"+
    "</div>"+
    "</div>"  
}

export default userpage