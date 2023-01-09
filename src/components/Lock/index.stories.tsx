import React from 'react';
import { Lock, LockType } from './index';

export default {
  title: 'Lock',
};

export const WithLock = () => (
  <>
    <p>有权限</p>
    <Lock
      type={LockType.PAGE}
      permissionCheck={async () => {
        let res = true;
        return res;
      }}
      ERROR_403={
        <p>403 Forbidden代表客户端错误，指的是服务器端有能力处理该请求码，但拒绝有授权访问</p>
      }
    >
      <h1>page 1</h1>
    </Lock>
    <p>没有权限</p>
    <Lock
      type={LockType.PAGE}
      permissionCheck={async () => {
        let res = false;
        return res;
      }}
      ERROR_403={
        <p>403 Forbidden代表客户端错误，指的是服务器端有能力处理该请求码，但拒绝有授权访问</p>
      }
    >
      <h1>page 1</h1>
    </Lock>
  </>
);
