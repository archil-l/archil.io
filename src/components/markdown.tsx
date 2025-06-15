import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  children: string;
  components?: Components;
}

const Markdown: React.FC<MarkdownProps> = ({ children, components }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
    {children}
  </ReactMarkdown>
);

export default Markdown;
