Hello friends! 
This is my code for an assignment for CS 260 UI Design class at Berkeley

To Run:

Check to see if you can run  ``$ node -v`` and ``$ npm -v`` (My versions are v16.15.0 for node and 8.10.0 for npm.)
### Install the Express module using npm. 
ex: ``$ npm install express``
### Run the app using Node:
ex: ``$ node App.js``

You should see the message ``Server is running on http://localhost:8000``

```
PikachuElectricCalculator
│   README.md
│   App.js    		// main JavaScript file
│
└───public 		// this where all of our content is stored
   │   index.html       // The initial view for our webpage
   │   convert.js
   │
   └───css
   │  	│   pikachu_styles.css  
   
   
```
### App Description
Pikachu’s Electric Calculator is an app that can calculate the Time or Distance for different modes of transportation. The user can input either Time or Distance, and Pikachu will calculate and tell them the corresponding distance/time expected by different modes of transportation

### Interactions


Interaction 1: Landing Page, User is welcomed by Pikachu with instruction to enter values on the left

Interaction 2: After User has entered value in the box (default is distance to time) and selected 1 of 10 methods of transportation, the result would be displayed in the right, with a meme of pikachu doing that mode of transportation (above is a GIF of pikachu walking). The result has Time, Distance, and a table of 9 other modes of transportation for comparisons. Out of range modes are in Red

Interaction 3: If the User wants to calculate distance from Time input, they can check the “Time to Distance” box, and the app will know the number entered was time in minutes and adjust results accordingly.


Interaction 4: Finally, if the user enters a number that is outside of range for the selected transportation mode, Pikachu will notify the user that the entered input was out of range. Additionally, there will be a message that specifies the maximum number for the selected transportation mode.


### Documentation Video:
https://drive.google.com/file/d/1FFFXQPAP7X11nju5t00qkp_kvK_qRmLT/view?usp=sharing
