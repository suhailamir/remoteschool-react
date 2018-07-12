import React from 'react';
import Button from '@material-ui/core/Button';

// import img from '../assets/images/react_logo_512x512.png';


const App = () => {
  return (
    <div>
      <h2 id="heading">Hello ReactJS</h2>
      {/* <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      /> */}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
