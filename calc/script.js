let a=document.getElementById("1");
function dis(num){
    a.value += num;
}
function equal(){
    try{
        a.value=eval(a.value);

    }
    catch{
        alert("Check the values")
    }
}
function clr(){
    a.value="";
}
function del(){
    a.value=a.value.slice(0,-1);
}