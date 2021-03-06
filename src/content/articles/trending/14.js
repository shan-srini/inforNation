import React from 'react';

import { SourceValidatedCheckbox } from '../../../components';
import { defaultTextStyles, defaultVizNodeStyles } from '../constants';

const article = {
	id: 14,
	title: 'Working Outside Boosts Productivity by 43%',
	image: 'https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
	date: '3/30/22',
	content: (
		<div>
			<p>
				In a recent study by Gravy-Stock Simulations Incorporated, it was
				discovered that having employees work outside increases productivity by
				43%. When questioned, representatives of GraSS Inc. provided details
				about how they set up a temporary office in “a random field somewhere,”
				where they paid employees twice the salary to relocate and work in a
				different environment. If this discovery holds true, it will
				revolutionize business as we know it, and maybe the ecosystem as well.
			</p>
			<p>
				If a sudden shift from gray offices to green meadows were to overtake
				the corporate scene, the towering skyscrapers of today would diminish
				incredibly, with the conservation and floral maintenance industries
				receiving incredible amounts of capital in order to prepare these new
				“eco-offices.” The ecological benefit of more green spaces should be
				obvious, meaning cleaner air for all as the grass eats the carbon
				dioxide. No longer will traffic smog up our cities, for greener pastures
				await us all.
			</p>
		</div>
	),
	validityScore: 99,
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
							Primary-reported by <strong>Daily Life Hacker</strong>{' '}
							(Europe-based international publication)
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
