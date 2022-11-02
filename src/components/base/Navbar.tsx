import React from "react";

import Image, { ImageLoader, ImageProps } from 'next/image';

type Props = {
    title:string,
    link:string,
    src: string;
}

const myLoader: ImageLoader = ({ src }) => {
    return src;
  };

export default function Navbar ({ title,link, src }:Props){
    return(
        <div className="Navbar">
            <Image
                loader={myLoader}
                unoptimized={true}
                alt=""
                width={24}
                height={24}
                src={src}
            />
            {title}
        </div>
    );
    
}