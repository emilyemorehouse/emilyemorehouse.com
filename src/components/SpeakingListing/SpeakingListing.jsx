import React from 'react'
import { Box, Card, Heading, Text } from 'rebass'
import styled from 'styled-components'

import ExternalLink from '../ExternalLink/ExternalLink'

const ListItem = ({
  comingSoon,
  eventDate,
  eventLocation,
  eventName,
  infoLink,
  slidesLink,
  talkName,
  videoLink,
}) => (
  <Card
    bg={comingSoon ? 'rgba(173, 119, 78, 0.4)' : 'rgba(142, 249, 243, 0.4)'}
    borderColor="black"
    border={2}
    my={3}
    p={3}
  >
    <Heading fontSize={[2, 3, 4]} fontFamily="mono">
      {eventName}
    </Heading>

    <Heading fontSize={[1, 2, 3]} my={20} fontFamily="mono">
      {talkName}
    </Heading>

    <Text fontFamily="mono">
      {eventLocation}
      <br /> {eventDate}
    </Text>

    {(infoLink || slidesLink || videoLink) && (
      <Box mt={20}>
        {infoLink && (
          <ExternalLink
            altColor="#dcfbfa"
            color="black"
            style={{ marginRight: 10 }}
            title="Info"
            url={infoLink}
          />
        )}

        {slidesLink && (
          <ExternalLink
            altColor="#dcfbfa"
            color="black"
            style={{ marginRight: 10 }}
            title="Slides"
            url={slidesLink}
          />
        )}

        {videoLink && (
          <ExternalLink
            altColor="#dcfbfa"
            color="black"
            style={{ marginRight: 10 }}
            title="Video"
            url={videoLink}
          />
        )}
      </Box>
    )}
  </Card>
)

const SpeakingListing = () => (
  <div>
    <Heading fontFamily="mono" fontSize={[4, 5, 6]}>
      2019
    </Heading>
    <ListItem
      eventName="PyCon"
      talkName="What to Expect When You're Expecting (Tutorial)"
      eventLocation="Cleveland, OH"
      eventDate="May 2, 2019"
      comingSoon
    />
    <ListItem
      eventName="PyTexas"
      talkName="Keynote"
      eventLocation="Austin, TX"
      eventDate="April 13 - 14, 2019"
      infoLink="https://www.pytexas.org/2019/"
      comingSoon
    />
    <Heading fontFamily="mono" fontSize={[4, 5, 6]}>
      2018
    </Heading>
    <ListItem
      eventName="Denver Startup Week"
      talkName="Be Optimistic: Offline First Apps"
      eventLocation="Denver, CO"
      eventDate="Sept 24–28, 2018"
      infoLink="https://www.denverstartupweek.org/schedule/4145-be-optimistic-offline-first-apps"
    />
    <ListItem
      eventName="DjangoCON"
      talkName="What to Expect When You're Expecting (Tutorial)"
      eventLocation="San Diego, CA"
      eventDate="Oct 14, 2018"
      infoLink="https://2018.djangocon.us/tutorial/what-to-expect-when-you-re-expecting-a/"
    />
    <ListItem
      eventName="DinosaurJS"
      talkName="What to Expect When You're Expecting"
      eventLocation="Denver, CO"
      eventDate="June 21-22, 2018"
      videoLink="http://confreaks.tv/videos/dinosaurjs2018-what-to-expect-when-you-re-expecting-a-guide-to-regression-testing"
      slidesLink="https://emilyemorehouse.github.io/what-to-expect-when-youre-expecting"
    />
    <ListItem
      eventName="PyCon"
      talkName="The AST and Me"
      eventLocation="Cleveland, OH"
      eventDate="May 9 - 17, 2018"
      videoLink="https://www.youtube.com/watch?v=XhWvz4dK4ng"
      slidesLink="https://emilyemorehouse.github.io/ast-and-me"
    />
    <ListItem
      eventName="Dev Ops Days YVR"
      talkName="The AST and Me"
      eventLocation="Vancouver, B.C. Canada"
      eventDate="Apr 20-21, 2018"
      slidesLink="http://emilyemorehouse.github.io/ast-and-me"
    />
    <ListItem
      eventName="Google Developer Group's Women Techmakers Lightning Talks"
      talkName="The Perfectly Unhappy Programmer"
      eventLocation="Boulder, CO"
      eventDate="March 8, 2018"
      videoLink="https://youtu.be/wiyYTd9IL3Y"
      slidesLink="https://drive.google.com/open?id=1POjAZG5G3H1PSw5ftF-RocMUl52AVyu8JZKm7OsMB34"
    />
    <ListItem eventName="Startup Grind" eventLocation="Denver, CO" eventDate="Feb 28, 2018" />
    <ListItem
      eventName="SHIFT Conf"
      talkName="How To Be A Passionate Programmer"
      eventLocation="San Francisco, CA"
      eventDate="Feb 27, 2018"
    />
    <ListItem
      eventName="PyCascades"
      talkName="The AST and Me"
      eventLocation="Vancouver, B.C. Canada"
      eventDate="January 22-23, 2018"
      videoLink="https://youtu.be/Vkgb3fI8d7M"
      slidesLink="http://emilyemorehouse.github.io/ast-and-me"
    />
    <ListItem
      eventName="Denver Python User Group"
      talkName="The AST and Me"
      eventLocation="Denver, CO"
      eventDate="January 17, 2018"
      slidesLink="http://emilyemorehouse.github.io/ast-and-me"
    />

    <Heading fontFamily="mono" fontSize={[4, 5, 6]} mb={20}>
      2017
    </Heading>
    <ListItem
      eventName="Boulder Python User Group"
      talkName="The AST and Me"
      eventLocation="Denver, CO"
      eventDate="December 12, 2017"
      slidesLink="http://emilyemorehouse.github.io/ast-and-me"
    />
    <ListItem
      eventName="Startup Grind"
      eventLocation="Tallahassee, FL"
      eventDate="November 15, 2017"
    />
    <ListItem
      eventName="FSU's 7 Under 30"
      eventLocation="Tallahassee, FL"
      eventDate="November 14, 2017"
    />

    <Heading fontFamily="mono" fontSize={[4, 5, 6]} mb={20}>
      2016 and Older
    </Heading>
    <ListItem
      eventName="Hack FSU"
      talkName="Introduction to Ionic"
      eventLocation="Tallahassee, FL"
      eventDate="February 5-7, 2016"
      slidesLink="http://emilyemorehouse.github.io/ionic-present"
    />
    <ListItem
      eventName="Code with Cuttlesoft"
      talkName="Mobile App Workshop"
      eventLocation="Tallahassee, FL"
      eventDate="August 12, 2015"
      slidesLink="http://emilyemorehouse.github.io/ionic-present"
    />
  </div>
)

export default SpeakingListing
