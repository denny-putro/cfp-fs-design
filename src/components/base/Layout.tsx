import React from 'react';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const fixViewPortIssueOnMobile = () => {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};

export default function Layout({ className, children }: Props) {
  fixViewPortIssueOnMobile();
  return <div className={`layout ${className}`}>{children}</div>;
}
