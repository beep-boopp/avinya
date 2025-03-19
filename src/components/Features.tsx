import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.05);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff 0%, #a0a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Features: React.FC = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Web3 Integration',
      description: 'Seamlessly connect with Ethereum wallets and interact with smart contracts.',
    },
    {
      icon: '🔒',
      title: 'Secure by Design',
      description: 'Built with security best practices and modern cryptographic standards.',
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with modern React practices.',
    },
    {
      icon: '🎨',
      title: 'Modern UI/UX',
      description: 'Beautiful, responsive design with smooth animations and transitions.',
    },
  ];

  return (
    <FeaturesSection>
      <SectionTitle>Features</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features; 