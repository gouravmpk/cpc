import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Amazing Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/house-flies.jpg'
              text='Get rid of house flies'
              label='House Flies'
              path='/housefiles'
            />
            <CardItem
              src='images/rat.png'
              text='Rats can cause major health problems'
              label='Rats/Roadent'
              path='/rats'
            />
            <CardItem
              src='images/Cockroaches.jpg'
              text='Cockroaches most common problem in house'
              label='Cockroaches'
              path='/cockroaches'
            />
        
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/mosqc.jpg'
              text='Mosquitoes casue deadly deasies like malaria and dengu'
              label='Mosquitoes'
              path='/mosquitoes'
            />
            <CardItem
              src='images/silverfish.jpg'
              text='Silverfish can Damage your personal belongings such as books'
              label='Silverfish'
              path='/silverfish'
            />
            <CardItem
              src='images/bedbugs.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Bedbugs'
              path='/bedbugs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/spider.jpg'
              text='Get rid of web weaver'
              label='Spider'
              path='/spider'
            />
            <CardItem
              src='images/Snake.jpg'
              text='Keep snakes out of your home'
              label='Snakes'
              path='/snakes'
            />
            <CardItem
              src='images/bee.jpg'
              text='A bee sting is a wound caused by the stinger from a female bee being injected into flesh'
              label='Bees'
              path='/bee-hive'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lizard.jpg'
              text='Get rid of those wall climbers'
              label='Lizards'
              path='/lizard'
            />
            <CardItem
              src='images/termite.jpg'
              text='Termites can easly cause damage to property'
              label='Termite'
              path='/termite'
            />
            <CardItem
              src='images/wood-borer.jpg'
              text='Protect your furniture from these small bugs '
              label='Woodborer'
              path='/wood-borer'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/ant.jpg'
              text='Though harmless, they can be a nuisance when they get into your home or business premises.'
              label='Ant'
              path='/ants'
            />
            <CardItem
              src='images/bandi.jpg'
              text='Bandicoots cause no long term damage to gardens'
              label='Bandicoot'
              path='/bandicoots'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
 