import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree/*, homeObjFour*/ } from './Data';
import InfoSection from './InfoSection';
import JokerzonAddress from "./JokerzonAddress.js";


export default function Home(props) {
;  return (
    <>
      <JokerzonAddress address={props.jokerzonContract._address}></JokerzonAddress>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}