// Problem 1: Reverse a number
function reverse(num) {
    let digits = [];
    // store digits in an array
    while(num > 0) {
        let digit = num % 10;
        digits.push(digit);
        num = Math.floor(num / 10);
    }
    // construct the reversed number
    let reversed = 0;
    for(let i in digits) {
        reversed = reversed * 10 + digits[i];
    }
    return reversed
}
//testing
console.log("---------------------------");
console.log("----Problem 1 Test Case----");
testing(32243,34223,reverse);
//--------------------------------------------------------------------------------------------

// Problem 2: Check whether a string is palindrome or not
function isPalindrome(str) {
    str = str.replace(/\s+/g, ""); // remove spaces
    str = str.toLowerCase(); // ignore case

    // compare characters from start and end
    for(let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        } 
    }
    return true;
}
//testing
console.log("----Problem 2 Test Case----");
testing("nurses run", true, isPalindrome);

//--------------------------------------------------------------------------------------------

// Problem 3: Generate all combinations of a string
function generateAllCombs(str) {
    combinations = [];
    //outer loop: starting letter of each substring
    for(let i = 0; i < str.length; i++) {
        //inner loop: ending letter of each substring and its contents in between
        for (let j = 1; j < str.length+1; j++) {
            let substr = str.slice(i,j); 
            if(substr.length != 0) combinations.push(substr); //check that substring is not empty in cases where j<i
        }
    }
    return combinations;
}
//testing
console.log("----Problem 3 Test Case----");
testing("dog","d,do,dog,o,og,g",generateAllCombs);

//--------------------------------------------------------------------------------------------

// Problem 4: Return a passed string with letters in alphabetical order
function alphabetalize(str) {
    //split string into each letter, sort alphabelitically, then combine into one string
    return str.split('').sort().join(''); 
}
//testing
console.log("----Problem 4 Test Case----");
testing("webmaster","abeemrstw",alphabetalize);

//--------------------------------------------------------------------------------------------

// Problem 5: Coverts the first letter of each word of the string into uppercase
function uppercase(str) {
    //separate string into each word and use map change each word
    return str.split(' ').map(word => {
        //upper case each first character and add the rest of the word to the end
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ') //combine into one string
}
//testing
console.log("----Problem 5 Test Case----");
testing("the quick brown fox","The Quick Brown Fox",uppercase);

//--------------------------------------------------------------------------------------------

// Problem 6: Find the longest word within a string
function longestWord(str) {
    let words = str.split(' '); // separate string into words
    words.sort((a,b) => b.length - a.length); // sorth words in order of longest to shortest string
    return words[0]; //return word at beginning of list (the longest word)
}
//testing
console.log("----Problem 6 Test Case----");
testing("Web Development Tutorial" ,"Development",longestWord);

//--------------------------------------------------------------------------------------------

// Problem 7: Count the number of vowels within a string
function findNumVowels(str) {
    str = str.toLowerCase(); //ingnore cases
    const vowels = "aeiou"; //all vowels

    let numVowels = 0;
    //check if each letter of string is a vowel
    for(let letter of str) {
        if(vowels.includes(letter)) numVowels++; //if so, increase vowel count
    }
    return numVowels;
}
//testing
console.log("----Problem 7 Test Case----");
testing("The quick brown fox" ,5,findNumVowels);

//--------------------------------------------------------------------------------------------

// Problem 8: Check whether number is prime or not
function checkPrime(num) {
    //outliers
    if(num <= 1) return false; 
    if(num == 2) return true;

    // iterate divisor from 2 to what the number is 
    for(let i = 2; i < num; i++) {
        //check if number has a divisor with no remainder
        if(num % i === 0) {
            return false; // if so, it is not a prime number
            break;
        }
    }

    return true;
}
//testing
console.log("----Problem 8 Test Case----");
testing(1,false,checkPrime);
testing(2,true,checkPrime);
testing(13,true,checkPrime);
testing(15,false,checkPrime);

//--------------------------------------------------------------------------------------------

// Problem 9: Returns the type of the argument
function dataType(arg) {
    return typeof(arg);
}
//testing
console.log("----Problem 9 Test Case----");
testing(15,'number',dataType);
testing('hello','string',dataType);

//--------------------------------------------------------------------------------------------

// Problem 10: Returns the n rows by n columns identity matrix
function identityMatrix(n) {
    let matrix = [];
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(i == j) row.push(1); //push 1s on all diagonals (1,1), (2,2), ...
            else row.push(0); // else push zeroes
        }
        matrix.push(row) // push each constructed row into the matrix
    }
    return matrix;
}
//testing
console.log("----Problem 10 Test Case----");
console.log(identityMatrix(6));
testing(6,
    '1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1'
    /*  [ 1, 0, 0, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1 ]*/
    ,identityMatrix);

//--------------------------------------------------------------------------------------------

// Problem 11: Take an array of numbers and find the second lowwest and second greatest numbers, respectively
function findRunnerUps(arr) {
    result = [];
    arr = arr.sort((a,b) => a-b); //sort from lowest to greatest
    result.push(arr[1]); //push the second number
    result.push(arr[arr.length-1-1]); //push second to last number

    return result;
}
//testing
console.log("----Problem 11 Test Case----");
testing([1,2,3,4,5],'2,4',findRunnerUps);
testing([5,4,3,2,1],'2,4',findRunnerUps);
testing([99,2,64,3,4],'3,64',findRunnerUps);

//--------------------------------------------------------------------------------------------

// Problem 12: Determine whether a number is perfect.
function isPerfectNumber(num) {
    if(num <= 0) return false; // has to be positive

    //determine divisors
    let divisors = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            divisors.push(i);
        }
    }
    //check if sum of divisors is equivalent to number
    let sum = 0;
    for (let i of divisors) {
        sum += i;
    }
    if(sum !== num) return false;
    
    //check if number is half the sum of divisors including itself
    if(((sum+num)/2) !== num) return false;

    return true;
}
//testing
console.log("----Problem 12 Test Case----");
testing(2,false,isPerfectNumber);
testing(6,true,isPerfectNumber);
testing(496,true,isPerfectNumber);

//--------------------------------------------------------------------------------------------

// Problem 13: Compute factors of a positive integer
function findFactors(num) {
    //determine factors
    let factors = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
//testing
console.log("----Problem 13 Test Case----");
testing(12,'1,2,3,4,6,12',findFactors);

//--------------------------------------------------------------------------------------------

// Problem 14: Convert an amount to coins
function coinConverter(num) {
    let coins = [];
    //push values into array while subtracting from amount
    while(num > 0) {
        if(num >= 25) {
            coins.push(25);
            num -= 25;
        }
        else if(num >= 10) {
            coins.push(10);
            num -= 10;
        }
        else if(num >= 5) {
            coins.push(5);
            num -= 5;
        }
        else if(num >= 1) {
            coins.push(1);
            num -= 1;
        }
    }
    return coins;
}
//testing
console.log("----Problem 14 Test Case----");
testing(46,'25,10,10,1',coinConverter);

//--------------------------------------------------------------------------------------------

// Problem 15: Compute the value of bn where n is the exponent and b is the bases
function computeExponents(b,n) {
    return b**n;
}
//testing
console.log("----Problem 15 Test Case----");
console.log("Input: " + '2,3');
console.log("Output: " + computeExponents(2,3));
console.log("---------------------------");


//--------------------------------------------------------------------------------------------

// Problem 16: Extract unique characters from a string
function extractUniqueCharacters(str) {
    let uniqueChars = [];
    for(char of str) {
        //if char is not in unique list yet, add to list
        if(!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    //combine into one string with no spaces
    return uniqueChars.join('').replace(/\s+/g, "");

}
//testing
console.log("----Problem 16 Test Case----");
testing("hello my name is bon",'helomynaisb',extractUniqueCharacters);

//--------------------------------------------------------------------------------------------

// Problem 17: Get the number of occurences of each letter in specified string
function letterOccurences(str){
    //create a map withe key, value pairs
    const map = new Map()
    str = str.toLowerCase();
    for(char of str) {
        //if the map does not contain character yet, create new entry with count 1
        if(!map.has(char)) {
            map.set(char,1);
        //otherwise increase the count by 1
        } else {
            let count = map.get(char);
            count++;
            map.set(char,count);
        }
    }
    return map;
}
//testing
console.log("----Problem 17 Test Case----");
console.log("Input: " + 'poopy');
console.log(letterOccurences('poopy'));
console.log("---------------------------");

//--------------------------------------------------------------------------------------------

// Problem 18: Search JavaScript arrays with a binary search
function binarySearch(arr,key) {
    //sort the array from smallest to greatest
    arr = arr.sort((a,b) => b.length - a.length);
    let low = 0;
    let high = arr.length-1;
    let mid;

    //while we are not in the middle...
    while(high >= low) {
        //evaluate mid index
        mid = low + Math.floor((high - low) / 2);
        //found the key
        if(arr[mid] == key) return mid;
        //key is greater
        if(arr[mid] > key) high = mid - 1;
        //key is lower
        else low = mid + 1;
    }

    console.log("No key found.")
}
//testing
console.log("----Problem 18 Test Case----");
console.log("Input: " + '[1,2,3,4,5,6], 5');
console.log("Index: " + binarySearch([1,2,3,4,5,6],5));
console.log("---------------------------");


//--------------------------------------------------------------------------------------------

//Problem 19: Return array elements larger than a number
function greaterElements(arr,num) {
    let result = []; 
    for(element of arr) {
        //push element if it is greater than the number input
        if(element > num) result.push(element);
    }
    return result;
}
//testing
console.log("----Problem 19 Test Case----");
console.log("Input: " + '[1,2,3,4,5,6], 4');
console.log("Greater elements: " + greaterElements([1,2,3,4,5,6],4));
console.log("---------------------------");


//--------------------------------------------------------------------------------------------

//Problem 20: Generate a string id of random characters
function generateRandomChars(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = '';
    for(let i = 0; i < length; i++) {
        //add a random character from chars to result string
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result
}
//testing
console.log("----Problem 20 Test Case----");
console.log(generateRandomChars(8));
console.log("---------------------------");

//--------------------------------------------------------------------------------------------

//Problem 21: Get all possible subset with a fixed length combinations in an array
function getPossibleSubsets(arr,length) {
    let result = [];
    function createSubsets(subset,start) {
            if (subset.length === length) {
            //copy current subset to array
            result.push([...subset]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            //push index to arr
            subset.push(arr[i]);
            //recursive call
            createSubsets(subset, i + 1);
            subset.pop();
        }
    }
    createSubsets([], 0);
    return result;
}
//testing
console.log("----Problem 21 Test Case----");
console.log("Input: " + '[1,2,3,4,5], 2');
console.log("Returned: ");
console.log(getPossibleSubsets([1,2,3,4,5],2));

//--------------------------------------------------------------------------------------------

//Problem 22: Count the number of occurences of a specified letter within a string
function countLetter(str, char) {
    str = str.toLowerCase(); //remove cases
    let count = 0;
    for(letter of str) {
        //increase count if character is found
        if(letter === char) count += 1;
    }
    return count;
}
//testing
console.log("----Problem 22 Test Case----");
console.log("Input: " + 'chicken, c');
console.log("Returned: " +countLetter('chicken','c'));

//--------------------------------------------------------------------------------------------

//Problem 23: Find the first not repeated character
function findNonRepeatedChar(str) {
    //use previous function to create map that contains letter and count
    let map = letterOccurences(str); 
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        //return the first character found that has a count of 1
        if(map.get(char) == 1) {
            return char;
        }
    }
    console.log("All letters are repeated");
}
//testing
console.log("----Problem 23 Test Case----");
testing('abacddbec','e',findNonRepeatedChar);

//--------------------------------------------------------------------------------------------

//Probem 24: Apply bubble sort algorithm
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            //check if left is greater than right
            if (arr[j] < arr[j + 1]) {
                // swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
//testing
console.log("----Problem 24 Test Case----");
testing([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213],'3223,546,455,345,234,213,122,98,84,64,23,12,9,4,1',bubbleSort);

//--------------------------------------------------------------------------------------------

//Problem 25: Accept a list of country names as input and reutrn the longest country name as output
function longestCountryName(arr) {
    let longestName = '';
    for(country of arr) {
        //set country as new longestName
        if(country.length > longestName) {
            longestName = country;
        }
    }
    return country;
}
//testing
console.log("----Problem 25 Test Case----");
testing(["Australia", "Germany", "United States of America"],'United States of America', longestCountryName);

//--------------------------------------------------------------------------------------------

//Problem 26: Find the longest substring in a given string without repeating characters
function longestSubstringNoRepeatChars(str) {
    str = str.replace(/\s+/g, ""); // remove spaces
    str = str.toLowerCase(); // ignore case
    let map = new Map();   
    let start = 0;          
    let maxLen = 0;
    let longestsubstr = "";

    for (let end = 0; end < str.length; end++) {
        let char = str[end];
        // if char has been seen and in window
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;  // move start forward
        }
        map.set(char, end);  // update last seen index
        // check if current window is the longest
        let windowLen = end - start + 1;
        if (windowLen > maxLen) {
            maxLen = windowLen;
            longestsubstr = str.slice(start, end + 1);
        }
    }

    return longestsubstr;
}
//testing
console.log("----Problem 26 Test Case----");
testing('hi my name is angela','ynameis', longestSubstringNoRepeatChars);

//--------------------------------------------------------------------------------------------

//Problem 27: Return the longest palindrom given a string
function longestPalindrome(str) {
    let start = 0, end = 0;
    //helper function
    function find(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]; 
    }

    for (let i = 0; i < str.length; i++) {
        let [l1, r1] = find(i, i); //odd length
        let [l2, r2] = find(i, i + 1); //even length

        //choose longer palindrome
        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return str.slice(start, end + 1);
}

//testing
console.log("----Problem 27 Test Case----");
testing('banana','anana', longestPalindrome);

//--------------------------------------------------------------------------------------------

//Problem 28: Pass a 'JavaScript function' as a parameter
// Function for testing
function testing(input, output, callbackFuntion) {
    console.log("Input: " + input);
    console.log("Returned: " + callbackFuntion(input));
    if(callbackFuntion(input) == output) {
        console.log("Success!");
    } else {
        console.log("Failed.");
    }
    console.log("---------------------------")
}

//--------------------------------------------------------------------------------------------

//Problem 29: Get function name
function getFunctionName(func) {
    return func.name;
}

console.log("----Problem 29 Test Case----");
testing(getFunctionName,'getFunctionName', getFunctionName);
    


