import React from 'react'
import './Contaminacion.css'

function Contaminacion () {
  return (
    <div className="contaminacionPadre">

      <div className="contaminacion">

        <div className="seccionTitulo">
          <div className="titulo">
            <h2>PROBLEMAS AMBIENTALES EN ARGENTINA</h2>
          </div>

          <div className="parrafoTitulo">

            <p>Si bien existen numerosos problemas ambientales en Argentina, hay 4 que son considerados dentro de los principales: El consumo irresponsable, la megaminería, la deforestación, el fracking para la extracción de petróleo y el uso masivo de los combustibles fósiles.</p>
          </div>
        </div>

        <div className="container-trust container-cardp">
          <div className="trust card-contaminacion">
            <div className="text-trust text-cardContaminacion">
              <p>PROBLEMATICAS</p>
            </div>
            <div className="container-trust container-box-cardContaminacion">
              <div className="card-trust box-card-contaminacion">
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611278/g64rybkluxkjdg5ept3q.png" alt="" />
                <h2>La Deforestacion</h2>

                <p>Zonas mas afectadas en el pais y las diferentes causas de esta devido a la tala masiva de arboles</p>
              </div>
              <div className="card-trust box-card-contaminacion">
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611278/i2ci0y3hje1zqkdosuf1.png" alt="" />
                <h2>Cambio Climatico</h2>
                <p>La deforestacion, los procesos industriales, entre otras problematicas son tienen como consecuencia el cambio climatico</p>
              </div>
              <div className="card-trust box-card-contaminacion">
                <img src="https://res.cloudinary.com/dz9d8qmcv/image/upload/v1722611278/hbi5ixfvpvrpakuizaqr.png" alt="" />
                <h2>Contaminacion del Agua</h2>
                <p>La contaminacion del agua es de las problematicas mas importante y demasiado importante tenerla en cuenta</p>
              </div>
            </div>

          </div>

        </div>

        <div className="problema">
          <h3>Deforestación en Argentina</h3>
          <p id='principal'>La deforestación en Argentina es un problema significativo, especialmente en la región del Gran Chaco, que abarca las provincias de Santiago del Estero, Chaco, Salta y Formosa. Este ecosistema, uno de los más grandes bosques secos de Sudamérica, ha sido severamente afectado por la tala indiscriminada.</p>

          <h4>Causas de la Deforestacion</h4>
          <div className="problemaContenido">
            <div className="problemaCausas">
              <h5>Expansión Agrícola:</h5>
              <p>Cultivos: La expansión de la frontera agrícola para cultivos como la soja y el maíz es una de las principales causas de deforestación. La soja, en particular, ha visto un aumento significativo en la demanda tanto a nivel nacional como internacional.</p>
              <p>Ganadería: La conversión de bosques en tierras de pastoreo para ganado es otra causa importante. Esto se debe al crecimiento del mercado de carne, tanto para consumo interno como para exportación.</p>
            </div>

            <div className="problemaCausas">
              <h5>Actividades Forestales:</h5>
              <p>Explotación Maderera: La tala de árboles para obtener madera y otros productos forestales contribuye significativamente a la deforestación. La explotación ilegal y no regulada exacerba el problema.</p>
            </div>

            <div className="problemaCausas">
              <h5>Desarrollo Urbano e Infraestructura:</h5>
              <p>Urbanización: La expansión de áreas urbanas y la construcción de infraestructuras, como carreteras y viviendas, lleva a la destrucción de bosques.</p>
              <p>Proyectos de Infraestructura: Grandes proyectos, como represas y caminos, también implican la deforestación de áreas significativas.</p>
            </div>

            <div className="problemaCausas">
              <h5>Incendios Forestales:</h5>
              <p>Los incendios, tanto naturales como provocados, son responsables de la destrucción de grandes extensiones de bosque. En algunos casos, los incendios se utilizan intencionalmente para despejar tierras para la agricultura.</p>
            </div>

          </div>
        </div>

        <div className="problema">
          <h3>Cambio Climático</h3>
          <p id='principal'>El cambio climático se refiere a las variaciones a largo plazo en las temperaturas y los patrones climáticos en la Tierra. Aunque estos cambios han ocurrido de manera natural a lo largo de millones de años, en las últimas décadas se ha observado un aumento significativo en las temperaturas globales debido principalmente a las actividades humanas.</p>

          <h4>Causas del Cambio Climático</h4>
          <div className="problemaContenido">
            <div className="problemaCausas">
              <h5>Gases de Efecto Invernadero (GEI</h5>
              <p>Dióxido de Carbono (CO2): La quema de combustibles fósiles como el carbón, el petróleo y el gas natural para la producción de energía, el transporte y las industrias es la principal fuente de emisiones de CO2.</p>
              <p>Metano (CH4): Las actividades agrícolas, especialmente la ganadería y el cultivo de arroz, así como la explotación de combustibles fósiles, generan emisiones significativas de metano.</p>
              <p>Óxidos de Nitrógeno (N2O): El uso de fertilizantes nitrogenados en la agricultura y algunas actividades industriales contribuyen a la emisión de N2O.</p>
              <p>Gases Industriales: Compuestos como los hidrofluorocarbonos (HFCs), perfluorocarbonos (PFCs) y hexafluoruro de azufre (SF6) se utilizan en diversas aplicaciones industriales y tienen un alto potencial de calentamiento global.</p>
            </div>

            <div className="problemaCausas">
              <h5>Deforestación:</h5>
              <p>La tala de bosques reduce la capacidad de la Tierra para absorber CO2, contribuyendo al aumento de este gas en la atmósfera. Además, la quema de biomasa forestal libera grandes cantidades de CO2.</p>
            </div>

            <div className="problemaCausas">
              <h5>Cambio en el Uso de la Tierra:</h5>
              <p>La urbanización y la expansión agrícola, especialmente en áreas forestales, alteran el balance de carbono y afectan los ecosistemas naturales.</p>

            </div>

            <div className="problemaCausas">
              <h5>Procesos Industriales:</h5>
              <p>Algunas actividades industriales, como la producción de cemento, liberan grandes cantidades de CO2 y otros GEI.</p>
            </div>

          </div>
        </div>

        <div className="problema">
          <h3>Contaminacion de Agua</h3>
          <p id='principal'>La contaminación del agua es un problema grave en Argentina, afectando tanto a los recursos hídricos superficiales como subterráneos. Ríos, arroyos, lagos y acuíferos en todo el país están siendo impactados negativamente por diversas fuentes de contaminación.</p>

          <h4>Causas de la Contaminación del Agua</h4>
          <div className="problemaContenido">
            <div className="problemaCausas">
              <h5>Vertidos Industriales:</h5>
              <p>Desechos Químicos: Las industrias, especialmente las químicas y petroquímicas, vierten residuos tóxicos directamente en cuerpos de agua sin el tratamiento adecuado. Esto incluye metales pesados, ácidos, alcalinos y otros productos químicos peligrosos.</p>
              <p>Vertidos de Procesamiento: Procesos industriales como el procesamiento de alimentos y bebidas también generan efluentes que contienen altos niveles de materia orgánica y otros contaminantes.</p>
            </div>

            <div className="problemaCausas">
              <h5>Aguas Residuales Urbanas:</h5>
              <p>Sistemas de Alcantarillado: En muchas ciudades, las aguas residuales no se tratan adecuadamente antes de ser descargadas en ríos y arroyos. Esto introduce bacterias, virus y otros patógenos al agua.</p>
              <p>Fosas Sépticas y Residuos Humanos: En áreas rurales, las fosas sépticas mal mantenidas o desbordadas también contribuyen a la contaminación del agua.</p>
            </div>

            <div className="problemaCausas">
              <h5>Agricultura:</h5>
              <p>Pesticidas y Fertilizantes: El uso excesivo de pesticidas y fertilizantes en la agricultura puede resultar en la escorrentía de productos químicos hacia cuerpos de agua, causando contaminación con nutrientes y productos tóxicos.</p>
              <p>Residuos de Ganadería: Las operaciones de ganadería intensiva generan grandes cantidades de residuos animales que pueden contaminar las fuentes de agua con nitratos, fosfatos y bacterias patógenas.</p>
            </div>

            <div className="problemaCausas">
              <h5>Desechos Sólidos:</h5>
              <p>Basurales: Los vertederos de basura mal gestionados pueden filtrar lixiviados tóxicos hacia el suelo y los cuerpos de agua cercanos.</p>
              <p>Desechos Plásticos y Residuos Sólidos: La acumulación de residuos sólidos, incluidos los plásticos, en ríos y lagos contamina el agua y afecta a la fauna acuática.</p>
            </div>

            <div className="problemaCausas">
              <h5>Actividades Mineras:</h5>
              <p>Minería a Cielo Abierto: La extracción de minerales, especialmente mediante técnicas a cielo abierto, puede liberar metales pesados y otras sustancias tóxicas en las fuentes de agua.</p>
              <p>Relaves Mineros: Los residuos de la minería, conocidos como relaves, a menudo contienen sustancias peligrosas que pueden filtrarse hacia el agua.</p>
            </div>

          </div>
        </div>

        <p id='principal'>Las problemáticas ambientales mencionadas anteriormente son solo algunas de las muchas que enfrenta Argentina. Además de la deforestación, la contaminación del agua, el cambio climático y la contaminación del aire, el país enfrenta una serie de desafíos ambientales adicionales que también requieren atención urgente. Algunos de estos problemas incluyen: Desertificación y Degradación del Suelo, Contaminación del Suelo, Pérdida de Biodiversidad, Gestión Insuficiente de Residuos,Sobreexplotación de Recursos Naturales, Degradación de Ecosistemas Marinos y Costeros, entre otros</p>

        {/*

          <h4>Causas de la Contaminación del Agua</h4>
          <p>Vertidos Industriales:</p>
          <li>Desechos Químicos: Las industrias, especialmente las químicas y petroquímicas, vierten residuos tóxicos directamente en cuerpos de agua sin el tratamiento adecuado. Esto incluye metales pesados, ácidos, alcalinos y otros productos químicos peligrosos.</li>
          <li>Vertidos de Procesamiento: Procesos industriales como el procesamiento de alimentos y bebidas también generan efluentes que contienen altos niveles de materia orgánica y otros contaminantes.</li>

          <p>Aguas Residuales Urbanas:</p>
          <li>Sistemas de Alcantarillado: En muchas ciudades, las aguas residuales no se tratan adecuadamente antes de ser descargadas en ríos y arroyos. Esto introduce bacterias, virus y otros patógenos al agua.</li>
          <li>Fosas Sépticas y Residuos Humanos: En áreas rurales, las fosas sépticas mal mantenidas o desbordadas también contribuyen a la contaminación del agua.</li>

          <p>Agricultura:</p>
          <li>Pesticidas y Fertilizantes: El uso excesivo de pesticidas y fertilizantes en la agricultura puede resultar en la escorrentía de productos químicos hacia cuerpos de agua, causando contaminación con nutrientes y productos tóxicos.</li>
          <li>
          Residuos de Ganadería: Las operaciones de ganadería intensiva generan grandes cantidades de residuos animales que pueden contaminar las fuentes de agua con nitratos, fosfatos y bacterias patógenas.
          </li>

          <p>Desechos Sólidos:</p>
          <li>Basurales: Los vertederos de basura mal gestionados pueden filtrar lixiviados tóxicos hacia el suelo y los cuerpos de agua cercanos.</li>
          <li>Desechos Plásticos y Residuos Sólidos: La acumulación de residuos sólidos, incluidos los plásticos, en ríos y lagos contamina el agua y afecta a la fauna acuática.</li>

          <p>Actividades Mineras:</p>
          <li>Minería a Cielo Abierto: La extracción de minerales, especialmente mediante técnicas a cielo abierto, puede liberar metales pesados y otras sustancias tóxicas en las fuentes de agua.</li>
          <li>Relaves Mineros: Los residuos de la minería, conocidos como relaves, a menudo contienen sustancias peligrosas que pueden filtrarse hacia el agua.</li>

          </div>
          <div className="consecuencia">

          </div>
        </div>
        </div>

      </div>

      <div className="problema">
          <div className="tituloProb">
          <h3>Cambio Climatico</h3>
          </div>
        <div className="informacion">
          <p id='principal'>El cambio climático se refiere a las variaciones a largo plazo en las temperaturas y los patrones climáticos en la Tierra. Aunque estos cambios han ocurrido de manera natural a lo largo de millones de años, en las últimas décadas se ha observado un aumento significativo en las temperaturas globales debido principalmente a las actividades humanas.</p>

        <div className="causaInfo">
          <div className="causa">
          <h4>Causas del Cambio Climático</h4>
          <p>Gases de Efecto Invernadero (GEI):</p>
          <li>Dióxido de Carbono (CO2): La quema de combustibles fósiles como el carbón, el petróleo y el gas natural para la producción de energía, el transporte y las industrias es la principal fuente de emisiones de CO2.</li>
          <li>Metano (CH4): Las actividades agrícolas, especialmente la ganadería y el cultivo de arroz, así como la explotación de combustibles fósiles, generan emisiones significativas de metano.</li>
          <li>Óxidos de Nitrógeno (N2O): El uso de fertilizantes nitrogenados en la agricultura y algunas actividades industriales contribuyen a la emisión de N2O.</li>
          <li>Gases Industriales: Compuestos como los hidrofluorocarbonos (HFCs), perfluorocarbonos (PFCs) y hexafluoruro de azufre (SF6) se utilizan en diversas aplicaciones industriales y tienen un alto potencial de calentamiento global.</li>

          <p>Deforestacion</p>
          <li>La tala de bosques reduce la capacidad de la Tierra para absorber CO2, contribuyendo al aumento de este gas en la atmósfera. Además, la quema de biomasa forestal libera grandes cantidades de CO2.</li>

          <p>Cambio en el Uso de la Tierra:</p>
          <li>La urbanización y la expansión agrícola, especialmente en áreas forestales, alteran el balance de carbono y afectan los ecosistemas naturales.</li>

          <p>Procesos Industriales:</p>
          <li>Algunas actividades industriales, como la producción de cemento, liberan grandes cantidades de CO2 y otros GEI.</li>

          <p>Incendios Forestales:</p>
          <li>Los incendios, tanto naturales como provocados, son responsables de la destrucción de grandes extensiones de bosque. En algunos casos, los incendios se utilizan intencionalmente para despejar tierras para la agricultura.</li>

          </div>
          <div className="consecuencia">

          </div>
        </div>
        </div>

      </div>

      <div className="problema">
          <div className="tituloProb">
          <h3>Deforestacion</h3>
          </div>
        <div className="informacion">
          <p id='principal'>La deforestación se refiere a la eliminación o destrucción de áreas forestales, generalmente para dar paso a otras actividades como la agricultura, la ganadería, la urbanización y la minería. Este fenómeno tiene impactos significativos tanto en el medio ambiente como en las comunidades humanas.</p>

        <div className="causaInfo">
          <div className="causa">
          <h4>Causas del Cambio Climático</h4>
          <p>
          Expansión Agrícola:
          </p>

           <li>Cultivos Comerciales: La demanda creciente de productos agrícolas como la soja, el aceite de palma, el café y el cacao lleva a la conversión de bosques en tierras de cultivo.</li>
           <li>Ganadería: La necesidad de tierras para pastoreo ha sido una de las principales causas de la deforestación, especialmente en regiones como el Amazonas.</li>

          <p>Explotación Forestal:</p>
          <li>Tala de Árboles: La industria maderera tala árboles para obtener madera, papel y otros productos derivados de los bosques. La tala ilegal y no regulada agrava el problema.</li>
          <li>Carbón Vegetal: En algunas regiones, la producción de carbón vegetal para combustible implica la quema de grandes extensiones de bosque.</li>

          <p>Desarrollo Urbano y de Infraestructuras:</p>
          <li>Urbanización: La expansión de ciudades y pueblos requiere la limpieza de áreas forestales para construir viviendas, carreteras y otras infraestructuras.</li>
          <li>Proyectos de Infraestructura: Grandes proyectos de infraestructura como represas, carreteras y líneas de transmisión eléctrica también llevan a la deforestación.</li>

          <p>
          Incendios Forestales:
          </p>
          <li>Incendios Intencionales: En algunos casos, los incendios son provocados intencionalmente para despejar tierras para la agricultura o la ganadería.</li>
          <li>Incendios Naturales: Las sequías y el cambio climático han aumentado la frecuencia e intensidad de los incendios forestales.</li>

          <p>Actividades Mineras:</p>
          <li>La extracción de minerales y recursos naturales a menudo implica la deforestación de áreas significativas para acceder a los depósitos minerales.</li>

          </div>
          <div className="consecuencia">

          </div>
        </div>

        </div>

      </div>

      <p className='ultParrafo'>Las problemáticas ambientales mencionadas anteriormente son solo algunas de las muchas que enfrenta Argentina. Además de la deforestación, la contaminación del agua, el cambio climático y la contaminación del aire, el país enfrenta una serie de desafíos ambientales adicionales que también requieren atención urgente. Algunos de estos problemas incluyen: Desertificación y Degradación del Suelo, Contaminación del Suelo, Pérdida de Biodiversidad, Gestión Insuficiente de Residuos,Sobreexplotación de Recursos Naturales, Degradación de Ecosistemas Marinos y Costeros, entre otros</p>

*/}

      </div>
    </div>
  )
}

export default Contaminacion
