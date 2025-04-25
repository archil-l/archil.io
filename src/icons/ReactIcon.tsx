import React from 'react';
import styled from 'styled-components';

const ReactSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    width="72"
    height="72"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="rgb(97, 218, 251)" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const LogoWrapper = styled.div``;

const ReactIcon = () => {
  return (
    <LogoWrapper>
      <ReactSvg role="presentation" aria-hidden="true" />
    </LogoWrapper>
  );
};

export default ReactIcon;
