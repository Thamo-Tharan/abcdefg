import { TextboxProps, Main, Wrapper } from './styles'

export const Textbox = ({
  disabled,
  type,
  placeholder,
  value,
  required,
  onChange,
  onBlur,
  defaultValue,
  name,
  id,
  max,
}: TextboxProps) => {
  return (
    <Wrapper>
      <Main
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={onChange}
        required={required}
        obBlur={onBlur}
        max={max}
      ></Main>
    </Wrapper>
  )
}
