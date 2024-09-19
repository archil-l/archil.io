import React from 'react';

import Welcome from '../Sections/Welcome';
import Work from '../Sections/Work';
import Divider from '../Layout/Divider';

const Main = () => {
  return (
    <React.Fragment>
      <Welcome $sectionid="welcome" $role="main" />
      <Divider />
      <Work $sectionid="work" size="eight" />
    </React.Fragment>
  );
}

export default Main;
