import { Container } from './styles'

export function NumberButton () {
  return(
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}