import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import {Contact} from '../contact/Contact'
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper style={{marginTop : "-1%"}}>
      <SectionDivider />
      <br />
      <SectionTitle id='contact'>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>
          <LinkItem href="tel:+91-7066692209">+91-7066692209</LinkItem>
        </LinkColumn>
        <LinkColumn style={{marginLeft: "-60px"}}>
          <LinkTitle >Email</LinkTitle>
          <LinkItem href="mailto:amrutabanait28@gmail.com">
          amrutabanait28@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="mailto:amrutabanait28@gmail.com">
          Nashik, Maharashtra
          </LinkItem>
        </LinkColumn>
      </LinkList>
     
      
      <Contact />
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inspriration from Dev John</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="mailto:amrutabanait28@gmail.com" target="_blank">
            <AiOutlineMail size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/amrutaBanait" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/amruta-banait/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/AmrutaBanait"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
