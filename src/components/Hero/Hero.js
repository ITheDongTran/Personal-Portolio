import React from 'react';
import { AiOutlineStrikethrough } from 'react-icons/ai';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, RightSection } from './HeroStyles';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br />
        My name is <br />
        Dong Tran
      </SectionTitle>
      <SectionText>
        I am a computer scientist from UC Irvine looking to become a software engineer.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;