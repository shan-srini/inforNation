import './About.css';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import constants from '../../constants'


export default function About() {
    return (
        <Container className='about-page-container'>
            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'About this app'}
                </Typography>
            </Box>
            <Container className='section-body'>
                <p>
                    inforNation is a news article resource tool for finding factual and reputable information easily and efficiently. AI will be utilized to find and suggest recent/wide-reaching articles, and then display information to users showcasing the reasons for selection on our site in a transparent way. This will include graphs and charts that the user can interact with to verify the article’s credibility and leverage as groundwork to learn how to spot credibility or misinformation on their own.
                </p>
            </Container>

            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'Design goals'}
                </Typography>
            </Box>
            <Container className='section-body'>
                <ul>
                    <li>Exceptionally engage users.
                        <ul>
                            <li>Topics such as politics often serve as entertainment to people—while analyzing scientific papers, figures, and trends do not always do so.</li>
                            <li>Measure how often (baserates) & for how long they view or interact with certain components.</li>
                            <li>Implement beasutiful component animations in order to immerse users and make them feel in control of their educational quest.</li>
                        </ul>
                    </li>
                    <li>Get users to routinely click on suggested pieces.
                    </li>
                    <li>Allow determined users to customize and become comfortable in their experience via graphic settings, topic preferences, or checkboxed parameter filters.
                        <ul>
                            <li>Serve as a transparent resource for users by visualizing the pipeline of data source(s), data collection methods, data processing techniques that result in a final conclusion or decision as to which parameters/subtopics to present
                                <ul>
                                    <li>The pipeline may be represented as an interactive flowchart diagram that is a user-traversable frontend component</li>
                                    <li>This feature, as well as other more complex ones, are part of an opt-in program for additional technical functionality.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Create an experience for many types of users, including:
                        <ul>
                            <li>People generally interested in fact-based news, concerned by misinforming claims, or looking to better understand a complicated or divisive topic</li>
                            <li>News article readers who may want an occasional concise and eye-pleasing media alternative</li>
                            <li>Journalists who may want to reference, or embed in their organization’s apps, our visualizations/publications
                                <ul>
                                    <li>Also: Informational video creators, Fact-checkers, Researchers, Historians</li>
                                </ul>
                            </li>
                            <li>Older people who are often more easily influenced by “flash” media</li>
                            <li>People with disabilities</li>
                        </ul>
                    </li>
                </ul>
            </Container>

            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'See the code'}
                </Typography>
            </Box>
            <Container className='section-body'>
                <p>
                    Our open source repository can be found <a href={constants.repoLink}>here</a>.
                </p>
            </Container>
        </Container>
    )
}