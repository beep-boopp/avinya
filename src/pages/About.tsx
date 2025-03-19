import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fff 0%, #a0a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <Section>
      <Title>About</Title>
      <Text>
        Our Web3 template is designed to help developers quickly build decentralized
        applications with modern best practices. We combine the power of React with
        Ethereum blockchain technology to create seamless Web3 experiences.
      </Text>
      <Text>
        Built with TypeScript and styled-components, this template offers a robust
        foundation for your next blockchain project with features like wallet
        integration, smart contract interaction, and responsive design.
      </Text>
    </Section>
  );
};

export default About; 