function rotate(){

    var x =   Math.floor((10 * (Math.random())));
    
    if( x >= 1 && x <= 6){
        console.log(x);
        document.getElementById("dice").innerHTML=`${x}`;
    }
   
}

