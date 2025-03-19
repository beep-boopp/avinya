import React, { useState } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(42, 68, 148, 0.1);
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(42, 68, 148, 0.2);
  background: white;
  color: #2a4494;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6b8cff;
    box-shadow: 0 0 0 2px rgba(107, 140, 255, 0.2);
  }

  &::placeholder {
    color: #4a6491;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(42, 68, 148, 0.2);
  background: white;
  color: #2a4494;
  font-size: 1rem;
  min-height: 200px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6b8cff;
    box-shadow: 0 0 0 2px rgba(107, 140, 255, 0.2);
  }

  &::placeholder {
    color: #4a6491;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #1a3484 0%, #5b7cef 100%);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: #00c853;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { active, account } = useWeb3React();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!active) {
      setError('Please connect your wallet first');
      return;
    }

    if (!title.trim() || !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically interact with your smart contract
      // For now, we'll just simulate a success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Post created successfully!');
      setTitle('');
      setContent('');
    } catch (err) {
      setError('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <Title>Create Post</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting}
        />
        <TextArea
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isSubmitting}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <Button type="submit" disabled={isSubmitting || !active}>
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </Button>
      </Form>
    </Section>
  );
};

export default CreatePost; 