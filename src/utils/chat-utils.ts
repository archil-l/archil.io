import { ChatMessage } from '../hooks/use-chat';

/**
 * Formats a timestamp to a short, human-readable time (e.g., 14:05).
 */
function formatShortTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/**
 * Formats chat messages to a markdown string with alignment and short timestamp.
 * Assistant messages are left-aligned, user messages are right-aligned.
 * Messages are sorted by timestamp ascending.
 */
export function formatChatMessages(messages: ChatMessage[]): string {
  return messages
    .slice()
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(msg => {
      const time = formatShortTime(msg.timestamp);
      const formattedMsg = `<sub>${time}</sub>\n<strong>${msg.user.name}</strong>: ${msg.content}`;
      const className = msg.user.id === 'assistant' ? 'left-bubble' : 'right-bubble';
      return `<div class="${className}">${formattedMsg}</div>`;
    })
    .join('');
}
