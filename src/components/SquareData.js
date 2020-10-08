import EngineApp from '../../Framework/engine.js'

let eng = new EngineApp()

function squareData(data,title,infoData,ApiCode,colorGraph){
    eng.componentsEngine.createComponent("squareId"+data,renderSuareData(title,infoData,ApiCode,colorGraph))
    eng.componentsEngine.renderComponent("box-info-data","squareId"+data)
}

function renderSuareData(title,infoData,ApiCode,colorGraph){
    return "<div class='squareData'>"+
    "<div class='squareGraph'></div>"+
    "<div class='TitleData'>"+title +"</div>"+
    "<div class='InfoData'>"+infoData+"</div>"+
    "</div>"
}

export default squareData