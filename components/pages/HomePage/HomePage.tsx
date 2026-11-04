import Hero from '@/components/view/Hero/hero'
import ServiceAreas from '@/components/view/ServiceAreas/ServiceAreas'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import React from 'react'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <ServiceAreas />
        <WhoWeAre />
    </div>
  )
}
