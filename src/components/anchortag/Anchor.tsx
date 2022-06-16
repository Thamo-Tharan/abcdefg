import { StyledAnchor, AnchorProps } from './styles'
import { useState } from 'react'
import Image from '../image/Image'

export const Anchor = ({ title, href, icon, color }: AnchorProps) => {
  const [visited, setVisited] = useState(false)
  return (
    <StyledAnchor
      href={href}
      onClick={() => setVisited(true)}
      visited={visited}
      icon={icon}
      color={color}
    >
      {title}
      {icon && <Image image={icon} />}
    </StyledAnchor>
  )
}
