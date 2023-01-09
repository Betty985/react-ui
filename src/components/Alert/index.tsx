import React, { ReactNode, FC, useState} from 'react';
import classnames from 'classnames';
import './index.scss';
export interface AlertProps {
  /** 标题 */
  title?: string;
  /** 内容 */
  description?: ReactNode;
  /** 类型 */
  type: 'success' | 'primary' | 'warning' | 'danger' | 'default';
  /** 默认不显示关闭按钮 */
  closeable?: boolean;
  /** 关闭icon */
  closeIcon?: ReactNode;
  /** 关闭时触发的回调函数 */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
const Alert: FC<AlertProps> = props => {
  const { title, description, closeIcon = 'X', type, onClose, closeable = false } = props;
  const [visible, setVisible] = useState(true);
  const classes = classnames('alert', { [`alert-${type}`]: true });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(false);
    onClose?.(e);
  };
  return (
    <>
      {visible && (
        <div className={classes}>
          {title && <p className="alert-title">{title}</p>}
          {description && <p className="alert-description">{description}</p>}
          {closeable && <button className='alert-close' onClick={handleClick}>{closeIcon}</button>}
        </div>
      )}
    </>
  );
};
export { Alert };
