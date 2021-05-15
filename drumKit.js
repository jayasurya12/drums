let main=document.createElement('div');
main.setAttribute('class',"main");
document.body.appendChild(main);
//
let h1=document.createElement('h1');
h1.innerHTML='Drum Kit';
main.appendChild(h1);
//
let ButtonClassList=["w drum",'a drum',"s drum",'d drum',"g drum",'j drum',"l drum"];
let ButtonNames=['w','a','s','d','g','j','l'];
for(i=0; i<ButtonClassList.length; i++){
    let buttonContainer=document.createElement('button');
    buttonContainer.setAttribute('class',ButtonClassList[i]);
    buttonContainer.innerText=ButtonNames[i];
    main.appendChild(buttonContainer);
}

for(i=0;i<document.querySelectorAll('button').length; i++){
    document.querySelectorAll("button")[i].addEventListener('click',function(){
        let buttonInnerHtml=this.innerText;
        soundMakes(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}
function soundMakes(key){
    switch(key){
        case "w":
            let tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "g":
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "j":
            let kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "l":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        default:
        break;
    }
}
function buttonAnimation(currentKey){
    let activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add('pressed');
    setTimeout(()=>{
        activeKey.classList.remove('pressed')
    },150);
}
