import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 6,
	title: 'Newest Olympic Sport: Fish Juggling',
	image: 'https://www.worldgreynews.com/uploads/main2/0/2/117/98.jpeg',
	date: '4/1/22',
	content: (
		<div>
			<p>
				The winter olympic games are home to some of the most iconic events
				since the beginning of competitive sports. Every four years, the best
				athletes from across the globe come together to represent their nations
				in feats of strength, speed, endurance, and mind. And now, for the first
				time since 1445, the Olympic Committee has unanimously voted to include
				a new sport in this years games: fish juggling. A crowd favorite at the
				professional level, fish juggling is comprised of individual competitors
				ice fishing at the same time for as many fish as they feel necessary.
				Then, the competitors must juggle the live fish for a total of 1 minute
				without dropping. The competitors have 10 minutes to complete this feat,
				and it is up to their discretion where to allocate their time. At the
				end of the 10 minutes the competitor who juggled the most fish is
				victorious, and ties are broken by time to complete first, and number of
				fish caught next if necessary. I for one can not wait to see this sport
				go global, and I know we will all be watching together.
			</p>
		</div>
	),
	validityScore: 21,
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
							Primary-reported by <strong>Frantic Fishies</strong> (sports
							magazine)
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
