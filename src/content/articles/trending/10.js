import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 10,
  title: "Young Girl Solves Traveling Salesman Problem",
  image: "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
  date: '4/1/22',
  content: (
    <div>
      <p>
        Eleven-year-old Suzanne Alouette has shocked the Math community by
        solving and optimizing the infamous Traveling Salesman Problem below
        polynomial time. The implications of this discovery are astonishing, to
        say the least, with the potential to revolutionize business as we know
        it. By being able to plot the shortest route that connects every point,
        services such as airline services will be able to save millions of
        dollars. In addition, algorithm courses across the world will need to
        come up with a new standard against which to describe these potentially
        intractable problems.
      </p>
      <p>
        When asked what led little Suzie into mathematics, the fledgling
        scientist told us about her times at Disney World. Suzie hates walking,
        and her previous trip left her exhausted. Where most people would admit
        defeat and visit less rides, this young genius persevered by hitting the
        books and figuring out the shortest path that would take her through all
        the rides she wants to visit. Her parents are exceptionally proud, and
        have already planned a trip to Disney World in celebration.
      </p>
    </div>
  ),
  validityScore: 25,
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Washington Post</strong> (USA-based international publication)</p>
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
