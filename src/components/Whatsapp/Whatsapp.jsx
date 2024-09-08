import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatarIcon from '../../images/img-circle-tania.jpg'

export default function Whatsapp() {

    return (
        <FloatingWhatsApp phoneNumber='+5534992416676'
            accountName='Tânia Kátia'
            chatMessage='Olá, tudo bem? Em que posso te ajudar?'
            statusMessage='Online'
            placeholder='Digite a sua mensagem'
            avatar={avatarIcon}
            allowClickAway={true}
            allowEsc={true} />
    )
}