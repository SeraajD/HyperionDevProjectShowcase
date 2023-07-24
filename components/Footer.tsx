import React from 'react'
import Image from "next/image";
import FooterColumn from './FooterColumn';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
        <Image
            src="/logo2.svg"
            width={150}
            height={35}
            alt='HyperionDev Logo'
          />
          <p className='text-white'>Project Showcase</p>
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>HyperionDev Project Showcase is a community of projects created by our academic staff and students</p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map(footerLink => (
            <FooterColumn title={footerLink.title} links={footerLink.links} key={footerLink.title} />
          ))}
        </div>

        <div className="flexBetween footer_copyright">
            <p className='font-normal text-[#1A476B]'>@2023 HyperionDev. All rights reserved</p>
            <p className=" text-light-white-500">
              <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer