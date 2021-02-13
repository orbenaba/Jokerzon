import React from 'react'
import Loader from 'react-loader-spinner';

export default function Loading() {
    return (
        <div style={{width:'100%', height:'100%',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Loader type="Circles" color="black" height="250" width="250"/>
        </div>
    )
}