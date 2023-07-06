import { useState } from 'react'

import { Container, Image } from './styles'
import { Modal } from '../Modal'

export function Card() {
  const [openModal, setOpenModal] = useState(true)
  return (
    <Container onClick={() => setOpenModal(true)} >
      <Image />
      <p>Como aumentar sua geração de Leads feat. Traktor</p>
      <Modal isOpen={openModal} setCloseModal={() => setOpenModal(!openModal)} />
      
    </Container>
  )
}
