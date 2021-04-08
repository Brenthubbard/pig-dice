let player1 = new PlayerObject("brent")
undefined
player1
PlayerObject {playerName: "brent", totalScore: undefined, tempScore: undefined}

### Describe mrRobogersSays()
Test: "It should iterate over number inputted from user and push iteration into an array as strings."\
Code:\
userInput = number
mrRobogersSays(userInput)\
Expected Output: array of "numbers" 

Test: "It should find all elements within string array that include "3", substitute them with "Won't you be my neighbor?" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("3")) {\
      resultArray.push(" Won't you be my neighbor?")}\
Expected Output: "3" replaced with " Won't you be my neighbor?"

Test: "It should find all elements within string array that include "2", substitute them with "Boop!" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("2")) {\
      resultArray.push(" Boop!")}\
Expected Output: "2" replaced with " Boop!"

Test: "It should find all elements within string array that include "1", substitute them with "Beep!" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("1")) {\
      resultArray.push(" Beep!")}\
Expected Output: "1" replaced with " Beep!"

Test: "It should prioritize rules for "3" above "2" && "1"; Rules for "2" above "1" \
Code:\
numberArray.forEach(function(element))\
Expected Output: numbers containing 3 && 2 || 3 && 1 || 3 & 2 & 1 showing only rules for 3. Numbers containing 2 && 1 showing only rules for 2

Test: "It should return the results of only the newest manipulated array to user"\
Code:  
mrRobogersSays()\
return resultArray\
Expected Output: manipulated array elements displayed as strings.