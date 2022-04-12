import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 20,
	title: '4-Year-Old Throws Down Dunk',
	image: 'https://www.worldgreynews.com/uploads/main2/0/2/142/6.png',
	date: '3/7/22',
	content: (
		<div>
			<p>
				Carl Hardy's Jr III, a 4-year-old boy from Idaho, Nebraska has
				discovered a new talent at such a young age. For years, he would not
				even touch a basketball. He would play soccer, t-ball, even tag at
				below-average levels for his age group, and his parents began to believe
				he would amount to absolutely nothing in life. Then, on April 3rd, 2022,
				Carl did something incredible. He picked up a basketball, walked over to
				the full sized, 10 foot, hoop in the driveway, sprang up, slammed the
				ball down, and hung on the rim. His parents were so surprised that it
				took them a full 10 minutes to realize he was crying because he was
				scared to let go. Where has this talent been his entire life? Could he
				always do this, or was he waiting until he was certain he wouldn't fail?
				Either way, Jr III now has 13 different NBA contracts lined up and is
				currently debating whether he should make the leap to the professional
				level, or continue his schooling at Northsouth East Elementary in Mrs.
				Missus kindergarten classroom. His parents have been quoted noting that
				this decision is entirely up to Carl. They will not influence him, and
				they trust him and will support any decision he makes. Everyone else
				thinks it's a terrible idea to let a 4-year-old make that decision, but
				hey, I don't see any of you dunking a basketball. Jr III's largest
				contract guratnees him $1.3 billion by the time he turns 7, excluding
				the sponsorships rolling in. The nation patiently awaits this extremely
				big decision.
			</p>
		</div>
	),
	validityScore: 100,
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
