import { FlexItem, InputFieldGroupProps, Wrapper } from './styles'

import { InputField } from '../inputField/InputField'

export const InputFieldGroup = ({
  label1,
  textboxPlaceholder1,
  textboxValue1,
  textboxDefaultValue1,
  type1,
  disabled1,
  id1,
  max1,
  onChange1,
  label2,
  textboxPlaceholder2,
  textboxValue2,
  textboxDefaultValue2,
  type2,
  disabled2,
  id2,
  max2,
  onChange2,
}: InputFieldGroupProps) => {
  return (
    <Wrapper>
      <FlexItem>
        <InputField
          label={label1}
          type={type1}
          textboxPlaceholder={textboxPlaceholder1}
          textboxValue={textboxValue1}
          textboxDefaultValue={textboxDefaultValue1}
          disabled={disabled1}
          id={id1}
          max={max1}
          onChange={onChange1}
        />
      </FlexItem>
      <FlexItem>
        <InputField
          label={label2}
          type={type2}
          textboxPlaceholder={textboxPlaceholder2}
          textboxValue={textboxValue2}
          textboxDefaultValue={textboxDefaultValue2}
          disabled={disabled2}
          id={id2}
          max={max2}
          onChange={onChange2}
        />
      </FlexItem>
    </Wrapper>
  )
}
