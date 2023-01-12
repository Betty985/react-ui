import React, { FC } from 'react';
import './index.css';
type TreeNode = {
  title: string;
  children?: TreeNode[];
};
export interface TreeProps {
  treeData: TreeNode[];
}
const Node: FC<{ data: TreeNode[]; depth: number }> = props => {
  const { data, depth } = props;
  return (
    <>
      {data.map(item => {
        if (Array.isArray(item.children)) {
          return (
            <>
              <p>{depth}</p>
              <p>{item.title}</p>
              <Node data={item.children} depth={depth + 1} />
            </>
          );
        } else {
          return (
            <>
              <p>{depth}</p>
              <p>{item.title}</p>
            </>
          );
        }
      })}
    </>
  );
};

const Tree: FC<TreeProps> = props => {
  const { treeData } = props;
  return (
    <div className="Tree">
      <Node data={treeData} depth={0} />
    </div>
  );
};
export { Tree };
