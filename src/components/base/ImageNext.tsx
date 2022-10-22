import Image, { ImageLoader, ImageProps } from 'next/image';
import { useState } from 'react';

import SkeletonLoader from './SkeletonLoader';

const myLoader: ImageLoader = ({ src }) => {
  return src;
};

type Props = {
  src: string;
  className?: string;
  width?: string;
  height?: string;
  objectFit?: ImageProps['objectFit'];
};

export default function ImageNext(props: Props) {
  const { src, className, width, height, objectFit } = props;
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div
        className="image"
        style={{
          width: width ? width : '100px',
          height: height ? height : '100px',
        }}
      >
        {loading && <SkeletonLoader />}
        <Image
          loader={myLoader}
          unoptimized={true}
          onLoadingComplete={() => setLoading(false)}
          layout="fill"
          objectFit={objectFit ? objectFit : 'contain'}
          alt=""
          src={src}
          className={className}
        />
      </div>
    </>
  );
}
