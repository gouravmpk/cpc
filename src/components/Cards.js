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
              label='Clean Home'
              path='/services'
            />
            <CardItem
              src='images/rat.png'
              text='Rats can cause major health problems'
              label='Healthy Home'
              path='/rats'
            />
            <CardItem
              src='images/Cockroaches.jpg'
              text='Cockroaches most common problem in house'
              label='Pest Free Home'
              path='/cockroaches'
            />
        
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Mosq.jpg'
              text='Mosquitoes casue deadly deasies like malaria and dengu'
              label='Pest Free Homeo'
              path='/mosquitoes'
            />
            <CardItem
              src='images/silverfish.jpg'
              text='Silverfish can Damage your personal belongings such as books'
              label='Safe Books'
              path='/silverfish'
            />
            <CardItem
              src='images/bedbugs.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Good Night Sleep'
              path='/bed-bugs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/spider.jpg'
              text='Get rid of web weaver'
              label='Clean Home'
              path='/spider'
            />
            <CardItem
              src='images/Snake.jpg'
              text='Keep snakes out of your home'
              label='Safe Enviorment'
              path='/snakes'
            />
            <CardItem
              src='images/bee.jpg'
              text='A bee sting is a wound caused by the stinger from a female bee being injected into flesh'
              label='Bee Stings'
              path='/bee-hive'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lizard.jpg'
              text='Get rid of those wall climbers'
              label='Healty Home'
              path='/lizard'
            />
            <CardItem
              src='images/termite.jpg'
              text='Termites can easly cause damage to property'
              label='Safe Home'
              path='/termite'
            />
            <CardItem
              src='images/wood-borer.jpg'
              text='Protect your furniture from these small bugs '
              label='Safe Home'
              path='/wood-borer'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/ant.jpg'
              text='Ant info'
              label='Ant'
              path='/products'
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
