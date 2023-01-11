import React from 'react';
import { Alert } from './components/Alert';
import { Menu, MenuItem, SubMenu } from './components';
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
        <SubMenu title="下拉选项">
          <MenuItem>下拉选项一</MenuItem>
          <MenuItem>下拉选项二</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};
export default App;
