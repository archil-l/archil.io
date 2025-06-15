import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  children: string;
  components?: Components;
}

const Markdown = ({ children, components }: MarkdownProps): JSX.Element => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
    {children}
  </ReactMarkdown>
);

export default Markdown;
