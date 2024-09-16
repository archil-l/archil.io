import React from 'react';
import Switch from 'react-switch';

import { ColorSchemeContext } from '../../context/ColorSchemeContext';

import Moon from './Moon';
import Sun from './Sun';

const ThemeToggle = () => {
  const { appearance, toggleTheme } = React.useContext(ColorSchemeContext);

  const handleSwitch = () => {
    toggleTheme();
  }

  return (
    <Switch onChange={handleSwitch}
      checked={appearance === 'dark'}
      onColor={'#f8f9fa'}
      offColor={'#343a40'}
      onHandleColor={'#343a40'}
      offHandleColor={'#f8f9fa'}
      checkedHandleIcon={<Moon placement='onHandle' />}
      uncheckedHandleIcon={<Sun placement='onHandle' />}
      uncheckedIcon={<Moon placement='offHandle' />}
      checkedIcon={<Sun placement='offHandle' />}
      handleDiameter={22}
      height={24}
      width={42}
      borderRadius={12}
    />
  );
}

export default ThemeToggle;