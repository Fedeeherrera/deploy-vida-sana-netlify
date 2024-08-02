import React from 'react'
import './Home.css'

function Home () {
  return (
    <div className="home">

      <div className="container-cover">
        <div className="cover">
          <div className="coverSig">

            <div className="text-cover">
              <h1>Vida Natural Organizacion No Gubernamental</h1>
              <p>Entidad civil fundada el 29 de junio de 2010, que trabaja en la solución de los principales problemas ambientales de Argentina. Nuestra misión es "proponer e implementar soluciones para conservar la naturaleza, promover el uso sustentable de los recursos naturales y una conducta responsable del hombre en un contexto de cambio climático".</p>
              <a href="http://localhost:5173/Login" className='btn-cover'>Unirse a nosotros</a>
            </div>
            <div className="img-cover ">
              <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722612203/mxxt04oii3vfofwaygmq.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container-trust container-cardp">
          <div className="trust card-primary">
            <div className="text-trust text-cardprimary">
              <p>Como podemos ayudar?</p>
              <h2>Nuestro planeta nos necesita</h2>
            </div>
            <div className="container-trust container-box-card">
              <div className="card-trust box-card-primary">
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611281/mz86elergmwbxmln5ufl.png" alt="" />
                <h2>Educacion Ambiental</h2>
                <p>Informarnos de las causas y de las consecuencias de la contaminacion, muchas veces genera conciencia en nosotros. <span>click aca</span> </p>
              </div>
              <div className="card-trust box-card-primary" id='cardPrincipal' >
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611278/cucks7s5trhjfgpvueyp.png" alt="" />
                <h2>Ayudar Desde Casa</h2>
                <p>en vez de solucionar los problemas, podemos evitarlos. recicla y evita lo mas posible el uso de objetos no reutilizables</p>
              </div>
              <div className="card-trust box-card-primary">
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611278/jxxnaliiohxkvwd0vvxr.png" alt="" />
                <h2>Donaciones</h2>
                <p>con tu donacion contribuis y ayudas a los fondos de las distintas entidades asociada con nostros para la mejora de nuestro planeta</p>
              </div>
            </div>

          </div>

        </div>

        <div className="container-about">
          <div className="about">
            <div className="text-about">

              <h2>El planeta, nuestro hogar</h2>
              <p>El planeta Tierra es nuestro único hogar y alberga una increíble diversidad de vida. Es nuestra responsabilidad protegerlo y preservarlo para las futuras generaciones. Desde los océanos hasta los bosques, cada rincón juega un papel crucial en mantener el equilibrio de los ecosistemas. Sin embargo, enfrentamos desafíos ambientales como la deforestación, la contaminación y el cambio climático. Unámonos para cuidar y restaurar nuestro hogar, asegurando un futuro sostenible. Con acciones colectivas, podemos hacer una diferencia significativa. ¡El planeta nos necesita!</p>
              <div className="botonesPag">
                <a href="http://localhost:5173/Donaciones" className='btn-cover'>Ayudar</a>
                <a href="http://localhost:5173/Contaminacion" className='btn-cover' id='secundario'>Informanos</a>
              </div>
            </div>
            <div className="img-about">
              <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722612203/mxxt04oii3vfofwaygmq.png" alt="" />

            </div>

          </div>
        </div>
      </div>

    </div>

  )
};
export default Home
