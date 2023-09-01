    let celciusInput=document.querySelector('#celcius > input')
    let fahrenheitInput=document.querySelector('#fahrenheit > input')
    let kelvinInput=document.querySelector('#kelvin > input')

    let btn=document.querySelector('.button button')
    function roundnumber(number){
        return Math.round(number*100)/100
    }
/*celcius to fahrenheit and kelvin*/
    celciusInput.addEventListener('input',function(){
        let ctemp=parseFloat(celciusInput.value)
        let ftemp=(ctemp*(9/5))+32
        let ktemp=ctemp+273.15
        


        fahrenheitInput.value=roundnumber(ftemp)
        kelvinInput.value=roundnumber(ktemp)
        
        })

/*fahrenheit to celcius  and kelvin*/

        fahrenheitInput.addEventListener('input',function(){
        let ftemp=parseFloat(fahrenheitInput.value)
        let ctemp=(ftemp-32)*(5/9)
        let ktemp=(ftemp-32)* (5/9) + 273.15
        


        celciusInput.value=roundnumber(ctemp)
        kelvinInput.value=roundnumber(ktemp)
        
        })



        /*kelvin to fahrenheit and celcius*/
       kelvinInput.addEventListener('input',function(){
        let ktemp=parseFloat(kelvinInput.value)
        let ctemp=ktemp-273.15
        let ftemp=(ktemp-273.15) * (9/5) + 32
        


        celciusInput.value=roundnumber(ctemp)
       fahrenheitInput.value=roundnumber(ftemp)
        
        })

       btn.addEventListener('click', ()=>{
            celciusInput.value=""
            fahrenheitInput.value=""
            kelvinInput.value=""
        })