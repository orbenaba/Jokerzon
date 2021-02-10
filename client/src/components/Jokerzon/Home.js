import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree/*, homeObjFour*/ } from './Data';
import InfoSection from './InfoSection';

export default function Home(props) {
  return (
    <>
      <h1 style={{color:"white"}}>Jokerzon cotract address = {props.jokerzonContract._address}</h1>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}