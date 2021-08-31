const rain=document.getElementById('rain').style.display='none'
const cloud=document.getElementById('cloud').style.display='none'
const normal=document.getElementById('normal').style.display='none'
const moon=document.getElementById('moon').style.display='none'
const strom=document.getElementById('strom').style.display='none'
const snow=document.getElementById('snow').style.display='none'
const rclearain=document.getElementById('clear').style.display='none'


const weatherinput=()=>{
    const input=document.getElementById('inputText');
    const inputvalue=input.value ;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=1fbb386453806ce4f5fba2fdf3003a63`
    fetch(url)
    .then(res => res.json())
    .then(data=>displey(data))
    
    input.value='';
    
}
const displey=tem=>{
console.log(tem)
const cel=(tem.main.feels_like);
const celcious=Math.round(cel-273);
console.log(celcious)
const inputName=(tem.name)
const temp=document.getElementById('emptyTemp');
temp.innerText=celcious;
const city=document.getElementById('emptyCity');
const id=(tem.id.toFixed(0,3));
const nuId=id.slice(0, 3);
const mId=parseInt(nuId);
if(mId<232){
    const strom=document.getElementById('strom').style.display='block' ;
}
else if(mId>300 && mId<321){
    const cloud=document.getElementById('cloud').style.display='block'
}
 else if(mId>500 && mId<531){
    const rain=document.getElementById('rain').style.display='block'

}
else if(mId>600 && mId<622){
    const snow=document.getElementById('snow').style.display='block'

}
else if(mId>701 && mId<781){
    const strom=document.getElementById('strom').style.display='block' ;
}
else if(mId>799 && mId<801){
    const moon=document.getElementById('moon').style.display='block'

}
else if(mId>801){
    const normal=document.getElementById('normal').style.display='block'


}
console.log(mId)
city.innerText=inputName
}
