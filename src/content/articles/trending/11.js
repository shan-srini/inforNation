import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 11,
  title: "Pastry Woman Has Escaped",
  image:
    "https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-02-scaled.jpg",
    date: '4/1/22',
  content: (
    <div>
      <p>
        According to NYPD, the much-reviled Pastry Woman has escaped police
        containment and is on the loose. This nightmarish figure, as many
        recall, is much-reviled by the greater public for the viciousness of her
        murders, all relating somehow to pastries. The police of New York are
        immediately enforcing an 8PM curfew; the reason for this is that Pastry
        Woman only strikes after 9PM, and only in the five boroughs of New York
        City. Additional police forces from New Jersey are being sent in, with
        the hope to recapture her before any more deaths.
      </p>
      <p>
        Effective immediately, pastor Jimithy James of the Retro Baptist Church
        is offering spiritual counseling to family members of Pastry Woman's
        victims. Many have felt the trauma left in her wake, and Jimithy wishes
        to help his community in such uncertain times.
      </p>
    </div>
  ),
  validityScore: 75,
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Carbohydrate Watch</strong> (international crime-themed magazine)</p>
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
