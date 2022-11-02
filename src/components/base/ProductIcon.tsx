import Image, { ImageLoader, ImageProps } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SkeletonLoader from './SkeletonLoader';

const myLoader: ImageLoader = ({ src }) => {
  return src;
};

type Props = {
  src: string;
  label: string;
  className?: string;
  width?: string;
  height?: string;
  objectFit?: ImageProps['objectFit'];
  toPage?: string;
};

export default function ProductIcon(props: Props) {
  const { src, label, className, width, height, objectFit, toPage } = props;
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Link href={toPage ?? '/'} toPage>
      <div
        className={className ? className : 'productIcon'}
        style={{
          width: width ? width : '80px',
          height: height ? height : '80px',
        }}
      >
        {loading && <SkeletonLoader />}
        <Image
          loader={myLoader}
          unoptimized={true}
          onLoadingComplete={() => setLoading(false)}
          width="40px"
          height="40px"
          alt=""
          src={src}
        />
        <span>  
            {label}
        </span>
      </div>
    </Link>
  );
}
