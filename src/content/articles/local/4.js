import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 4,
  title: "Boston Adopted as Part of Upstate New York",
  image:
    "https://www.worldgreynews.com/uploads/main2/0/2/142/11.jpeg",
    date: '2/29/22',
  content: (
    <div>
      <p>
      The Red Sox and Yankees rivalry has spread so far it has officially transcended the baseball diamond. Now, Bostonians and New Yorkers are constantly feuding and trying to obtain an upper hand on the other. Recently, New Yorkers have started to claim that they make the best clam chowder in the northeastern United States. This notion was laughed at by Bostonians and Americans alike as that's just too crazy to be true. But Bostonians weren't done with that. Rather, they came up with a new plan that was sure to shake New Yorkers to their core. They started to call themselves part of upstate New York. While any true Bostonian will say they are from the great state of Massachusetts, when a New Yorker asks them, they will confidently reply, "I'm from Boston, it's in upstate New York." Nothing angers a New Yorker like someone misappropriating New York geography and claiming to be upstate when you are not actually upstate. Bostonians capitalized on this irrational need to be geographically correct and drove it home. New York city has already implemented a complete lockdown of the city. Curfew is put in place and the national guard has been summoned to cool tempers. The stock market has now been closed for 8 consecutive days due to the inactivity on wall street, which has never been done before. Meanwhile, Bostonians are laughing and eating their world renowned clam chowder, not a care in the world. New York seems incapable of striking back at the moment, but we'll see if they can come up with something to match this genius.
      </p>
    </div>
  ),
  validityScore: 80,
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
