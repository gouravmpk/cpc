import React from 'react';
import '../../App.css';

import Footer from '../Footer';

export default function Ants(){
    return(<>
       <div className='ants'>
        </div> <div className='text-center-ants'><h1>Red and Black ants</h1></div>

        <div className='text-center-ants'>
        <p>
        RED and BLACK ANTS are wondrous creatures and one of the most successful animals on earth. The presence of ants in nature ensures the health of the natural environment. In homes and other buildings, however, ants are not so welcome.
        </p>
        <br/>
       <p>Red and black ants eat a variety of dead and living plants and insects, as well as sweets, honeydew, meats and other household items. These ants are nocturnal and often forage for food at night. Like other species red and black ants prefer to nest in partially decayed wood, moist areas and other structures that offer consistent temperature, protection from environmental changes and predators. While they have no sting, this ant species can bite and spray formic acid for defense against predators.</p>
        <br/>
        <p>Regular outdoor applications of pesticides to lawns and foundations are often necessary because re-infestation from neighboring properties is common.</p>
       <br/>
       <p><strong>For prevention of Red and Black Ants:</strong> is to locate all mounds and treat them and then prevent their recurrence for which a chemically formulated liquid is sprayed for their effective controlling.</p>
        </div>
        <div class="gallery-ants">
        <img  class="ants-table"src="./images/ant.png" alt="Materials"/>
         </div>
     
      <Footer />
    </>

    );
}