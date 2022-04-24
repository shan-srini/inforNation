import React, { useRef, useState } from 'react'
import { Box, Container } from '@mui/material';

import './CommentsForm.css'

export default function CommentsForm({ slug }) {
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    return (
        <Box className='comments-form-content'>
            <h3 className='title'>Leave a reply</h3>
            <div className='entry-grid'>
                <textarea
                    className='entry'
                    ref={commentEl}
                    placeholder='Comment...'
                    name='comment' />
            </div>
            {/* Large devices: name and email inputs will be next to each other */}
            <div className='user-info-grid'>
                <textarea
                    className='user-info'
                    ref={nameEl}
                    placeholder='Name'
                    name='name'
                />
                <textarea
                    className='user-info'
                    ref={emailEl}
                    placeholder='Email'
                    name='email'
                />
            </div>
            <div style={{marginBottom: '40px'}}>
                <button className='post-button' type="button">
                    Post comment
                </button>
            </div>
        </Box>
    )
}