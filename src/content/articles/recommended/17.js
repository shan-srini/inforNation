import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 17,
	title: "Ventrilotarian Meet-Up's First Day Off to A Great Start",
	image:
		'https://gratisography.com/wp-content/uploads/2022/03/gratisography-10-free-stock-photo-1170x780.jpg',
	date: '3/20/22',
	content: (
		<div>
			<p>
				The first day of the annual ventrilotarian meetup has gone off to a
				smashing success. To open up the ceremony, the president Sir Hans Vox
				recited “The New Colossus” from his left hand to much applause. Certain
				attendees clarified that Sir Vox was struggling for years to become
				ambidextrous in his ventriloquism. The art of motionlessly throwing your
				voice, making hand movements, and reciting stories and poems is quite
				the respected art indeed. On the second day, returnees will recite
				original poetry, followed by a catered dinner by Chipotle.
			</p>
			<p>
				“Give us your tired, your poor” indeed. We don't employ any
				ventrilotarians here at Renard News, but we have great respect for the
				skill that is involved, and look forward to the rest of the festival.
				Rumor has it that Willard Smith will be in attendance and do an
				impersonation of a Chris Rock set. Stay tuned for more breaking news on
				this much-beloved affair.
			</p>
		</div>
	),
	validityScore: 84,
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
							Primary-reported by <strong>The New York Times</strong> (USA-based
							international publication)
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
