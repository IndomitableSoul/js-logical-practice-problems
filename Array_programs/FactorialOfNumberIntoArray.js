/**
 * @author Nikita Amar <amarnikita09@gmail.com>
 * @version: '01.0.0',
 * 
 * @propose -> Extend the Prime Factorization Program to store all the Prime Factors of a 
 *             number n into an array and finally display the output.
 * @param {*} number -> Takes the number 
 * @returns -> It returns the Prime Factors of the number in array
 */
function findPrimeFactorsOfNumberIntoArray(number) { // 315

    let factorialArray = new Array(); // creating new Array
    for (let i = 2; i <= number; i++) { // finding prime number 
        while (number % i == 0) { // if reminder (number % i ) is zero than divisor is pushed into array [ (315 % 3) = 0 ] 
            console.log("\n(" + number + " % " + i + ") = " + number % i); // Here is the calculation part that print in console
            factorialArray.push(i); // push into array 
            number = number / i; // now number is divided with divisor [315,105,35,7]
        }
    }
    return factorialArray;// [ 3, 3, 5, 7 ]
}
console.log(findPrimeFactorsOfNumberIntoArray(315)) 