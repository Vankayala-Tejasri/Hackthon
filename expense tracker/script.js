obj:{
const a=document.getElementById("amount");
const d=parseInt(a.value);
const c=document.getElementById("category").value;
const date=document.getElementById("date").value;
}


const addValues=()=>{
    

}


const addValue=()=>{
console.log(d);
console.log(c);
console.log(date);
    const tab=document.getElementById("table")
    tab.innerHTML=`<tr><td>${d}</td><td>${c}</td><td>${date}</td></tr>`

}