import React from 'react';
import '../../App.css';

import Footer from '../Footer';

export default function Lizard(){
    return(<>
        <div className='lizards'>
        </div> <div className='text-center-lizards'><h1>Lizard</h1></div>

        <div className='text-center-lizards'>
        <p>
        Lizards are part of a group of animals known as reptiles. They are most closely related to snakes. Lizards have a small head, short neck and long body and tail. Lizards smell stuff with their tongues. A lizard sticks out its tongue to catch scent particles in the air and then pulls back its tongues and places those particles on the roof of its mouth, where there are special sensory cells. A lizard can use these scent "clues" to find food or a mate or detect enemies. Lizards are opportunistic. Gardens, ponds and treams allow populations to prosper. Sprinkler systems will deliver enough water to keep any lizard happy and this leads to many taking up residence along outside foundation walls. Most lizards are insect eaters, grabbing crickets, flies. grasshoppers and more with their long sticky tongues or quick bites.
        </p>
        <br/>
       <p1>For controlling lizards: First you have to take away their food by doing a little pest control around the house, which creates a protective barrier and works as a slow poison for the lizards.</p1>
        </div>
        <div class="gallery-lizards">
        <img  class="lizards-table"src="./images/lizardP.png" alt="Materials"/>
         </div>
      <Footer />
    </>

    );
}