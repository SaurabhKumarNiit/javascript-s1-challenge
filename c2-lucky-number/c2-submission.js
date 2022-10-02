let n = 31052022;
// Write solution code here to find the lucky number


    //Function to get sum of digits
    function getSum(n) {
        let sum = 0;
        while (n > 0 || sum > 9) {
             if(n == 0) {
                n = sum;
                sum = 0;
             }
             sum = sum + n % 10;
             n = Math.floor(n / 10);
        }
        return sum;
    }
 //function call  
    document.write(getSum(n));

console.log(`Your Lucky Number is ${sum}`);
