function result(){
    const Weight =  document.getElementById('weigh').value;
    const height =  document.getElementById('high').value ;
    

    const BMI =  (Weight / ( height * height ) * 10000).toFixed(2);
   document.getElementById('output').innerHTML  = 'Your BMI is' + ' ' + BMI ;


    if ( BMI <  18.5){
    document.getElementById('message').innerHTML = 'You are underweight !';

    }
    if ( BMI >= 25 && BMI <= 29.9 ){
    document.getElementById('message').innerHTML = 'You are overweight !';

    }
    if ( BMI >= 30 ){
    document.getElementById('message').innerHTML = 'You are obese !';

    }
    if ( BMI >= 18.5 && BMI <= 25.9){
    document.getElementById('message').innerHTML = 'You are normal weight !';

    }
}
function  chuu(){
   window.location.reload();
}
