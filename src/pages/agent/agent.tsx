import React, { Fragment } from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import Container from '../../components/layout/container';

const Agent = (): JSX.Element => {
  useAuthCookie();
  const { sendRequest } = useAIAgent();

  const handleAIRequest = async () => {
    try {
      const response = await sendRequest({
        query: 'What is the weather like today?',
      });
      console.log('Response from Agentic AI:', response);
    } catch (error) {
      console.error('Error calling Agentic AI:', error);
    }
  };

  return (
    <Fragment>
      <Container>
        <h1>Agent</h1>
        <button onClick={handleAIRequest}>Call Agentic AI</button>
        <p>This is the Agent page. Click the button to interact with the AI agent.</p>
      </Container>
    </Fragment>
  );
};

export default Agent;
