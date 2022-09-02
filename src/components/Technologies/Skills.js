import React from 'react';
import { DiCode, DiDatabase, DiFirebase, DiGit, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I focus on full-stack software engineering. <br />
      Here are my current skills.
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>Languages</ListContainer>
        <ListParagraph>
          Python <br  />
          C++ <br />
          JavaScript <br  />
          SQL
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>Stack Frameworks</ListContainer>
        <ListParagraph>
          React <br  />
          Next<br />
          Node <br />
          MongoDB<br />
          Flask
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>Developer Tools</ListContainer>
        <ListParagraph>
          Git <br />
          GitHub <br />
          MySQL<br />
          Visual Studio Code<br />
          VMWare
        </ListParagraph>
      </ListItem>
    </List>

  </Section>
);

export default Skills;
