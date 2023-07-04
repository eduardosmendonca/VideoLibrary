import { Container, Image, TextDemo, ImageTopApp, ImageNoCard, ImageRating } from './styles'

import { Line } from '../../components/Line'
import { Button } from '../../components/Button'


export function SectionSeeDemo () {
  return (
    <Container>
      <Image />
      <TextDemo>
        <h2>Pronto para triplicar sua <strong>Geração de Leads?</strong></h2>
        <p>Criação e ativação em <strong>4 minutos.</strong></p>
        <Line />
        <div className="wrapper-buttonImage">
          <Button title='VER DEMONSTRAÇÃO' />
          <ImageTopApp /> 
        </div>
        <div className="wrapper-satisfaction">
          <ImageNoCard />
          <p> <strong>Não</strong> é necessário Cartão de Crédito | </p>
          <ImageRating />  
          <p> 4.9/5 média de satisfação.</p>
        </div>
      </TextDemo>
    </Container>
  )

}