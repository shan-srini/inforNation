import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 13,
	title: 'Burn Victim Has New Face Regrown',
	image:
		'https://thumbs.dreamstime.com/b/senior-man-holding-knee-pain-collage-concept-abstract-pain-despair-senior-man-holding-knee-pain-collage-145429588.jpg',
	date: '3/22/22',
	content: (
		<div>
			<p>
				Scientists have performed the unthinkable by successfully regrowing a
				man's face on his knee, allowing transplantation to where it ought to
				be. Dr. Kim Bull and her team have figured out how to regrow the various
				parts of a face, giving many who have suffered catastrophic wounds a
				second chance. The first lucky patient in question, Richard Kingler,
				lost much of his face in a tragic Slip-n-Slide accident 40 years ago,
				and was selected as a subject for this pioneering operation in medicine.
			</p>
			<p>
				Despite the foreseen 34% chance of success, Dr. Bull is pleased to
				announce that the tissue-generation and subsequent transplantation went
				off without a hitch. Mr. Kingler is currently in recuperation and
				relearning how to talk, and cannot wait to go home to his wife. After
				performing more instances of this surgery, Dr. Bull and her team intend
				to start research into regrowing whole limbs.
			</p>
		</div>
	),
	validityScore: 22,
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
							Primary-reported by <strong>Whattheheck Herald</strong> (Southern
							USA newspaper)
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
