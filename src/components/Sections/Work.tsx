import React from 'react';
import { useIntl } from 'react-intl';

import SectionWrapper, { SectionProps } from './SectionWrapper';

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
      <p>
        {formatMessage(messages.aboutPartOne)}
        <a href={hrefs.robotics} target="_blank" rel="noopener noreferrer">
          (see Amazon Robotics)
        </a>
        {formatMessage(messages.aboutPartTwo)}
      </p>
      <h3>
        <strong>Quickbase's Navigation</strong> (
        <a href={hrefs.newNav} target="_blank" rel="noopener noreferrer">
          Release Notes
        </a>
        )
      </h3>
      <WrappedImg
        src="https://helpv2.quickbase.com/hc/article_attachments/30267023632788"
        alt="New Navigation"
        width="300px"
      />
      <article>
        Rolled out in 2024, Quickbase's navigation has been rebuilt from the ground up to provide a
        more modern and intuitive experience for users. My contribution to this feature was as
        follows:
      </article>
      <ContributionList>
        <li>
          Implemented accessibility features (semantic HTML, roles, keyboard navigation and
          screen-reader performance), ensured WCAG 2.1 compliance for a new navigation UI and its
          components, enhancing user experience and performance;
        </li>
        <li>Built components and implemented interactions for the new Reports Panel;</li>
      </ContributionList>
      <br />
      <h3>
        <strong>Quickbase's Summary Report</strong> (
        <a href={hrefs.newSummaryReport} target="_blank" rel="noopener noreferrer">
          Release Notes
        </a>
        )
      </h3>
      <WrappedImg
        src="https://assets.marketing.quickbase.com/product/Screenshots/_1320x935_crop_center-center_82_line/product-screenshots-reporting-and-dashboards-visualizations.png.webp"
        alt="New Summary Report"
        width="300px"
      />
      <article>
        New enhanced summary reports offered streamlined navigation, making it easier than ever to
        find and analyze data. Report Builder Panel enabled consistent interaction across various
        report types with our unified panel experience. I am specially proud of having completed
        this feature with my own team.
      </article>
      <ContributionList>
        <li>
          Led a team of four software engineering co-ops (Master's students from Northeastern
          University) for six months (Jan-Jun '24) to complete summary report;
        </li>
        <li>
          As part of this journey, mentored and assisted co-ops throughout their learning
          experience;
        </li>
        <li>
          Worked on spikes and built prototypes for new features, breaking down larger problems into
          smaller, manageable pieces.
        </li>
        <li>
          Performed accessibility testing and implemented semantic HTML, roles, keyboard navigation
          and improved screen-reader performance;
        </li>
      </ContributionList>
      <br />
      <h3>
        <strong>Quickbase's Forms Experience</strong> (
        <a href={hrefs.newFormsExperience} target="_blank" rel="noopener noreferrer">
          Release Notes
        </a>
        )
      </h3>
      <WrappedImg
        src="https://helpv2.quickbase.com/hc/article_attachments/27269565298196"
        alt="New Forms Experience"
        width="400px"
      />
      <article>
        New forms were released in 2023 and offered form builders a drag-and-drop WYSIWYG experience
        when designing forms. I personally built and refined more than dozen field components and
        embeded existing reports into the new form experience. These are my contributions
      </article>
      <ContributionList>
        <li>
          Built and improved 10+ field components for the new forms. Dealt with numbers, decimals,
          strings, dates as well as more complex types like users and file attachments;
        </li>
        <li>Developed reusable components across several internal libraries;</li>
        <li>Improved backend APIs (using C++ & Java) to support new field components.</li>
        <li>Performed accessibility testing and improved screen-reader performance;</li>
      </ContributionList>
      <br />
      <h3>
        <strong>Quickbase's Calendar Dashboard Widget</strong> (
        <a href={hrefs.newDashboardWidget} target="_blank" rel="noopener noreferrer">
          Release Notes
        </a>
        )
      </h3>
      <WrappedImg
        src="https://helpv2.quickbase.com/hc/article_attachments/4522850223380/jan.image.1.png"
        alt="New Dashboard Widget"
      />
      <article>
        Released in 2022, calendar report for the new dashboards offered new look and feel, making
        them more vibrant and easier to resize. Supported views to see a single day, week, or month,
        as well as drag and drop of events on the calendar to update start or end dates. I
        contributed to this feature by building the calendar report component and improving backend
        APIs. Here are my contributions:
      </article>

      <ContributionList>
        <li>
          Built the component and improved behavior under different use-case (timezones, updates);
        </li>
        <li>Improved backend APIs (using C++ and Java) to support the new component.</li>
        <li>
          Implemented unit and integration tests using Jest and TestNG (with Java) for all new
          capabilities;
        </li>
      </ContributionList>

      <Space height="10rem" />
      <br />
    </SectionWrapper>
  );
};

export default Work;
