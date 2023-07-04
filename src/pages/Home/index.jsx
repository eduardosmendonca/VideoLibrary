import { Container, Footer, UsefulLinks, Links } from './styles'

import { Header } from '../../components/Header'
import { SectionLinks } from '../../components/SectionLinks'
import { SectionConversion } from '../../components/SectionConversion'
import { SectionVideoLibrary } from '../../components/SectionVideoLibrary'
import { SectionSeeDemo } from '../../components/SectionSeeDemo'


export function Home() {

  return (
    <Container>
      <Header />
      <SectionConversion />
      <SectionVideoLibrary />
      <SectionSeeDemo />

      

      <Footer>
        <h1>Leadster</h1>
        <p>Transformando visitantes em clientes.</p>

        <UsefulLinks>
          <SectionLinks title = "Links Principais">
            <Links>
              <li><a href="https://www.google.com">Home</a></li>
              <li><a href="#">Ferramentas</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">Contato</a></li>
            </Links>
          </SectionLinks>

          <SectionLinks title = "Cases">
            <Links>
              <li><a href="#">Geração de Leads B2B</a></li>
              <li><a href="#">Geração de Leads em Software</a></li>
              <li><a href="#">Geração de Leads em Imobiliária</a></li>
              <li><a href="#">Cases de Sucesso</a></li>
            </Links>
          </SectionLinks>

          <SectionLinks title = "Materiais">
            <Links>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Parceria com Agências</a></li>
              <li><a href="#">Guia definitivo do Marketing</a></li>
              <li><a href="#">Materiais Gratuitos</a></li>
            </Links>
          </SectionLinks>

          <SectionLinks title = "Siga a Leadster">
            <Links>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Parceria com Agências</a></li>
              <p><strong>E-mail:</strong>leadster@leadster.com.br</p>
              <p><strong>Telefone:</strong>(42) 98828-9851</p>
              
            </Links>
          </SectionLinks>
        </UsefulLinks>
        <p>Copyright &copy; 2015 - 2022 Todos os direitos reservados | <a href="#">Leadster</a>  </p>
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>


      </Footer>

    </Container>
  )
}


