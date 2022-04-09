import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 8,
	title: 'Who Really is On First?',
	image: 'https://www.worldgreynews.com/uploads/main2/0/2/118/10.jpeg',
	date: '3/10/22',
	content: (
		<div>
			<p>
				Famous philosophers and baseball enthusiasts Bud Abbott and Lou Costello
				were the first to pose the question, "Who's on first". While seemingly
				such a simple question, the answer is still up for debate. The typical
				response is simply, "yes" though this has sparked outrage and confusion
				amongst the baseball community. President Biden has recently deployed a
				task force to investigate this issue, though the public is uncertain
				that a commonality will be reached. While Abbott and Costello are no
				longer with us to guide this delicate situation, their famously
				televised debate will always be a subject for studying as this question
				is pondered. Their frustration and passion for this answer has only
				grown stronger with each generation as they can feel the answer coming
				soon. What's on second? I don't know, all I want to know is who's on
				first? Yes?
			</p>
		</div>
	),
	validityScore: 27,
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
							Primary-reported by <strong>The Philosophical Athlete</strong>{' '}
							(USA national publication)
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
