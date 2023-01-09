import React from 'react';
import { TextView } from './index';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { boolean, number, select, text } from '@storybook/addon-knobs';
export default {
  title: 'TextView',
};

export const WithTextView = () => <TextView>This is my test component</TextView>;
// 记录事件
export const TestAddonActions = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
// 动态修改属性
export const TestAddonKnobs = () => <TextView children={text('children', 'children_value')} />;
export const TestAddonKnobsMore = () => (
  <input
    onClick={action('onClick')}
    onFocus={action('onFocus')}
    placeholder={text('placeholder', 'placeholder_value')}
    type={select('type', { password: 'password', number: 'number', text: 'text' }, 'number')}
    disabled={boolean('disabled', false)}
    size={number('size', 24)}
  />
);
