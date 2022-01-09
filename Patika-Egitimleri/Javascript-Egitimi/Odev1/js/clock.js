function getName(){
    var name=prompt("Bir isim giriniz","lütfen isminizi giriniz..")
    var spanName=document.getElementById("myName");
    spanName.innerHTML=name;
}
function showTime(){
    var span=document.getElementById("clock");
    var date=new Date();
    let second=String(date.getSeconds()).substring(-2);
    let minute=String(date.getMinutes()).substring(-2);
    let hours=String(date.getHours()).substring(-2);
    let day=date.getDay();
    let dayName;
    switch(day){
        case 0:
            dayName="Pazar";
            break;
        case 1:
            dayName="Pazartesi";
            break;
        case 2:
            dayName="Salı";
            break;
        case 3:
            dayName="Çarşamba";
            break;
        case 4:
            dayName="Perşembe";
            break;
        case 5:
            dayName="Cuma";
            break;
        default:
            dayName="Cumartesi";
            break;
    }
    let text=`${hours}:${minute}:${second} ${dayName}`;
    span.textContent=text;
}
setInterval(showTime, 1000);
