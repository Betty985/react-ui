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
          // console.log(`clicked ${index} item`);
        }}
      >
        <MenuItem index="1">一You can now view my-react-ui in the browser.</MenuItem>
        <SubMenu index="2" title="二">
          <MenuItem index="2-1">下拉选项一</MenuItem>
          <SubMenu index="2-2" title="下拉选项iii二">
            <MenuItem index="2-2-1">下拉选项一</MenuItem>
            <MenuItem index="2-2-2">下拉选项二</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};
export default App;
