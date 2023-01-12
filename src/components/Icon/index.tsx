import React, { FC, ReactNode } from 'react';
import { svgBaseProps } from './const';
export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface IconProps {
  compoment?:
    | React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>
    | React.ForwardRefExoticComponent<CustomIconComponentProps>;
  rotate?: number;
  viewBox?: string;
  children?: ReactNode;
  className?: string;
}

const Icon: FC<IconProps> = props => {
  const { compoment: Compoment, className, rotate, viewBox, children, ...restProps } = props;
  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;
  const svgProps: CustomIconComponentProps = {
    ...svgBaseProps,
    style: svgStyle,
    viewBox,
  };

  //  component > children
  const renderNode = () => {
    if (Compoment) {
      return <Compoment {...svgProps}>{children}</Compoment>;
    }
    if (children) {
      return (
        <svg {...svgProps} viewBox={viewBox}>
          {children}
        </svg>
      );
    }
    return null;
  };
  return (
    <span role="img" className={className} {...restProps}>
      {renderNode()}
    </span>
  );
};
Icon.displayName = 'Icon';
export { Icon };
