import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 18,
  title: "Meowfather Cat Cosplay Goes Viral",
  image: "https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg",
  date: '3/19/22',
  content: (
    <div>
      <p>
        A cosplay of Don Whiskers from “The Meowfather” novel has gone viral on
        Instagram. The user “kitty_cosplays” has dressed her cat Mittens up as
        the much-reviled Don Whiskers, much to the delight of viewers who love
        seeing cats in silly costumes. Racking up over 50M “Likes” overnight,
        kitty_cosplays is pleased with the overwhelming support for the costume
        and “virtual hugs” for Mittens. They intend to move onto their next
        costume soon, but has made it clear that it's a secret.
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Yarn</strong> (neighborhood feline-edited publication)</p>
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
