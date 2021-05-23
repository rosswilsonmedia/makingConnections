function editProfile(){
    var newUserName=prompt('What would you like your new name for your profile to be?');
    if(newUserName!=""){
        document.querySelector('.userInfo>h1').innerHTML=newUserName;
    }
}

function connectionRequests(el){
    if(el.alt=="accept"){
        document.querySelector('.yourConnections .sectionHeader h3>span').innerHTML++;
    }
    el.parentNode.parentNode.parentNode.querySelector('.sectionHeader h3>span').innerHTML--;
    el.parentNode.parentNode.remove();
}