import React from 'react'
import { FooterTag } from './style'

function Footer () {
  return (
    <FooterTag>
            <div id="sobre">
              <h4>SGC</h4>
              <p>
                Sistema de Gestão de Crianças visa facilitar a vida dos 
                encarregados de educação na busca de um Centro Infantil.
              </p>
            </div>

            <div id="help">
              <h4>Helpful Links</h4>
              <ul>
                <li>Serviços</li>
                <li>Suporte</li>
                <li>Termos & Condição</li>
                <li>Política de privacidade</li>
              </ul>
            </div>

            <div id="contactos">
              <h4>Contactos</h4>
              <ul>
                <li>+244 999 99 99 99</li>
                <li>+244 922 22 22 22</li>
                <li>gorethmanuel0@gmail.com</li>
              </ul>
            </div>
    </FooterTag>
    
  )
}
export default Footer