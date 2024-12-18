for ( let i =1; i <= 100; i++){

    // SE I è DIVISIBILE SIA PER 3 CHE PER 5
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz");
    }
    
    // SE I è DIVISIBILE PER 3
    else if (i % 3 === 0 ){
        console.log("Fizz");
    }

    // SE I è DIVISIBILE PER 5
    else if (i % 5 === 0 ){
        console.log("Buzz");
    }


    else 
       console.log(i)

    
  
}

