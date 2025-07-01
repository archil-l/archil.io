import React, { Fragment } from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';

const Agent = (): JSX.Element => {
  useAuthCookie();
  const { sendRequest } = useAIAgent();

  return (
    <Fragment>
      <div>Agent</div>
      <button
        onClick={async () => {
          try {
            const response = await sendRequest({
              query: 'What is the weather like today?',
            });
            console.log('Response from Agentic AI:', response);
          } catch (error) {
            console.error('Error calling Agentic AI:', error);
          }
        }}
      >
        Call Agentic AI
      </button>
      <p>This is the Agent page. Click the button to interact with the AI agent.</p>
    </Fragment>
  );
};

export default Agent;
