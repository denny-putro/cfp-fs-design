import Link from 'next/link';
import React from 'react';

// Prop Types
type Props = {
  title: string;
  type: 'primary' | 'secondary' | 'cta' | 'warning' | 'disabled';
  toPage?: string;
  onClick?: () => void;
  className?: string;
};

// Main Render
export default function Button(props: Props) {
  const { toPage, type, title, className, onClick } = props;

  if (toPage) {
    return (
      <Link href={toPage ?? '/'} passHref>
        <a
          className={`button button__${type} ${className}`}
          onClick={type === 'disabled' ? undefined : onClick}
        >
          {title}
        </a>
      </Link>
    );
  } else {
    return (
      <a className={`button button__${type} ${className}`} onClick={type === 'disabled' ? undefined : onClick}>
        {title}
      </a>
    );
  }
}
