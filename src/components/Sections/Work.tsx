import React from 'react';
import { useIntl } from 'react-intl';

import SectionWrapper, { SectionProps } from './SectionWrapper'

import messages from '../../contents/work';
import Space from '../Layout/Space';
import hrefs from '../../contents/hrefs';
import { ContributionList, WrappedImg } from '../Links/styles';

const Work = ({ $sectionid, $role, size }: SectionProps) => {
  const { formatMessage } = useIntl();
  return (
    <SectionWrapper $sectionid={$sectionid} $role={$role} size={size}>
      <Space height="7rem" />
      <h2 id={$sectionid}>{formatMessage(messages.heading)}</h2>
      <p>{formatMessage(messages.aboutPartOne)}</p>
      <WrappedImg src="https://helpv2.quickbase.com/hc/article_attachments/26567169640468" alt="New Navigation" width="300px" />
      <h3><strong>New Navigation</strong> (<a href={hrefs.newNav} target="_blank" rel="noopener noreferrer">Release Notes</a>)</h3>
      <article>Quickbase's navigation has been rebuilt from the ground up to provide a more modern and intuitive experience for users. Initial release of our new navigation re-arranges the components users use to navigate around the apps today. My contribution to this feature was as follows</article>
      <ContributionList>
        <li>Implemented accessibility features (semantic HTML, roles, keyboard navigation and screen-reader performance), ensured WCAG 2.1 compliance for a new navigation UI and its components, enhancing user experience and performance;</li>
        <li>Built components and implemented interactions for the new Report Panel;</li>
      </ContributionList>

      <WrappedImg src="https://assets.marketing.quickbase.com/product/Screenshots/_1320x935_crop_center-center_82_line/product-screenshots-reporting-and-dashboards-visualizations.png.webp" alt="New Summary Report" width="300px" />
      <h3><strong>New Summary Report</strong> (<a href={hrefs.newSummaryReport} target="_blank" rel="noopener noreferrer">Release Notes</a>)</h3>
      <article>New enhanced summary reports promise streamlined navigation, making it easier than ever to find and analyze data. Report Builder panel enables consistent interaction across various report types with our unified panel experience. I am specially proud of having completed this feature.</article>
      <ContributionList>
        <li>Led a team of four software engineering co-ops (Master's students from Northeastern University) for six months (Jan-Jun '24) to complete summary report;</li>
        <li>As part of this journey, mentored and assisted co-ops throughout their learning experience;</li>
        <li>Worked on spikes and built prototypes for new features, breaking down larger problems into smaller, manageable pieces.</li>
        <li>Performed accessibility testing and implemented semantic HTML, roles, keyboard navigation and improved screen-reader performance;</li>
      </ContributionList>

      <Space height="20rem" />
      <br />
    </SectionWrapper >);
};

export default Work;