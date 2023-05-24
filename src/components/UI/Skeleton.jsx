import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader
    speed={0}
    width={280}
    height={458}
    viewBox="0 0 280 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="18" y="15" rx="0" ry="0" width="0" height="3" />
    <circle cx="134" cy="125" r="124" />
    <rect x="44" y="265" rx="10" ry="10" width="193" height="29" />
    <rect x="0" y="312" rx="10" ry="10" width="279" height="84" />
    <rect x="0" y="415" rx="10" ry="10" width="94" height="40" />
    <rect x="118" y="409" rx="31" ry="31" width="164" height="51" />
  </ContentLoader>
)