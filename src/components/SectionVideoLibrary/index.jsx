import { Container, Navigation, SectionCard, PageNavigation } from './styles'

import { Button } from '../../components/Button'
import { Line } from '../../components/Line'
import { Card } from '../../components/Card'




export function SectionVideoLibrary () {
  return (
    <Container>
        <Navigation>
          <Button title='Agências' />
          <Button title='Chatbox' />
          <Button title='Marketing Digital' />
          <Button title='Geração de Leads' />
          <Button title='Mídia Paga' />

          <select id="appearance-select">
            <option>Selecione</option>
            <option>Primeira opção</option>
            <option>Segunda opção</option>
            <option>Terceira opção</option>
            <option>Quarta opção</option>
          </select>
        </Navigation>
        <Line />
        
        <div className="wrapper-cards">
          <SectionCard>
            <Card />
            <Card />
            <Card />
          </SectionCard>
          <SectionCard>
            <Card />
            <Card />
            <Card />
          </SectionCard>
          <SectionCard>
            <Card />
            <Card />
            <Card />
          </SectionCard>
        </div>
        <Line />
        <PageNavigation>
          <p>Página</p>
          <Button title='1' />
          <Button title='2' />
          <Button title='3' />
          <Button title='4' />
        </PageNavigation>
    </Container>
  )
}

