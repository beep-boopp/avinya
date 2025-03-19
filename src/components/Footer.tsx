import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Web3 Template. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </SocialLink>
          <SocialLink href="https://discord.com" target="_blank" rel="noopener noreferrer">
            Discord
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; 