document.getElementById('output').style.visibility='hidden';
document.getElementById('kginput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility='visible';
    let kg=e.target.value;


document.getElementById('goutput').innerHTML=kg*1000;
document.getElementById('pondsoutput').innerHTML=kg*2.20462262;
document.getElementById('ozoutput').innerHTML=kg*35.274;
});
