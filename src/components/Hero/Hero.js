import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <title>Welcome to</title> <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        Like a resume of projects and experiences i've gained through the years.
      </SectionText>
      <Button onClick={() => window.location =  "https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;