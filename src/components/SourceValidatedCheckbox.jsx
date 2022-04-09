import React from 'react'

export default function SourceValidatedCheckbox({ height, stroke, width }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-checkbox"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 11 12 14 20 6"></polyline>
            <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
        </svg>
    )
}
