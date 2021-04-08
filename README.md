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


# {Application Name} 

 

 #### {Brief description of application}  

 

#### By: YOUR NAME ## Technologies Used  

* HTML  

* CSS  

* Bootstrap  

 

## Description This web application is designed to BLANK  

## Specs  

 

## Setup/Installation Requirements 

 * Click on the green download code button. Click on the clipboard icon. 

 * Open your terminal, navigate to the preffered storage location on your desktop.  

* Type git clone and then paste the cloned project.  

* CD into the cloned project.  

* type code . to open the project in your code editor. OR 

 * Drag cloned project into code editor if your command pallette does not support code . 

 

 ## Known Bugs  

 

 

* Application was not designed for edge cases.  

* Will update later.  

 

 

## License Copyright 2021 YOUR NAME 

** Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

 

## Contact Information  

 

_YOUR EMAIL*_ 

 