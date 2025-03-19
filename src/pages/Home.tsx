import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  padding: 4rem 2rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #4a6491;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 1.5rem;
  max-width: 1000px;
  margin: -2rem auto 0;
  position: relative;
  z-index: 1;
`;

const Card = styled(Link)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: #2a4494;
  box-shadow: 0 4px 6px rgba(42, 68, 148, 0.1);
  transition: all 0.3s ease;
  text-align: left;
  border: 1px solid rgba(107, 140, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 1);
    border-color: rgba(107, 140, 255, 0.4);
    box-shadow: 0 6px 12px rgba(42, 68, 148, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardText = styled.p`
  color: #4a6491;
  line-height: 1.4;
  font-size: 1rem;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <Title>Welcome to Web3 Template</Title>
        <Text>
          Experience the future of decentralized applications with our modern Web3 template.
          Built with React and Ethereum, this template provides everything you need to start
          your Web3 journey.
        </Text>
      </HeroSection>
      <CardsContainer>
        <Card to="/about">
          <CardTitle>Trust Scores</CardTitle>
          <CardText>
            Discover how our trust scoring system helps ensure reliability and security
            in decentralized transactions and interactions.
          </CardText>
        </Card>
        <Card to="/how-it-works">
          <CardTitle>Create Post</CardTitle>
          <CardText>
            Share your thoughts and ideas with the community through blockchain-powered
            posts that are secure, transparent, and immutable.
          </CardText>
        </Card>
        <Card to="/join">
          <CardTitle>Blockchain Record</CardTitle>
          <CardText>
            Access and verify immutable blockchain records of all transactions and 
            interactions, ensuring complete transparency and traceability.
          </CardText>
        </Card>
      </CardsContainer>
    </>
  );
};

export default Home; 