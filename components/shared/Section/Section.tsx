import React from "react";
import cx from 'classnames';

export enum SectionDirections {
  Row = 'flex flex-row',
  Col = 'flex flex-col',
}

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  direction?: SectionDirections
  isMobile?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  isMobile,
  direction = SectionDirections.Col,
}) => (
  <section className={cx(
    className,
    "mx-auto",
    isMobile ? 'container' : 'lg:container min-w-[1024px]',
    direction
  )}>
    {children}
  </section>
)
