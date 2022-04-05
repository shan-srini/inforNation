import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 3,
  title: "Stetson East Voted Best Restaurant in Boston",
  image:
    "https://www.worldgreynews.com/uploads/main2/0/2/117/94.jpeg",
    date: '3/29/22',
  content: (
    <div>
      <p>
      Boston boasts some of the most famous and notable restaurants in the world, from the historic Italian cuisine of the North End, tantalizing seafood in the newly developed Seaport neighborhood. However, when it came to locals in the Greater Boston Area, the vote was shocking. In the largest landslide since the re-election of Ronald Reagan, Stetson East Dining Hall, located in the lower level of one of Northeastern University's freshman dormitories, was voted best restaurant by a margin of 97%. This famed eatery offers a unique and rotating menu of flavors that are sure to leave students and patrons satisfied. The decor reminds you of a cafeteria as you load up on number 4 of your unlimited plates. This establishment is sure to remain, and we recommend you to try it.
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Boston Globe</strong> (regional publication)</p>
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
