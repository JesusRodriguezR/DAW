

 function getWeather(){
    var latElement = document.getElementById("lat");
    var lonElement = document.getElementById("lon");
    var resultElement =  document.getElementById("resultado");
    
     var lat = latElement.value;
     var lon = lonElement.value;
     
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=9d20b169865d499b74f3876ce8ebb292",
     function(json){
         console.log(json);
         $('#resultado').text(JSON.stringify(json));
  
     }
     );
     var result = JSON.parse(resultElement.innerHTML);
     console.log(result.lon);
     
 }

 //19.08798
 //-98.2172668