import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 2,
  title: "Boston Marathon Changing to an All Fours Event",
  image:
    "https://www.worldgreynews.com/uploads/main2/0/2/116/50.jpeg",
    date: '3/30/22',
  content: (
    <div>
      <p>
        Recent reports that the Boston Marathon is exclusive of baby competitors have resulted in heated debates surrounding the famed event.Local mother, Shiela Shiela quotes "I just know that my baby could do this but it's just not a fair playing field. If only everyone was competing the same way"This quote went viral and the Boston mayor had no choice but to demand that all participants in this year's Boston Marathon are to crawl their way 26.2 miles to the finish line.This is the first marathon where babies will have an equal opportunity to succeed as the rest of their competitors, and is truly a huge moment in the sport.
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Northeastern Nagger</strong> (local University newspaper)</p>
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
