import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 9,
	title: 'Tom Brady Breaks Guinness World Record for Cheating Scandals',
	image: 'https://www.worldgreynews.com/uploads/main2/0/2/142/5.jpeg',
	date: '3/9/22',
	content: (
		<div>
			<p>
				A recent report done by the Guinness Book of World Records, has
				discovered that no professional athlete has been involved in more
				cheating scandals than Tampa Bay Buccaneers and former long time New
				England Patriots quarterback Tom Brady. Well regarded as the greatest
				quarterback of all time, boasting 5 Super Bowl rings, 3 MVP awards, 15
				Pro Bowl selections, and 37 different cheating scandals. From deflating
				footballs, to filming practices, to summoning the mythical lord Cthulhu
				to fix playoff games, Tom Brady will stop at nothing to secure a win.
				His most notable scandal came during the 2025 season, where he threw for
				1,000 yards in a single game, despite having two broken arms and being
				fast asleep the entire game. It was discovered that Brady found a magic
				lamp deep in a middle eastern desert and used it to become better at the
				game he once cared so much about. Though given three wishes, he used
				none of them to avoid getting caught. Did he want to be caught? Maybe...
				This resulted in his 10 year suspension from the league, though he
				promises to return at the ripe age of 60 to lead the Jacksonville
				Jaguars to their first every Super Bowl victory.
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
