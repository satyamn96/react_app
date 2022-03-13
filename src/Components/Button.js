import React from 'react'
import {ColorText} from './CommenContext'
export default function Button() {

    console.log('Button Clicked')
    return (
            <ColorText.Consumer>
                {
                    ({updateColor}) => (
                            <>
                            <button onClick={()=>updateColor('yellow')}>Yellow Color</button>
                            <button onClick={()=>updateColor('red')}>Red Color</button>
                            <button onClick={()=>updateColor('blue')}>Blue Color</button>
                            </>
                    )
                }
            </ColorText.Consumer>
    );
}
