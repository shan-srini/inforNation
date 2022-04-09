import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 12,
	title: 'New Pressure Point Discovered?',
	image:
		'https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg',
	date: '3/30/22',
	content: (
		<div>
			<p>
				Homeopathic “doctor” Bobert Brown claims to have discovered a new
				pressure point in the neck which induces immediate euphoria. His wife
				and nurse, Elizabeth Brown, claims that it “works a charm,” and has made
				her life much more enjoyable. A cult following of his patients have
				risen up to claim the efficacy and reliability of this technique, which
				looks remarkably like strangulation. Brown is unavailable for comments
				at this time, having secluded himself from public affairs at this time.
			</p>
			<p>
				Us here at Renard News love Bobert, and fully support his decision.
				While we're concerned about the look of technique, many “Pressure Pals”
				in our ranks swear by it. There have been reports of hospitalizations
				due to incorrect attempts to use this technique, so we recommend caution
				to everyone trying to capitalize on this pressure point.
			</p>
		</div>
	),
	validityScore: 11,
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
							Primary-reported by <strong>Climax Discovery</strong> (online,
							R-rated graphical magazine)
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
