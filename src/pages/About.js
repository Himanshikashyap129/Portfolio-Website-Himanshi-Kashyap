// About.js
import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaLanguage } from 'react-icons/fa'; // Import the icons

const Container = styled.div`
  background-color: #0B0C10; 
  color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileText = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px; 
  display: inline-flex;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 40px 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillCard = styled.div`
  background-color: #1F2833;
  padding: 10px;
  border-radius: 10px;
  width: 30%;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFMlIcvUiLw6SN51RSGI_rjk5pLy4305N9dW6Is8ctOmW806BdQCSO3QrodBi5HXHJU0&usqp=CAU" alt="Profile" />
        <ProfileText>
          <Name>Himanshi Kashyap (She/Hers)</Name>
          <InfoText>
            <IconWrapper><FaMapMarkerAlt /></IconWrapper>
            Agra, Uttar Pradesh, India.
          </InfoText>
          <InfoText>
            <IconWrapper><FaLanguage /></IconWrapper>
            English, Hindi
          </InfoText>
        </ProfileText>
      </ProfileSection>

      <SectionTitle>When I'm not designing</SectionTitle>
      <SkillsSection>
        <SkillCard>
          <SkillTitle>Family Time</SkillTitle>
          <InfoText>I like to spend some time with my family members it just like to feel free from work and other things, I cherish spending quality time with my family.</InfoText>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Dance</SkillTitle>
          <InfoText>When I dance, the world fades away. It's in those moments that I forget my worries and lose myself entirely to the rhythm.</InfoText>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Gardening</SkillTitle>
          <InfoText>Gardening is my passion. I love nurturing different types of plants and watching them grow. Creating new life from the soil brings me immense joy and fulfillment.</InfoText>
        </SkillCard>
      </SkillsSection>

      <SectionTitle>Design Skills</SectionTitle>
      <SkillsSection>
        <SkillCard>
          <SkillTitle>Technical Skills</SkillTitle>
          <SkillList>
            <SkillItem>Web Development</SkillItem>
            <SkillItem>Data Structures and Algorithms</SkillItem>
            <SkillItem>Video Editing</SkillItem>
            <SkillItem>MS Office</SkillItem>
            <SkillItem>Social Media</SkillItem>
            <SkillItem>Layout Design</SkillItem>
            <SkillItem>Data Visualization</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Soft Skills</SkillTitle>
          <SkillList>
            <SkillItem>Giving and Receiving Feedback</SkillItem>
            <SkillItem>Collaboration and Teamwork</SkillItem>
            <SkillItem>Presenting Design Ideas</SkillItem>
            <SkillItem>Communication</SkillItem>
            <SkillItem>Adaptable</SkillItem>
            <SkillItem>Work Under Tight Deadlines</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Tools</SkillTitle>
          <SkillList>
            <SkillItem>Visual Studio Code</SkillItem>
            <SkillItem>Git and Github</SkillItem>
            <SkillItem>MongoDB</SkillItem>
            <SkillItem>Intellij Idea</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsSection>
    </Container>
  );
};

export default About;
