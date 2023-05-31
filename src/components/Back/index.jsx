import { Container } from "./styles";

export function Back({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={16}/>}
      <a {...rest}>Voltar</a>
    </Container>
  )
}