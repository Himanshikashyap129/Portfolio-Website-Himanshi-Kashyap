import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const grow = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${(props) => props.level || '0%'};
  }
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
  position: relative;
`;

const SkillLevel = styled.div`
  height: 20px;
  background-color: #66fcf1;
  width: ${(props) => props.level || '0%'};
  animation: ${grow} 2s ease-in-out;
`;

const SkillPercentage = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: #0b0c10;
  font-weight: bold;
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
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec faucibus tincidunt vel velit eget aliquam sapien.
      </Subtitle>

      <SkillBar>
        <SkillName>Data Structures</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="90%">
            <SkillPercentage>90%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>
      
      <SkillBar>
        <SkillName>React</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="70%">
            <SkillPercentage>70%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>HTML5</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="80%">
            <SkillPercentage>80%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>CSS</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="80%">
            <SkillPercentage>80%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>Databases</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="60%">
            <SkillPercentage>60%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <SkillBar>
        <SkillName>JavaScript</SkillName>
        <SkillLevelContainer>
          <SkillLevel level="50%">
            <SkillPercentage>50%</SkillPercentage>
          </SkillLevel>
        </SkillLevelContainer>
      </SkillBar>

      <Footer>
        <FooterItem>
          <h4>About</h4>
          <p>I am a frontend developer. I have some basic knowledge about MERN stack and I am currently making projects using MERN stack.</p>
        </FooterItem>
        <FooterItem>
          <h4>Skills</h4>
          <a href="/">Data Structures</a>
          <a href="/">React</a>
          <a href="/">HTML5</a>
          <a href="/">CSS</a>
        </FooterItem>
        <FooterItem>
          <h4>Work</h4>
          <p>I am currently working on making an e-commerce website using MERN stack development.</p>
        </FooterItem>
        <FooterItem>
          <h4>Have a Question?</h4>
          <p>Feel free to contact me on my social media.</p>
          <SocialIcons>
            <a href="https://www.facebook.com/yourprofile"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/yourprofile"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/yourprofile"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/yourprofile"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </FooterItem>
      </Footer>
    </SkillsContainer>
  );
};

export default Skill;
