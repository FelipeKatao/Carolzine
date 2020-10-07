
function verifyPassword(login,senha){
    if(login=="felipe" && senha=="shamanking23"){
        sessionStorage.setItem('user','felipe')
        return true
    }
    else{
        return false
    }
}


export default verifyPassword