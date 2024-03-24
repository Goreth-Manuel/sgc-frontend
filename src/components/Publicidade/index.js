import React from 'react';
import Image from '../../../src/assets/react.jpg'
import 'react-slideshow-image/dist/styles.css';

function Publicidade ()  {
  return (
    <div 
      style={{
        display: 'flex', 
        alignItems: 'center',
        marginTop: '6rem',
        justifyContent: 'center'
      }}                                                                                                                                                                                                                                                                                      >
      <img src={Image} alt=''
      style={{
        width: '500px',
        height: '360px',
        padding: '0 1rem',
        borderRadius: '40px',
      }}
      />

      <div
       style={{
        marginLeft: '7.5rem',
      }}
      > 
        <h1 
        style={{
          color: '#54595f', 
          fontSize: '38px',
        }}
        >
          Somos a alegria que a sua criança <br/> precisa.
          Não procure mais!
        </h1>
        <p 
          style={{
            color: '#54595f',
            fontSize: '1.5rem',
            padding: '1rem 2rem 1.5rem 0',
            lineHeight: '2.4rem'
            }}>

          Fizemos tudo a pensar no bem estar do seu filho,
          <br/>Ele é a nossa maior <strong 
          style={{color: '#00AACC'}}
          >PRIORIDADE.</strong>
        </p>
      </div>
    </div>
  );
};

export default Publicidade;
