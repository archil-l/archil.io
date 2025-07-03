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

  .left-bubble {
    background-color: #e0f7fa;
    color: #006064;
    padding: 8px 12px;
    border-radius: 20px;
    margin-bottom: 8px;
    max-width: 80%;
    align-self: flex-start;
    border: 1px solid #b2ebf2;
  }

  .right-bubble {
    background-color: #eff2f5;
    color: #343a40;
    padding: 8px 12px;
    border-radius: 20px;
    margin-bottom: 8px;
    max-width: 80%;
    align-self: flex-end;
    border: 1px solid #ced4da;
  }

  strong {
    font-weight: bold;
    font-size: 0.9em;
    margin-left: 4px;
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
  .send-button {
    color: ${({ theme }) => theme.colors.sections?.['agent'].chat?.color};
    border: ${({ theme }) => theme.colors.sections?.['agent'].chat?.border};
  }
`;
