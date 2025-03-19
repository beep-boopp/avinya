import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(42, 68, 148, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2a4494;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #4a6491;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2a4494;
  }
`;

const ConnectButton = styled.button`
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 2rem;

  &:hover {
    background: linear-gradient(135deg, #1a3484 0%, #5b7cef 100%);
    transform: translateY(-1px);
  }
`;

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

const Navbar: React.FC = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  return (
    <NavbarWrapper>
      <Logo to="/">Web3 Template</Logo>
      <NavLinks>
        <NavLink to="/about">Trust Scores</NavLink>
        <NavLink to="/how-it-works">Create Post</NavLink>
        <NavLink to="/join">Blockchain Record</NavLink>
        <ConnectButton onClick={active ? deactivate : connect}>
          {active ? `Connected: ${account?.substring(0, 6)}...${account?.substring(38)}` : 'Connect Wallet'}
        </ConnectButton>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar; 