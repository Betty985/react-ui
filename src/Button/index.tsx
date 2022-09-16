import React from 'react';
import './index.css';
export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';

export type ButtonShape = 'default' | 'circle' | 'round';

export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export type LegacyButtonType = ButtonType | 'danger';

export type SizeType = 'large' | 'middle' | 'small';

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    type = 'default',
    danger,
    shape = 'default',
    size,
    disabled,
    className,
    children,
    icon,
    ghost = false,
    htmlType = 'button' as ButtonProps['htmlType'],
    ...rest
  } = props;
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    const { onClick } = props;
    e.preventDefault();
    (onClick as React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>)?.(e);
  };
  return (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={className}
      disabled={disabled}
      onClick={handleClick}
      ref={buttonRef}
    >
      {children}
    </button>
  );
};

const Button = ({ children }) => {
  return <div className="Button">{children}</div>;
};
export { Button };
