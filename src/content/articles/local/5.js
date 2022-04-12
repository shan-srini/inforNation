import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 5,
	title: 'Is Boston Boring?',
	image: 'https://www.worldgreynews.com/uploads/main2/0/2/142/8.jpeg',
	date: '2/20/22',
	content: (
		<div>
			<p>
				Boston is one of the most popular and exciting places in the United
				States currently, which draws in everyone from college students, to
				residents, to tourists all year round. This city is home to the Red Sox,
				a fantastic aquarium, some of the country's best seafood, and historic
				ethnic areas like the North End and Chinatown. But is this wonderful
				city actually really lame? Northeastern student, Gabriel Lantz claims
				that this city is old and ruins all the fun. "No happy hours, no
				parties, and everything is closed by 9 except for Dominos. Also, no one
				accepts my fake ID so I can't go anywhere at night" quotes Lantz. His
				opinions are not isolated, however, as more students are claiming they
				are unable to obtain a serotonin overload from Boston amenities. There
				is a petition running to allow Happy Hour back in Boston, and to
				eliminate the long-overdue law limiting the number of residence
				permitted in one residence. Boston is a city with so much potential, but
				why is it just like so sad sometimes. Be better.
			</p>
		</div>
	),
	validityScore: 10,
	vizData: {
		nodes: [
			{
				draggable: false,
				id: 'currentArticle',
				targetPosition: 'left',
				type: 'output',
				data: {
					label: (
						<>
							<SourceValidatedCheckbox
								height={48}
								width={48}
								stroke={'white'}
							/>
						</>
					),
				},
				position: { x: 0, y: 0 },
				style: defaultVizNodeStyles,
			},
			{
				draggable: false,
				id: 'bostonGlobe_report',
				sourcePosition: 'right',
				type: 'input',
				data: {
					label: (
						<p style={defaultTextStyles}>
							Primary-reported by <strong>The Boston Globe</strong> (regional
							publication)
						</p>
					),
				},
				position: { x: -200, y: 0 },
				style: defaultVizNodeStyles,
			},
		],
		edges: [
			{
				id: 'bostonGlobe_report - currentArticle',
				source: 'bostonGlobe_report',
				target: 'currentArticle',
				type: 'smoothstep',
				animated: true,
			},
		],
	},
};

export default article;
