var div=document.createElement("div");
div.className="main";
div.style.textAlign="center";

var int=document.createElement("input");
int.setAttribute("type","text");
int.setAttribute("id","country");
document.body.append(int);

var button=document.createElement("button");
button.setAttribute("type",button);
button.classList.add("btn","btn-primary");
button.style.marginLeft="8px";
button.addEventListener("click",foo);
button.innerHTML="search";

let active=document.createElement("div");
active.setAttribute("id","active");

div.append(int,button,active);

document.body.append(div);

async function foo(){
let res=document.getElementById("country").value;
let url=`https://api.covid19api.com/total/dayone/country/${res}`;
let res1=await fetch(url);
let res2=await res1.json();
console.log(res2);
let index=res2.length-1;
let final=res2[index].Active;
active.innerHTML=`Active case  ${final} <br> Death ${res2[index].Deaths} <br> Recovered ${res2[index].Recovered}`; 
}