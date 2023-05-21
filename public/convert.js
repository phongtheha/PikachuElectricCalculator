function convert() {
    // Get the distance and transportation from the form
    const transportationSpeeds = {
      walking: 3.1, // miles per hour
      boosted_mini_s_board: 18, // miles per hour
      evolved_bamboo: 24, // miles per hour
      onewheel_xr: 19, // miles per hour
      mototec_skateboard: 22,
      segway_ninebot_s: 10,
      segway_ninebot_s_plus: 12,
      razor_scooter: 18,
      geoblade_500: 15,
      hovertrax_hoverboard: 9
    };
    const names = {
        walking: "Walking", // miles per hour
        boosted_mini_s_board: "Boosted Mini S Board", // miles per hour
        evolved_bamboo: "Evolved Bamboo", // miles per hour
        onewheel_xr: "Onewheel XR", // miles per hour
        mototec_skateboard: "Mototec Skateboard",
        segway_ninebot_s: "Segway Ninebot S",
        segway_ninebot_s_plus: "Segway Ninebot S plut",
        razor_scooter: "Razor Scooter",
        geoblade_500: "Geoblade 500",
        hovertrax_hoverboard: "Hovertrax Hoverboard"
      };
    const range = {
        walking: 30, // miles 
        boosted_mini_s_board: 7, 
        evolved_bamboo: 31, 
        onewheel_xr: 18, 
        mototec_skateboard: 10,
        segway_ninebot_s: 13,
        segway_ninebot_s_plus: 22,
        razor_scooter: 15,
        geoblade_500: 8,
        hovertrax_hoverboard: 6
      };
      const images = 
      {
        walking: "https://i.pinimg.com/originals/c3/8c/d7/c38cd711ec71186bd33f4e02df1e0342.gif", // gif
        boosted_mini_s_board: "https://i.ibb.co/gjfN4fg/Mini-S-Board.png", 
        evolved_bamboo: "http://cdn.shopify.com/s/files/1/0232/5683/products/GTR2_Bamboo_AT_2_ae24b3b6-84b3-4de2-954c-1293bba7c301_1024x1024.jpg?v=1663638077", 
        onewheel_xr: "https://i.ibb.co/NLRZzpM/One-Wheel-XR.png", 
        mototec_skateboard: "https://www.intheholegolf.com/img/electric-skateboards/mototec-600w-street-electric-skateboard-2.jpg",
        segway_ninebot_s: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6358/6358865_sd.jpg",
        segway_ninebot_s_plus: "https://i5.walmartimages.com/asr/3d8be7d1-7ea9-49b2-acba-3073310f200e.2a5206db5a0bfe75075bde06ee6dc4fd.jpeg",
        razor_scooter: "https://media.tenor.com/KS1SxCRvcpIAAAAd/bicycle-pikachu.gif",
        geoblade_500: "https://thegadgetflow.com/wp-content/uploads/2018/05/GeoBlade-500-One-Wheel-Electric-Board-07.jpg",
        hovertrax_hoverboard: "https://razor.com/wp-content/uploads/2018/01/Hovertrax_2.0-Refresh_PU_Product.jpg"
      };
      
    const distanceInput = document.querySelector('#distance');
    // const distanceOption = document.querySelector('#distance-option');
    const timeOption = document.querySelector('#time-option');
    const transportationType = document.querySelector('#transportation').value;
    
    const resultList = document.querySelector("#result");
    resultList.innerHTML = ``;
    const inputValue = Number(distanceInput.value);
    const isTime = timeOption.checked;
    

    let time;
    let distance;
    if (isTime) {
        time = inputValue;
        distance = ((inputValue/60) * transportationSpeeds[transportationType]).toFixed(2);
        } else {
            
        time = ((inputValue / transportationSpeeds[transportationType])*60).toFixed(0);
        distance = inputValue;
        }
    if (inputValue > range[transportationType] && !isTime){
        resultList.innerHTML += `<img src="https://i.imgflip.com/7ayek2.jpg" alt="pikachu_pic" width="350" height="300"">
        <p><b>The limit for ${names[transportationType].toUpperCase()} is: ${range[transportationType]} miles. Please re enter your value</b></p>`
    } else{
    resultList.innerHTML += `
    <img src="${images[transportationType]}" alt="pikachu_pic" width="200" height="200"">
    <p style="color:#f6d365;"><b>${names[transportationType].toUpperCase()}: </b></p>
    <p>Time: ${time} mins</p>
    <p>Distance: ${distance} miles</p>
    <p style="color:#f6d365;"><b> ~~~OTHER TYPES OF ELECTRIC FOR COMPARISONS~~~</b></p>
    <p>  <span style="color:#fda085"> Red</span> means out of range</p>
    <br>
        `;
    
    
    // For loop to display the rest
        
      let innerstring = ` <style>
      .highlight {
        background-color: #f6d365;
      }
    </style>
    
      <table style="width:100%">
        <tr>
          <th> Transport Type</th>
          <th>Time</th>
          <th>Distance</th>
        </tr>`;
        for (let key in transportationSpeeds) {
            if (names[key] == names[transportationType]){continue;}
            else{
            let time;
            let distance;
            if (isTime) {
                time = inputValue;
                distance = ((inputValue/60) * transportationSpeeds[key]).toFixed(2);
                } else {
                time = ((inputValue / transportationSpeeds[key])*60).toFixed(2);
                distance = inputValue;
                }
    
            if (distance > range[key]){
                innerstring += `<tr >
               <td style="color:#fda085;"><b>${names[key].toUpperCase()} </b></td>
               <td style="color:#fda085;">${time} </td>
               <td style="color:#fda085;">${distance} </td>
             </tr>`;
            }else{
            innerstring += `<tr>
               <td><b>${names[key].toUpperCase()} </b></td>
               <td>${time} </td>
               <td>${distance} </td>
             </tr>`;}
            
        }}
        innerstring +=`</table>`;
        
        resultList.innerHTML += innerstring;
        
        }
    }
    
