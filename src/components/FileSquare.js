import EngineApp from '../../Framework/engine.js'

let eng = new EngineApp()

function FileSquare(appendLocal,file,about){
    eng.componentsEngine.createComponent(file,FileRender(file,about))
    eng.componentsEngine.renderComponent(appendLocal,file)
}

function FileRender(file,about){
    return "<div class='squareFile'>"+
    "<div class='titleFile'>"+file+"</div>"+
    "<div class='aboutFile'>"+about+"</div>"+
    "</div>"
}

export default FileSquare