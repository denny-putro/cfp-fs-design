import { useAtom } from 'jotai';
import React, { useContext } from 'react';

import Button from '../../components/base/Button';
import ImageNext from '../../components/base/ImageNext';
import useHasMounted from '../../hooks/useHasMounted';
import userIdentityAtom from '../../stores/user-identity';

// Main Render
const HomePage = () => {
  const hasMounted = useHasMounted();
  const [userIdentityState, setUserIdentityState] = useAtom(userIdentityAtom);

  const savedUntilPage = userIdentityState.savedUntilPage;

  const renderImage = () => {
    if (savedUntilPage > 0) {
      return <ImageNext src="/images/icons/board.svg" />;
    } else {
      return <ImageNext src="/images/icons/mf.svg" />;
    }
  };

  return (
    <>
      {/* <NavBar isWhite>Gold</NavBar> */}
      <div className="home__content">
        <div className="home__bg">
          <ImageNext src="/images/homeBg.png" width="420px" height="180px" />
        </div>

        {/* Top */}
        <div className="home__top">
          <p
            className={`text-title2 ${
              savedUntilPage === 0 && 'home__top__hide'
            }`}
          >
            Hi, Rama!
          </p>

          <div className="home__hero">
            <div className="home__row">
              <div>
                <p className="text-uiBaseline extra">
                  {savedUntilPage > 0
                    ? "We're almost there! Complete your data verification to start saving."
                    : 'Start saving in Gold now!'}
                </p>
                {savedUntilPage === 0 && (
                  <p className="text-uiSmall home__row__subtitle">
                    Easy and affordable, starts from Rp 10.000!{' '}
                  </p>
                )}
              </div>

              {renderImage()}
            </div>

            <div className="home__row">
              <Button
                type="cta"
                toPage={
                  savedUntilPage > 0 ? '../save-for-later' : '../onboarding'
                }
                title={
                  savedUntilPage > 0
                    ? 'Continue Verification'
                    : "Let's Get Started!"
                }
              />

              <div>
                <p className="text-captionMicro">Powered By</p>
                <ImageNext
                  src="/images/pegadaian.png"
                  className="home__pegadaian"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="home__card">
          <ImageNext src="/images/icons/wealth.svg" />
          <div className="home__card__subtitle">
            <p className="text-title2">Price Monitor</p>
            <p className="text-uiSmall">Tap here for Gold price update</p>
          </div>
          <ImageNext src="/images/icons/chevronRight.svg" />
        </div>

        <div className="home__card">
          <ImageNext src="/images/icons/infoColor.svg" />
          <div className="home__card__subtitle">
            <p className="text-title2">Why investing in Gold?</p>
            <p className="text-uiSmall">Learn more before you start</p>
          </div>
          <ImageNext src="/images/icons/chevronRight.svg" />
        </div>

        {/* Article */}
        <div className="home__articles">
          <p className="text-title2">Dig Deeper Into Gold</p>
          <div className="home__articles__row">
            <div className="home__article">
              <p className="text-title2">What&apos;s the Benefit of Gold?</p>
            </div>
            <div className="home__article">
              <p className="text-title2">What&apos;s the Benefit of Gold?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
