import Link from 'next/link';
import React from 'react';

import ImageNext from '../base/ImageNext';

type Props = {
  isNotice: boolean;
  isBack: boolean;
  isClose: boolean;
  isWhite: boolean;
  backUrl: string;
  step: number;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const NavBar = (props: Props) => {
  const {
    isNotice,
    isBack,
    isClose,
    isWhite,
    backUrl,
    onClose,
    step,
    children,
  } = props;

  const showClose = isClose !== undefined ? isClose : true;
  const stepProgress = `${(step / 9) * 100}%`;

  const stepBar = (
    <div className="navbar__step-bar" style={{ width: stepProgress }}></div>
  );

  const closeRender = () => {
    if (showClose) {
      if (onClose) {
        return (
          <a onClick={onClose}>
            <ImageNext src="/images/icons/close.svg" />
          </a>
        );
      } else {
        return (
          <Link href="./user-identity-trust/home">
            <ImageNext src="/images/icons/close.svg" />
          </Link>
        );
      }
    }
  };

  return (
    <div
      className={`navbar ${isNotice && 'navbar__padding'} ${
        isWhite && 'navbar__white'
      }`}
    >
      {/* Title Section */}
      <div className="navbar__header">
        {isBack && (
          <Link href={backUrl}>
            <ImageNext src="/images/icons/back.svg" />
          </Link>
        )}
        <p className="text-title2">{children}</p>
        {closeRender()}
      </div>

      {/* Step Section */}
      {step && (
        <div className="navbar__step">
          <div className="navbar__step-background">{stepBar}</div>
          <p className="text-captionTiny">Step {step} of 9</p>
        </div>
      )}

      {/* Notice Section */}
      {isNotice && (
        <div className={`navbar__notice`}>
          <ImageNext src="/images/icons/lock.svg" />
          <p className="text-uiTiny">
            All details are encrypted to protect your privacy.
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
