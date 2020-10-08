import {routesCreated,eng} from "../routes/route.js"


function FileSquare(appendLocal,file,about){
    eng.componentsEngine.createComponent(file,FileRender(file,about))
    eng.componentsEngine.renderComponent(appendLocal,file)
    document.getElementById(file).addEventListener("click",AcessFile,false)
}

//Para testes não sera usada na final da implementação
function AcessFile(){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/index.html#workArea")
}


function FileRender(file,about){
    return "<a id='"+file+"' href='http://127.0.0.1:5500/index.html#workArea'><div class='squareFile'>"+
    "<div class='titleFile'>"+file+"</div>"+
    "<div class='aboutFile'>"+about+"</div>"+
    "</div></a>"
}

export default FileSquare