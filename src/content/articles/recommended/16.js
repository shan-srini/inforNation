import React from "react";

import { SourceValidatedCheckbox } from '../../../components'
import { defaultTextStyles, defaultVizNodeStyles } from '../constants'

const article = {
  id: 16,
  title: "Odd Performance Art to Celebrate Sesame Stream Novel",
  image:
    "https://64.media.tumblr.com/33c95952d1f0d8a76003f990dc3f0a7b/tumblr_pd6b6eSHAc1vvcp1fo1_1280.jpg",
    date: '3/29/22',
  content: (
    <div>
      <p>
        In a perhaps misguided attempt to celebrate the new Sesame Street novel
        “Big Bird and You,” Swedish performance artists Kyle and Louise Krane
        uploaded a video of them performing a meta-interpretation of the novel's
        plot. Mr. Krane donned a Big Bird-like costume, and proceeded to read it
        to Mrs. Krane, who was locked in a cage. The demonstration lasted eight
        hours, letting the pair read through the book in whole. There is
        evidence of video-splicing during the video, indicating that the pair
        might have taken breaks so as to not be locked into the performance for
        the whole duration.
      </p>
      <p>
        The Kranes, upon questioning, had both much and nothing to say about
        their performance art.
      </p>
      <p>
        Kyle: “Me in the costume and Lou in the cage is a meta-commentary on the
        intensity that Big Bird brings to the novel.”
      </p>
      <p>
        Louise: “In a way, the reader is held captive by the novel, enraptured
        and forced to read and read until conclusion.”
      </p>
      <p>
        Kyle: “We think it's a kind of meta-commentary on the way politics is
        all around us, never letting us be free from the weight of society.”
      </p>
      <p>
        You can find the Kranes' video on the internet, and “Big Bird and You”
        in bookstores everywhere.
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
            <p style={defaultTextStyles}>Primary-reported by <strong>The Sunday Sesame</strong> (pre-adolescent magazine)</p>
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
