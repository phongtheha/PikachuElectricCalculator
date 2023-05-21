Hello friends! 
This is my code for an assignment for CS 260 UI Design class at Berkeley


<img width="300" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/34540f4f-a13a-4064-9a5f-d28e742582cb">

### To Run:

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
<img width="500" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/f7f96c4d-cae0-4501-a7c7-ec444e29bac5">


<img width="500" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/fc40f40c-18cf-4821-a0d7-02980c7c5ec1">

Interaction 1: Landing Page, User is welcomed by Pikachu with instruction to enter values on the left

<img width="500" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/52fe3942-f7de-41c2-b6b9-20868e672a58">

Interaction 2: After User has entered value in the box (default is distance to time) and selected 1 of 10 methods of transportation, the result would be displayed in the right, with a meme of pikachu doing that mode of transportation (above is a GIF of pikachu walking). The result has Time, Distance, and a table of 9 other modes of transportation for comparisons. Out of range modes are in Red

<img width="500" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/0822c47a-f192-4339-af9c-ff56bb15c734">

Interaction 3: If the User wants to calculate distance from Time input, they can check the “Time to Distance” box, and the app will know the number entered was time in minutes and adjust results accordingly.

<img width="500" alt="image" src="https://github.com/phongtheha/PikachuElectricCalculator/assets/34360607/a8918ce5-9780-4ee0-9477-fc94c98dfc82">


Interaction 4: Finally, if the user enters a number that is outside of range for the selected transportation mode, Pikachu will notify the user that the entered input was out of range. Additionally, there will be a message that specifies the maximum number for the selected transportation mode.


### Documentation Video:
https://drive.google.com/file/d/1FFFXQPAP7X11nju5t00qkp_kvK_qRmLT/view?usp=sharing
