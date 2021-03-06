/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Checkbox } from 'react-desktop/macOs';

class CheckBoxIndex extends Component {
  render () {
    return (
      <Checkbox
        label="Check me!"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}

export default CheckBoxIndex;
