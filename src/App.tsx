import React from 'react';
import { Alert } from './components/Alert';
import { Menu, MenuItem } from './components';
import './styles/index.scss';
const App = () => {
  return (
    <div>
      App
      <Alert type="primary" title="title" description="description" closeable />
      <Menu
        onSelect={index => {
          console.log(`clicked ${index} item`);
        }}
      >
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
      </Menu>
    </div>
  );
};
export default App;
