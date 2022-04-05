import React from 'react'
import { SourceValidatedCheckbox } from '../'

export default function SharePost({ isVizOpen, height, stroke, width }) {
    return isVizOpen ?
            (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up" width={width} height={height} viewBox="0 0 24 24" strokeWidth="2" stroke={stroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="18" y1="11" x2="12" y2="5"></line>
                    <line x1="6" y1="11" x2="12" y2="5"></line>
                </svg>
            )
            :
            (
                <SourceValidatedCheckbox height={height} width={width} stroke={stroke}/>
            )
}