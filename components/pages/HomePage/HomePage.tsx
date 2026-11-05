import { FeaturedServices } from '@/components/view/FeaturedServices/FeaturedServices';
import Hero from '@/components/view/Hero/hero'
import { Maps } from '@/components/view/Maps/Maps';
import Reviews from '@/components/view/Reviews/Reviews';
import ServiceAreas from '@/components/view/ServiceAreas/ServiceAreas'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <FeaturedServices />
        <ServiceAreas />
        <WhoWeAre />
        <WhyChooseUs />
        <Maps />
        <Reviews />
    </div>
  )
}
