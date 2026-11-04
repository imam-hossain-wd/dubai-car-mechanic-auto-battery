import Hero from '@/components/view/Hero/hero'
import { Maps } from '@/components/view/Maps/Maps'
import ServiceAreas from '@/components/view/ServiceAreas/ServiceAreas'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <ServiceAreas />
        <WhoWeAre />
        <WhyChooseUs />
        <Maps />
    </div>
  )
}
