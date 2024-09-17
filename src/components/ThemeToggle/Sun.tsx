import React from 'react';
import styled from 'styled-components';
import { IconProps } from '../../icons/types';
import { JSX } from 'react/jsx-runtime';

const SunSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" fill="currentColor" {...props}>
    <polygon fill="#F8A805" points="420,210 375.774,247.857 399.238,301.145 342.926,315.986 340.945,374.184 283.764,363.211 
		256.724,414.779 210,380 163.276,414.779 136.236,363.211 79.055,374.184 77.073,315.986 20.762,301.144 44.226,247.858 0,210 
		44.226,172.143 20.762,118.855 77.074,104.014 79.055,45.816 136.236,56.789 163.276,5.221 210,40 256.723,5.221 283.764,56.789 
		340.945,45.816 342.927,104.014 399.238,118.856 375.774,172.142 	"/>
    <circle fill="#F8A805" cx="210" cy="210" r="140" />
  </svg>);

const LogoWrapper = styled.div<IconProps>`
  ${({ $placement }) => {

    if ($placement === 'onHandle')
      return 'width:22px; height:22px;';

    if ($placement === 'offHandle')
      return 'width:22px; height:24px;';
  }}

    display: flex;
    justify-content: center;
    align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Sun = ({ $placement }: IconProps) => {
  return (
    <LogoWrapper $placement={$placement}>
      <SunSvg aria-hidden="true" />
    </LogoWrapper>
  );
}


export default Sun;