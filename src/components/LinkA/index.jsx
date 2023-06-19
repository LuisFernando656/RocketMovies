import { Container } from "./styles";
import { Link } from "react-router-dom";

export function LinkA({icon: Icon, title, ...rest}) {
  return(
    <Container>
      <Link {...rest}>{Icon && <Icon size={20}/>}{title}</Link>
    </Container>
  )
}