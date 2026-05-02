<SectionHeader sectionId="projects">Projects 🪚</SectionHeader>

### Personal page AI assistant 🤖

[ask.archil.io](https://ask.archil.io) is an AI-powered personal website where visitors can chat with a Claude-powered assistant on my behalf. It can answer questions about my background, show my resume as an interactive PDF, and display an animated architecture diagram explaining how the site itself is built.

- Built with **React 19, React Router 7, Tailwind CSS 4**, and the **Anthropic SDK** (Claude Haiku 4.5) for streaming chat;
- Backend runs on **AWS Lambda** with **CloudFront, API Gateway v2, and S3**; infrastructure provisioned with **AWS CDK**;
- Auth uses short-lived **JWT tokens** + **Cloudflare Turnstile** CAPTCHA to prevent abuse without requiring a login;
- Tools are served via a custom **MCP server** ([mcp-ask-archil](https://github.com/archil-l/mcp-ask-archil)) that exposes interactive HTML apps (resume viewer, architecture diagram) rendered in sandboxed iframes;
- See the site source on [GitHub](https://github.com/archil-l/ask-archil-io).
