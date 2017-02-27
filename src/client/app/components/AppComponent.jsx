import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import SongComponent from './SongComponent.jsx';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <AwesomeComponent />
        <SongComponent />
      </div>
    );
  }
}


export default AppComponent;
