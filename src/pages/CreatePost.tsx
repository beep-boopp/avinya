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
`;

const Button = styled.button`
  background: linear-gradient(135deg, #2a4494 0%, #6b8cff 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
`;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { active } = useWeb3React();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
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
        />
        <TextArea
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" disabled={!active}>
          Create Post
        </Button>
      </Form>
    </Section>
  );
};

export default CreatePost; 