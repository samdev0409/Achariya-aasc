import React from 'react'
import campus from '@/assets/images/aasc_building.webp';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

const Cafeteria = () => {
  return (
    <div>
        <BannerAndBreadCrumb img={campus} title='Academic Calendar'/>
    </div>
  )
}

export default Cafeteria