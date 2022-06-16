import { Wrapper, IconsTextWrapper, StyledTextarea } from './styles'

interface TextareaProps {
  label: string
}

export const Textarea = ({ label }: TextareaProps) => {
  return (
    <Wrapper>
      <IconsTextWrapper>
        <StyledTextarea name="textarea" id="textarea" placeholder={label} />
      </IconsTextWrapper>
    </Wrapper>
  )
}
