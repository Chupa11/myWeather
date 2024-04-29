const key="84a9d2a1d379af9d22f1d6e19ebcd3b9";
let cityName=document.getElementById("cityName");
let temp=document.getElementById("tempOutput");
let windSpeed=document.getElementById("windSpeedOutput");
let humidity=document.getElementById("humidityOutput");
let weatherImg=document.getElementById("weatherImg");
let tempToChange;
let i=0;


async function getWeather(){
    let search=document.getElementById("input").value;
    console.log(search);
    let link=(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${search}&appid=${key}`)
    try {
        let response= await fetch(link);
        let data= await response.json()
        cityName.innerHTML=data.name;
        temp.innerHTML=Math.floor(data.main.temp)+"° F";
        tempToChange=data.main.temp
        windSpeed.innerHTML=Math.floor(data.wind.speed)+" MPH"
        humidity.innerHTML=data.main.humidity+"%"
        console.log(link);

        let type=data.weather[0].main;
        console.log(type);
        if(type=="Clouds"){
            weatherImg.src="images/clouds.png"
        }else if(type=="Rain"){
            weatherImg.src="images/rain.png"
        }else if(type=="Mist"){
            weatherImg.src="images/mist.png"
        }else if(type=="Drizzle"){
            weatherImg.src="images/drizzle.png"
        }else if(type=="Snow"){
            weatherImg.src="images/snow.png"
        }else if(type=="Clear"){
            weatherImg.src="images/clear.png"
        }
    } catch (error) {
        console.log(error);
        cityName.innerHTML="Error";
        temp.innerHTML="Please re enter your city :)";
        windSpeed.innerHTML="Error"
        humidity.innerHTML="Error"
    }
    input.value="";
}

let button=document.getElementById("switchButton");
function switchTemp(){
    if(tempToChange!=null){
        if(i===0){
            console.log('hi')
            tempToChange=Math.floor(((tempToChange-32)*5)/9);
            temp.innerHTML=tempToChange+"° C";
            i=i+1;
            button.style.backgroundColor = '#dd4814';
            button.innerHTML="°F"
        }else if(i===1){
            console.log('bye')
            tempToChange=Math.floor((tempToChange*1.8)+32)
            temp.innerHTML=tempToChange+"° F";
            i=i-1;
            button.style.backgroundColor = 'lightblue';
            button.innerHTML="°C"
        }
        console.log(i);
        console.log(tempToChange);
    }
}

