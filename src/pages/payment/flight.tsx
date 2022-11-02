import { useState } from 'react';

import Navbar from '../../components/base/Navbar';
import Image, { ImageLoader, ImageProps } from 'next/image';
import Button from '../../components/base/Button';
import Spacer from '../../components/base/Spacer';

const myLoader: ImageLoader = ({ src }) => {
    return src;
  };

export default function Flight() {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Navbar
        title="Flight"
        link="Flight"
        src='/images/icons/back.svg'
      />
      <div className='card'>
        <Image
            loader={myLoader}
            unoptimized={true}
            onLoadingComplete={() => setLoading(false)}
            width="360"
            height="360"
            alt=""
            src='/images/flight-item.png'
            />
        <Spacer/>
        <Button title={'Search'} type={'cta'}/>
      </div>
      <div className='merchantdising'>
      <Image
            loader={myLoader}
            unoptimized={true}
            onLoadingComplete={() => setLoading(false)}
            width="420"
            height="800"
            alt=""
            src='/images/flight-merchantdising.png'
            />
      </div>  
    </>
  );
}
