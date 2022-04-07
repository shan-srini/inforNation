import React from "react"

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 1,
  title: "Boston Man Eats 39 Wedding Cakes",
  image:
    "https://www.worldgreynews.com/uploads/main2/0/2/116/45.jpeg",
  date: '3/31/22',
  content: (
    <div>
      <p>
        The police have looked at the firearm's serial number and determined it
        belonged to Maximillian Gunthry, who lives in the town over. Mr. Gunthry
        has been arrested, but claims to have an alibi for the time of the
        shooting and that his weapon had been stolen days prior. Whatever the
        truth of this is, the police will get to the bottom of this and we'll
        keep you updated.
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
            <p style={defaultTextStyles}>Primary-reported by <strong>Boston Globe</strong> (regional publication)</p>
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
}

export default article