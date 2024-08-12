import React from 'react';
import styled, { keyframes } from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Content>
        <GreetingText>Hello, It's Me</GreetingText>
        <NameText>Himanshi Kashyap</NameText>
        <JobTitle>And I'm a <span>ReactJs Developer</span></JobTitle>
        <Description>
        👋 Hi, I'm Himanshi Kashya, a passionate ReactJS Developer! I've created various projects like a Calculator, Temperature Converter, Note-Taking Apps, and a News App.

💻 I have a solid foundation in C, C++, OOP, Python, Data Structures, HTML, and CSS.

🌱 I'm always excited to learn and explore new technologies!
        </Description>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/profile.php?id=61564109703678"><i className="fab fa-facebook-f"></i></SocialLink>
          <SocialLink href="https://x.com/Himansh21685821"><i className="fab fa-twitter"></i></SocialLink>
          <SocialLink href="https://www.instagram.com/___h.i.m.a.n.s.h.i_/?hl=en"><i className="fab fa-instagram"></i></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/himanshi-kashyap-6b178624a/"><i className="fab fa-linkedin-in"></i></SocialLink>
        </SocialLinks>
        <DownloadButton href="#">Download CV</DownloadButton>
      </Content>
      <ImageContainer>
        <ProfileImage src="https://img.freepik.com/premium-photo/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5511.jpg" alt="Profile" />
      </ImageContainer>
    </Container>
  );
}

export default Home;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #0B0C10;
  padding: 0 5%;
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.div`
  max-width: 600px;
`;

const GreetingText = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 10px;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const NameText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  animation: ${fadeIn} 1.4s ease-in-out;
`;

const JobTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.6s ease-in-out;

  span {
    color: #66FCF1;
    animation: ${pulse} 2s infinite;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #b3b3b3;
  animation: ${fadeIn} 1.8s ease-in-out;
`;

const SocialLinks = styled.div`
  margin-bottom: 30px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const SocialLink = styled.a`
  color: #66FCF1;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s;
  animation: ${bounce} 2s infinite;

  &:hover {
    color: #00b57f;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #66FCF1;
  color: #0b0b0b;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  animation: ${fadeIn} 2.2s ease-in-out;

  &:hover {
    background-color: #00b57f;
  }
`;

const ImageContainer = styled.div`
  background-color: #0f1624;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #66FCF1;
  animation: ${fadeIn} 2.4s ease-in-out;
`;

const ProfileImage = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #66FCF1;
  animation: ${fadeIn} 2.6s ease-in-out;
`;
