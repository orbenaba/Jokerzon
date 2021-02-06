import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree/*, homeObjFour*/ } from './Data';
import InfoSection from './InfoSection';

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}