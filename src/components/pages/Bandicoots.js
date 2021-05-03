import React from 'react';
import '../../App.css';

import Footer from '../Footer';

export default function Bandicoots(){
    return(<>
        <div className='bandicoots'>
        </div> <div className='text-center-bandicoots'><h1>Bandicoot</h1></div>
        <div className='text-center-bandicoots'>
        <p>
        Bandicoot is a giant rat and can be up to 40cms long, including the tail. Bandicoot rats pose a significant health risk to humans, both adults and babies, as well as to our pets. Bandicoot rats feed mainly on insects, larvae, grass seeds and fruits in lawn and garden. The construct burrows in garden plants and enter into your building.
       </p>
        <br/>
        <h3>DISEASES CAUSED BY BANDICOOTS</h3>
        <br/>
       <p>The spread of many common diseases, such as Salmonella, Weil's disease, E.coli and TB, is attributed to Bandicoot rats. They also carry fleas, mites and ticks and can cause acute allergic reactions. Any bandicoot rat problem inside the home must be treated urgently, not only to prevent the spread of disease but also because they are extremely aggressive if threatened.</p>
       <br/>
       <h3>FOR CONTROL OF BANDICOOTS</h3>
       <br/>
       <p>ALP tablets are placed inside the burrows made by the bandicoots and the same are closed down with mud. After the said treatment, the bandicoots do not come in the said area.</p>
        </div>
        <div class="gallery-bandicoots">
        <img class="bandicoots-table"src="/images/banP.png" alt="table" width="600" height="400" ></img>
         </div>
      <Footer />
    </>

    );
}