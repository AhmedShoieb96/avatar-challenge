function getrandomcolor(){
let options= '123456789ABCDEF';
let color = '#';
for(let i=0 ; i<6;i++){
    color +=  options[Math.floor(Math.random()*16)];
}
return color;
}
export default (name , avatar)=>{
    let avatarEle =document.createElement('div');
    avatarEle.className="avatar"
    avatarEle.style.backgroundColor = getrandomcolor();
    
    if(avatar){
        let avatarimg =document.createElement('img');
        avatarimg.className="avatar"
        avatarimg.src= avatar
        avatarEle.append(avatarimg)

    }else{
        let initials = name
        .split(' ')
        .map((n) => n[0].toUpperCase())
        .join('');
        let avatarText = document.createElement("span")
        avatarText.innerText=initials;

        avatarEle.append(avatarText);
        
    }

    return avatarEle;
}