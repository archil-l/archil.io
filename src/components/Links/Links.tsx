import React from 'react';

import LogoWithLink from './LogoWithLink';

import GitHub from './logos/GitHub';
import LinkedIn from './logos/LinkedIn';

import hrefs from '../../contents/hrefs';
import messages from '../../contents/links';
import { LinkContainer } from './styles';


const GitHubLink = () =>
    <LogoWithLink Logo={GitHub} href={hrefs.github} message={messages.github} />;

const LinkedInLink = () =>
    <LogoWithLink Logo={LinkedIn} href={hrefs.linkedin} message={messages.linkedin} />;

const Links = () => {
    return (
        <LinkContainer>
            <GitHubLink />
            <LinkedInLink />
        </LinkContainer>
    );
}

export default Links;