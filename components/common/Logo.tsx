import { logo } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}
const Logo: React.FC<Props> = ({ width, height }) => {
  return (
    <div className={`flex items-center  gap-2 `}>
      <Image width={width} height={height} src={logo} alt="edward_logo" />
      <span className={` text-base  font-bold lg:text-[2em]`}>Edward</span>
    </div>
  );
};

export default Logo;
