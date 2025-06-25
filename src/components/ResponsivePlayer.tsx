"use client"

import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useLoadStore } from "@/hooks/useLoadStore";

interface ResponsivePlayerProps {
  video: string;
}

export function ResponsivePlayer({ video }: ResponsivePlayerProps) {
  const { setIsLoading } = useLoadStore();
  const isMobile = useIsMobile();
  const url = isMobile ? "/home-mobile.mp4" : "/home2.mp4";
  return (
    <div className='player-wrapper aspect-9/16 lg:aspect-16/9'>
      <ReactPlayer
        onStart={() => {
          setIsLoading(false);
        }}
        className="react-player"
        url={url}
        width='100%'
        height='100%'
        playing
        playsinline
        loop
        muted
      />
    </div>
  )
}