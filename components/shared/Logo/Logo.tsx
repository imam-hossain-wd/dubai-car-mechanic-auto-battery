import { brandLogo } from "@/config/imageConfig"
import { SiteConfig } from "@/config/siteConfig"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label={SiteConfig.brandName}
      className="relative flex shrink-0 items-center gap-2.5"
    >
      <div className="relative flex  items-center justify-center overflow-hidden">
        <Image
          src={brandLogo?.logo}
          width={300}
          height={180}
          alt={SiteConfig.brandName}
          className=" w-full h-full object-contain"
        />
        
       {/* <div className="flex gap-1 flex-col items-start justify-center">
         <span className="text-primary text-3xl font-bold">GoBattery </span>
        <span className="text-xs">Car Repair Mobile Mechanic Dubai</span>
       </div> */}
      </div>
      {/* <div className="hidden sm:block">
        <span className="block text-sm leading-tight font-bold tracking-tight text-white">
          Dubai Mobile car
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.15em] text-primary uppercase">
          Car Repair Mechanic
        </span>
      </div> */}
    </Link>
  )
}
