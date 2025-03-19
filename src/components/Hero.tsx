import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #a0a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Welcome to Web3 Template</Title>
        <Subtitle>
          Experience the future of decentralized applications with our modern Web3 template.
          Built with React and Ethereum, this template provides everything you need to start
          your Web3 journey.
        </Subtitle>
        <CTAButton>Explore Features</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 