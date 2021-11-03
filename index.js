// Code your solution in this file!


function distanceFromHqInBlocks(dist) { 
    if (dist >= 42) {
        return dist - 42;
    } else (dist < 42)
        return 42 - dist;
    }
    
function distanceFromHqInFeet(feet) {
        let i = distanceFromHqInBlocks(feet)
            return (i*264)
        }
        
function distanceTravelledInFeet(num1, num2) {
        let blocks
          if (num2 > num1) {
            blocks = num2 - num1
                return (blocks * 264)
    }
      if (num1 > num2) {
        blocks = num1 - num2;
           return (blocks * 264)  
        }
    }

    function calculatesFarePrice(start, destination) {
        let feet = distanceTravelledInFeet(start, destination) 
        let fare
        if (feet <= 400) {
            fare = 0
        }
        else if (feet > 400 && feet <= 2000){
            fare = ((feet - 400)* 2) / 100
        }  
        else if (feet > 2000 && feet < 2500) {
            fare = 25
        }
        else {
            fare = 'cannot travel that far'
        }
        return fare
       }


































































