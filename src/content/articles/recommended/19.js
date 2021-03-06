import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 19,
	title: 'What To Do When Your Child Discovers Fanfiction',
	image:
		'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
	date: '3/10/22',
	content: (
		<div>
			<p>
				As any parent of a teenager can tell you, one of the scariest moments is
				when their beloved bundle of joy learns enough to navigate the web on
				their own. One day, your child might find themselves on a website
				dedicated to fanfiction. What do you do then? Have a serious talk with
				them, or pretend you didn't notice as they explore? Researchers from
				Golden Glizzy University think they might have come up with just the
				answer.
			</p>
			<p>
				The researchers from GGU, led by Dr. Andromeda Anastasia, have come to
				the conclusion that the best thing to do is to dredge up your own
				embarrassing fanfiction, and have a heart-to-heart with your child.
				Assure them that this is perfectly natural and nothing to be embarrassed
				about, but make sure they understand the need to tread carefully. Make
				sure they download an antivirus to ensure proper protection, and have
				them ask “would these characters really do this” before reading so that
				their beloved protagonists are not tainted by poorly-written stories.
				After this, assure them that you'll be available to talk to, and let
				them have their privacy.
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
							Primary-reported by{' '}
							<strong>Micromanaging Mothers of Massachusetts</strong> (online
							forum)
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
