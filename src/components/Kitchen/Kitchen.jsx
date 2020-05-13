import React from 'react';

import Oven from './Oven';
import Sink from './Sink';

const Kitchen = (props) => (
  <div className="component Kitchen">
    <div className="appliances">
      <Oven />
      <Sink />
    </div>
    Kitchen
  </div>
);

export default Kitchen;