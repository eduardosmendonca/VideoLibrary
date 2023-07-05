import { Container} from './styles'

import { Header } from '../../components/Header'
import { SectionConversion } from '../../components/SectionConversion'
import { SectionVideoLibrary } from '../../components/SectionVideoLibrary'
import { SectionSeeDemo } from '../../components/SectionSeeDemo'
import { SectionFooter } from '../../components/SectionFooter'


export function Home() {

  return (
    <Container>
      <Header />
      <SectionConversion />
      <SectionVideoLibrary />
      <SectionSeeDemo />
      <SectionFooter />   
    </Container>
  )
}


