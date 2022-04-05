import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 7,
  title: "Is Billiards Safe for Children? New Concussion Study Suggests it Definitely is Not",
  image:
    "https://www.worldgreynews.com/uploads/main2/0/2/118/4.jpeg",
    date: '3/31/22',
  content: (
    <div>
      <p>
      Billiards is a classic game where players compete to sink their own ceramic balls into the pockets before their opponent is able to accomplish the same feat. This is a non contact sport, though surprising cases of concussions resulting from gameplay have been on a steep incline in the past year and a half. As it turns out, children are very bad at keeping their cool. When they lose a game, they are typically very unhappy, and easy access to long wooden sticks and weighted ceramic balls is not a good sign for the victorious child. Since the start of the COVID-19 pandemic, 4,785 cases of billiards-related concussions have been reported and the National Billiards Committee is currently looking into resolving this issue. Suggestions include lighter balls, parental supervision, and vaccinations. Non-believers argue that concussions were always a part of the sport, we just happen to test for them more, and that concussions obtained elsewhere are simply being counted as billiards-related despite recent gameplay being the direct cause. This is a delicate issue, though the public waits patiently as the experts determine the best method for keeping children safe during these difficult times.
      </p>
    </div>
  ),
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
              <SourceValidatedCheckbox height={48} width={48} stroke={'white'} />
            </>
          ),
        },
        position: { x: 0, y: 0 },
        style: defaultVizNodeStyles
      },
      {
        draggable: false,
        id: 'bostonGlobe_report',
        sourcePosition: 'right',
        type: 'input',
        data: {
          label: (
            <p style={defaultTextStyles}>Primary-reported by <strong>Self-bankrupting Ballsport Bureau</strong> (sports editorial)</p>
          ),
        },
        position: { x: -200, y: 0 },
        style: defaultVizNodeStyles
      },
    ],
    edges: [
      { id: 'bostonGlobe_report - currentArticle', source: 'bostonGlobe_report', target: 'currentArticle', type: 'smoothstep', animated: true, },
    ]
  }
};

export default article;
