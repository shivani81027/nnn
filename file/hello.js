let bu1=document.querySelector("#ss1");
let bu2=document.querySelector("#ss2");
let bu3=document.querySelector("#ss3");
let bu4=document.querySelector("#ss4");

let bodyy=document.querySelector("#fgh");
let body=document.querySelector("#dn");
let div1=document.querySelector("#mk1");
let div2=document.querySelector("#mk2");
let div3=document.querySelector("#mk3");

let divv=document.querySelector("#MKK4");
let ppp=document.querySelector("p");
let hh=document.querySelector("h1");





let ot=function ss() {
    if (div1.style.display=="none") {
        div1.style.display="inline-block" 
        
    } else {div1.style.display="none"
        
    }
    
}
console.dir(bu1);




let op=function ssp() {
    if (divone.style.display=="none") {
        divone.style.display="inline-block" 
        
        
    } else {divone.style.display="none"
        
    }
    
}
console.dir(bu1);

bu1.addEventListener("click",ot);

bu1.addEventListener("click",op);




let oy=function ssm() {
    if (div2.style.display=="none") {
        div2.style.display="inline-block" 
        
    } else {div2.style.display="none"
        
    }
    
}
console.dir(bu2);
bu2.onclick=oy


let ol=function mmm() {
    if (div3.style.display=="none") {
        div3.style.display="inline-block" 
        
    } else {div3.style.display="none"
        
    }
    
};
console.dir(bu3);
bu3.onclick=ol;

let off=function ssp() {
    if (divv.style.backgroundColor=="bisque") {
        divv.style.backgroundColor="blue";
        ppp.style.color="white";
        divv.style.border="solid black 2px";
       
        
        
    } else {divv.style.backgroundColor="bisque";
        
    }
    
};

let oof=function spk() {
    if (divv.style.display=="none") {
        divv.style.display="inline-block"
        divv.style.borderRadius="5%" ;
 
        
    } else {divv.style.display="none"
        
    }
    
};
    







let of=function sp() {
    if (divv.style.display=="none") {
        divv.style.display="inline-block" 
        
    } else {divv.style.display="none"
        
    }
    
};
console.dir(bu4);

bu4.addEventListener("mouseenter",off);
bu4.addEventListener("mouseenter",oof);


let ddd=function na() {if (div1.style.display=="inline-block") {
    div1.style.display="none"
    
}
    
};



let dd=function na() {if (div2.style.display=="inline-block") {
    div2.style.display="none"
    
}
    
};
let ddc=function na() {if (divone.style.display=="inline-block") {
    divone.style.display="none"
    
}
    
};




let cdd=function na() {if (div3.style.display=="inline-block") {
    div3.style.display="none"
    
}
    
};


body.addEventListener("mouseenter",ddd);
body.addEventListener("mouseenter",dd);
body.addEventListener("mouseenter",ddc);
body.addEventListener("mouseenter",cdd);

hh.addEventListener("mouseenter",function j(event) {
    event.stopPropagation();
 
     bodyy.style.backgroundColor="cornflowerblue" ;  
    } 
    

    
);
hh.addEventListener("mouseout",function (event) {
    event.stopPropagation();
 
     bodyy.style.backgroundColor="pink" ;  
    } 
    

    
);











