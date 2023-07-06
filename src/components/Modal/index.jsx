import { Container, Main } from './styles'

import { Line } from '../Line'


export function Modal({isOpen, setCloseModal, children}) {

  if(isOpen) {
    return(
      <Container>
        <Main>
          {children}
          <div className="close" onClick={setCloseModal}>X</div>
          <h2><span>Webinar:</span> Como aumentar sua Geração de Leads feat. Tractor</h2>
          <iframe width="100%" height="350" src="https://www.youtube.com/embed/iHetrYfuJ-w?list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h3>Descrição</h3>
          <Line />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum expedita quam unde saepe doloremque ad esse repellat officia vitae mollitia perspiciatis at! Dicta cumque facere ab, omnis sed dolore?</p>
          <h3>Downloads</h3>
          <Line />
        </Main>
     
  
        
      </Container>
    )
  }

  return null

}