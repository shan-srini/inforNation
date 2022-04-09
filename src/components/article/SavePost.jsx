import React from 'react'

export default function SavePost({ height, stroke, width }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-archive"
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
            <rect x="3" y="4" width="18" height="4" rx="2"></rect>
            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
            <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
    )
}
