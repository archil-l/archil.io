import styled from 'styled-components';

export const StyledChatWrapper = styled.div`
  border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
  border-radius: 4px;
  padding: 16px;
  min-height: 100px;
  background: ${({ theme }) => theme.colors.sections?.['agent'].chat?.backgroundColor};
  transition: background-color 2s ease;
  margin-bottom: 16px;
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 300px;
  display: flex;
  flex-direction: column;

  .bubble {
    padding: 8px 16px;
    border-radius: 20px;
    margin-bottom: 8px;
    max-width: 60%;
  }

  .assistant-bubble {
    align-self: flex-end;
    background-color: ${({ theme }) =>
      theme.colors.sections?.['agent'].chat?.assistantBubble?.backgroundColor};
    color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.assistantBubble?.color};
    transition: ${({ theme }) =>
      theme.colors.sections?.['agent'].chat?.assistantBubble?.transition};
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.assistantBubble?.border};
    box-shadow: ${({ theme }) => theme.colors.sections?.['agent'].chat?.assistantBubble?.boxShadow};
  }

  .user-bubble {
    align-self: flex-start;
    background-color: ${({ theme }) =>
      theme.colors.sections?.['agent'].chat?.userBubble?.backgroundColor};
    color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.color};
    transition: ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.transition};
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.border};
    box-shadow: ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.boxShadow};
  }

  strong {
    font-weight: bold;
    font-size: 0.9em;
  }

  sub {
    font-size: 0.7em;
    opacity: 0.7;
    display: float;
    float: right;
    margin-right: 2px;
    margin-left: 8px;
    margin-top: 8px;
  }
`;

export const StyledUsernameInputWrapper = styled.div`
  margin-bottom: 16px;
  input {
    background-color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.backgroundColor};
    margin-right: 8px;
    padding: 8px;
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
    transition: ${({ theme }) => theme.colors.sections?.['agent'].chat?.transition};
    border-radius: 4px;
    font-size: 16px;
    width: 200px;
    color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.color};
  }

  span {
    color: #888;
    font-size: 14px;
  }
`;

export const StyledChatInputWrapper = styled.div`
  display: flex;
  gap: 8px;

  .chat-input {
    flex: 1;
    padding: 8px;
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
    border-radius: 4px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.backgroundColor};
    transition: ${({ theme }) => theme.colors.sections?.['agent'].chat?.transition};
  }
  .send-button,
  .new-chat {
    color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.assistantBubble?.color};
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
    background-color: ${({ theme }) => theme.colors.header?.backgroundColor};

    &:focus,
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.sections?.['agent'].chat?.userBubble?.backgroundColor};
      color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.color};
      border: 1px solid ${({ theme }) => theme.colors.sections?.['agent'].chat?.userBubble?.color};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.backgroundColor};
      color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.color};
      border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
      cursor: not-allowed;
    }
  }
`;
