<SectionHeader sectionId="projects">Projects 🪚</SectionHeader>

### Personal page AI assistant 🤖 (in progress)

This personal assistant will be able to interact with site visitors on my behalf and accomplish basic tasks using connected tools (e.g., sending emails and notifications). It is based on a secure, cloud-based AI agent with a custom backend designed to keep sensitive API keys protected. The solution uses an AWS-hosted API and leverages CloudFront signed cookies to reduce the risk of AI agent abuse.

- Backend infrastructure is provisioned with **AWS CDK, including Lambda functions, API Gateway, CloudFront, and Secrets Manager.**
- API access is restricted using CloudFront signed cookies, managed by a dedicated cookie signer Lambda.
- Private keys are securely stored in AWS Secrets Manager and never exposed to the frontend; automated scripts handle key generation, rotation, and deployment.
- See the backend implementation on [GitHub](https://github.com/archil-l/secure-ai-agent).
