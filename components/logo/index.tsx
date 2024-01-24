import Image from "next/image"
// Config
import { SITE } from "@/config"
// Lib
import { cn } from "@/lib/utils"
// Images
import MexIcon from "@/public/mex-icon.png"

type LogoProps = {
  className?: string
  noImage?: boolean
  noText?: boolean
}

export default function Logo({ className, noImage, noText }: LogoProps) {
  return (
    <div className="flex gap-2">
      {noImage ? null : (
        <Image
          src={MexIcon}
          alt="Mexico"
          height={40}
        />
      )}
      {noText ? null : (
        <h1 className={cn("text-2xl hightlight-text", className)}>
          {SITE.title}
        </h1>
      )}
    </div>
  )
}
