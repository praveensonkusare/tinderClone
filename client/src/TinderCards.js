import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';
function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/tinder/cards');
      setPeople(request.data);
    }
    fetchData();
  }, []);
  console.log(people, 'people');

  const swiped = (direction, nameToDelete) => {
    //console.log(swiped(direction, nameToDelete));
    //setLastDirectoin(direction);
  };
  const outOfFrame = (name) => {
    //console.log(outOfFrame(name));
  };
  return (
    <div className='TinderCards'>
      <div className='TinderCards_Container'>
        {people?.map((person) => (
          <TinderCard
            className='Swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className='Card'
            >
              <h3 className='h3'>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
