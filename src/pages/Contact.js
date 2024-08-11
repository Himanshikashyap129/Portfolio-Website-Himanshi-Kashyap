import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0B0C10;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #1F2833; 
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  color: #66FCF1; 
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  animation: ${slideIn} 0.5s ease-in-out;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #1F2833; 
  color: #C5C6C7;   &:focus {
    outline: none;
    border-color: #66FCF1; 
  }
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 100px;
  resize: none;
  background-color: #1F2833;
  color: #C5C6C7;
  &:focus {
    outline: none;
    border-color: #66FCF1; 
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #66FCF1; 
  color: black; 
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45A29E;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 20px;
  background-color: #1F2833; 
  color: #C5C6C7; 
  font-size: 14px;
`;

const FooterItem = styled.div`
  max-width: 300px;
`;

const ContactForm = () => {
  return (
    <>
      <GlobalStyle />
      <FormContainer>
        <Title>Contact Me</Title>
        <StyledForm>
          <StyledInput type="text" placeholder="First Name" required />
          <StyledInput type="text" placeholder="Last Name" required />
          <StyledInput type="email" placeholder="Email Address" required />
          <StyledTextArea placeholder="Comments / Questions" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </StyledForm>
      </FormContainer>

      <Footer>
        <FooterItem>
          <h4>Come for a visit</h4>
          <p>Drop by my studio and let’s work on some ideas together.</p>
        </FooterItem>
        <FooterItem>
          <h4>Around the web</h4>
          <p>
            [Facebook] [Twitter] [LinkedIn] [Instagram]
          </p>
        </FooterItem>
        <FooterItem>
          <h4>Did you know?</h4>
          <p>The blue whale heart weighs 2000 lbs and can be heard shaped 2 miles away.</p>
        </FooterItem>
      </Footer>
    </>
  );
};

export default ContactForm;
