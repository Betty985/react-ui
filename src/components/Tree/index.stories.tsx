import React from 'react';
import { Tree } from './index';

export default {
  title: 'Tree',
};
const data = [
  {
    title: 'a',
    children: [{ title: 'aa', children: [{ title: 'aaa' }] }],
  },
  {
    title: 'b',
    children: [{ title: 'bb', children: [{ title: 'bbb' }] }],
  },
];
export const WithTree = () => <Tree treeData={data} />;
