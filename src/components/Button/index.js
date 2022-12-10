import { ButtonContainer } from "./styles"

export default function Button({label, size, onClick}) {
  return (
    <ButtonContainer size={size} onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}
