import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 50px 20px;
  background-color: #0b0c10; 
  color: #c5c6c7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #66fcf1;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  max-width: 600px;
  margin: 0 auto 40px;
  font-size: 1rem;
  color: #c5c6c7;
  line-height: 1.6;
`;

const SkillBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #1f2833;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
`;

const SkillName = styled.span`
  flex: 1;
  font-size: 1.1rem;
  text-align: left;
`;


const SkillLevelContainer = styled.div`
  flex: 4;
  background-color: #0b0c10;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10px;
`;

const SkillLevel = styled.div`
  height: 20px;
  background-color: #66fcf1;
  width: ${props => props.level || '0%'};
`;


const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #45a29e;
`;

const FooterItem = styled.div`
  flex: 1 1 200px;
  margin: 10px;
  text-align: left;

  & h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #66fcf1;
  }

  & p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  & a {
    display: block;
    color: #c5c6c7;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      color: #66fcf1;
    }
  }
`;


const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;

  & a {
    color: #c5c6c7;
    font-size: 1.5rem;
    margin-right: 15px;
    transition: color 0.3s ease;

    &:hover {
      color: #66fcf1;
    }
  }
`;

const Skill = () => {
  return (
    <SkillsContainer>
      <Title>My Skills</Title>
      <Subtitle>
        In this section I have mention my skills. I have some technical skills which I used to make web development projects. Soft skills helps me in day to day communication with my friends other person within college or organisation.
      </Subtitle>

      <SkillBar>
        <SkillName>Data Structures</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="90%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>
      
      <SkillBar>
        <SkillName>React</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="70%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>HTML5</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="80%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>CSS</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="80%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>Databases</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="60%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>JavaScript</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="50%"></SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <Footer>
        <FooterItem>
          <h4>About</h4>
          <p>Brief description about you or your work.</p>
        </FooterItem>
        <FooterItem>
          <h4>Skills</h4>
          <a href="/">Photoshop</a>
          <a href="/">React</a>
          <a href="/">HTML5</a>
          <a href="/">CSS</a>
        </FooterItem>
        <FooterItem>
          <h4>Work</h4>
          <p>Link to your portfolio, blog, or other content.</p>
        </FooterItem>
        <FooterItem>
          <h4>Have a Question?</h4>
          <p>Contact details or a brief CTA.</p>
          <SocialIcons>
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </FooterItem>
      </Footer>
    </SkillsContainer>
  );
};

export default Skill;
