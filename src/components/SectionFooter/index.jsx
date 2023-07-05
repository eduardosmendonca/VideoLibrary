import { Container, BackgroundImg, UsefulLinks, Links, WrapperCopy } from './styles'

import { SectionLinks } from '../../components/SectionLinks'
import { Line } from '../../components/Line'


export function SectionFooter () {
return (
  <Container>
    <BackgroundImg />
    <p>Transformando visitantes em clientes.</p>
    <UsefulLinks>
      <SectionLinks title = "Links Principais">
        <Links>
          <li><a href="https://leadster.com.br/" target='blank'>Home</a></li>
          <li><a href="#" target='blank'>Ferramentas</a></li>
          <li><a href="https://leadster.com.br/preco/" target='blank'>Preços</a></li>
          <li><a href="https://leadster.com.br/contato/" target='blank'>Contato</a></li>
        </Links>
      </SectionLinks>
      <SectionLinks title = "Cases">
        <Links>
          <li><a href="https://leadster.com.br/geracao-de-leads/b2b/" target='blank'>Geração de Leads B2B</a></li>
          <li><a href="https://leadster.com.br/geracao-de-leads/software/" target='blank'>Geração de Leads em Software</a></li>
          <li><a href="https://leadster.com.br/geracao-de-leads/imobiliaria/" target='blank'>Geração de Leads em Imobiliária</a></li>
          <li><a href="https://leadster.com.br/estudo-de-caso/" target='blank'>Cases de Sucesso</a></li>
        </Links>
      </SectionLinks>
      <SectionLinks title = "Materiais">
        <Links>
          <li><a href="https://leadster.com.br/blog/" target='blank'>Blog</a></li>
          <li><a href="https://leadster.com.br/geracao-de-leads/agencias/" target='blank'>Parceria com Agências</a></li>
          <li><a href="https://leadster.com.br/marketing-conversacional/" target='blank'>Guia definitivo do Marketing</a></li>
          <li><a href="https://leadster.com.br/materiais/" target='blank'>Materiais Gratuitos</a></li>
        </Links>
      </SectionLinks>
      <SectionLinks title = "Siga a Leadster">
        <Links>
          <li><a href="#" target='blank'>Blog</a></li>
          <li><a href="#" target='blank'>Parceria com Agências</a></li>
          <p><strong>E-mail:</strong> leadster@leadster.com.br</p>
          <p><strong>Telefone:</strong> (42) 98828-9851</p>
          
        </Links>
      </SectionLinks>
    </UsefulLinks>
    <Line />
    <WrapperCopy>
      <p>Copyright &copy; 2015 - 2022 Todos os direitos reservados | <a href="#">Leadster</a>  </p>
      <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
    </WrapperCopy>
  </Container>
  )
}