import { useAtom } from 'jotai';

import Input from '../../components/base/Input';
import Spacer from '../../components/base/Spacer';
import ImageNext from '../../components/base/ImageNext';
import ProductIcon from '../../components/base/ProductIcon';

export default function Home() {

  return (
    <>
      <ImageNext 
        src="/images/merchandising-top.png" 
        width="100%"
        height="123px"
      />
      <Spacer/>
      <div className='productSection'>
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
            toPage="/payment/flight"
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
        <ProductIcon
            src="/images/product-flight.svg" 
            label='Flight'
        />
      </div>
      <ImageNext 
        src="/images/merchandising.png" 
        width="100%"
        height="684px"
      />
    </>
  );
}
