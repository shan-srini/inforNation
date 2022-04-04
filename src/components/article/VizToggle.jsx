import React from 'react'

export default function SharePost({ isVizOpen, height, stroke, width }) {
    return isVizOpen ?
            (
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width={width} height={height} viewBox="0 0 24 24" stroke-width="2" stroke={stroke} fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="18" y1="11" x2="12" y2="5"></line>
                    <line x1="6" y1="11" x2="12" y2="5"></line>
                </svg>
            )
            :
            (
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width={width} height={height} viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="9 11 12 14 20 6"></polyline>
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
                </svg>
            )
}