import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlockchainRecord from './pages/BlockchainRecord';
import CreatePost from './pages/HowItWorks';
import TrustScores from './pages/TrustScores';
// import TrustScores from './pages/TrustScores';
// import CreatePost from './pages/CreatePost'; 
// import BlockchainRecord from './pages/BlockchainRecord';

const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f0ff 0%, #ffffff 100%);
  color: #2a4494;
`;

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<TrustScores />} />
            <Route path="/how-it-works" element={<CreatePost />} />
            <Route path="/join" element={<BlockchainRecord />} />
          </Routes>
        </AppWrapper>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;
