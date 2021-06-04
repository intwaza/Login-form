function signup(){
    var x=document.getElementById('input').value
    if(x==""){
        document.getElementById('message').innerHTML="This Field is required"
        return false
    }
    if(x.length<=8){
        document.getElementById('message').innerHTML="your password is invalid must have 8 to 16 characters"
        return false
    }
    if(x.length>=16){
        document.getElementById('message').innerHTML="your password is invalid must have 8 to 16 characters"
        return false
    }
    else{
        document.getElementById('message').innerHTML="Strong password"
    }
   

}
