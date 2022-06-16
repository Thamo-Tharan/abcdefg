import React, { FC } from 'react'
import { StyledImage } from './styles'

interface ImageProps {
  image: string
  alt?: string
}

const Image: FC<ImageProps> = ({ image }) => {
  return <StyledImage src={image} alt="" />
}

export default Image
