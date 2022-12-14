import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
        <DiCssdeck size="3rem"  /> <Span>Portfolio</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ITheDongTran">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dongtran/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:thedongtran@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
