import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const TrustScores = () => {
  return (
    <Section>
      <Title>Trust Scores</Title>
    </Section>
  );
};

export default TrustScores; 