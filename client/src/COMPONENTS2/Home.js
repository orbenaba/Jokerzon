import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree/*, homeObjFour*/ } from './Data';
import InfoSection from '../COMPONENTS2/coco/InfoSection';

export default function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}