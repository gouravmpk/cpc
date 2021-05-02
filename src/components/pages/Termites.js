import React from 'react';
import '../../App.css';

import Footer from '../Footer';

export default function Termites(){
    return(<>
        <div className='rats'>
        </div> <div className='text-center'><h1>Check out our Amazing Services!</h1></div>
        
        
        <div className='text-center'>
        <em>
        Rodents/Rats are one of the strongest surviving mammals found in all climates and conditions. rodents are able to adapt to almost any environmental changes. As our area becomes more populated, rodents will and have become more prevalent. Rodents not only are vectors of disease, but also cause damage to structures and their contents. Due to the constant need to gnawm electrical and mechanical components of structures are in jeopardy with rodent invasion.
        If you believe rodents may have invaded your home or office. just call us and order a rodent survey and we will do the rest!
        </em>
        </div>
        <div class="gallery">
        <img src="/images/rat.png"  width="600" height="400" ></img>
         </div>
     
      <Footer />
    </>

    );
}