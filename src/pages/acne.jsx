import imgacne from "../imgtratamientos/imgacne.png"

const Acne = () =>{

    return(
    <div className='content'>
        <section className="introtratameintos">
            <div className="section_title section_title--introtratamientos">
                <h1>Tratamiento</h1>
            </div>
        </section>

        <section className="porque_altonivel">
            <div className="section_title section_title--porque tl-acc">
                <h2>Acné</h2>
            </div>
                <h3>¿Qué es el Acné?</h3>

                <p>El Acné es una enfermedad de la piel que normalmente aparece durante la adolescencia y juventud en el 85% de los casos, está caracterizada por la aparición de espinillas y granos, que se forman porque los folículos pilosos que se encuentran debajo de la piel se tapan, por lo que se inflaman y ocasionan una Infección Poro Folicular.</p>
        
                <img src={imgacne} alt='acne'></img>

                <p>Aunque aparece regularmente en la adolescencia y juventud, puede presentarse en personas de todas las edades. Existen varios tipos de Acné, como el Ocupacional, que se presenta en personas que se exponen a diversos productos industriales. También puede presentarse en recién nacidos, por consumo de fármacos o diversos tratamientos.</p>

                <h3>¿Qué síntomas presenta?</h3>

                <p>Los principales síntomas del Acné son los siguientes:</p>

                <ul>
                    <li>Quistes</li>
                    <li>Erupciones con costras</li>
                    <li>Cicatrices</li>
                    <li>Protuberancias rojas y pequeñas</li>
                    <li>Espinillas</li>
                </ul>

                <h3>Causas del Acné o por qué se produce</h3>

                <p>No existe una causa específica que produzca el Acné, aunque en la mayoría de los casos se le atribuye a cambios hormonales, como los que ocurren en la adolescencia, menstruación y embarazo. También puede deberse a las glándulas sebosas en la piel, el uso de cosméticos y productos para el cabello, así como fármacos y sudoración excesiva.
                    <br/>
                    Se dice que los alimentos y productos grasos como el chocolate pueden producir Acné, sin embargo, no hay evidencia que lo demuestre. Otra creencia es que el estrés produce Acné, pero esto no es verdad, sólo puede empeorarlo.
                </p>

                <h3>¿Se puede prevenir?</h3>

                <p>La prevención del Acné no existe como tal, pero sí se pueden tener diversos cuidados en la piel para reducir la cantidad y gravedad de las Lesiones, como lavar la piel para quitar el exceso de grasa y eliminar las células muertas, también se recomienda utilizar productos de higiene y cuidado personal adecuados.</p>

                <h3>¿En qué consiste el tratamiento?</h3>

                <p>El tratamiento puede derivar del grado de gravedad de la enfermedad, así como las lesiones del paciente, por lo que los especialistas han recomendado que este malestar se trate oportunamente para evitar las cicatrices.
El tratamiento puede ser a base de medicamentos y/o cremas, pero también se puede recurrir al láser para cicatrices de Acné, tecnologías como Dermashine, Nanopore Stylus 2 o con un tratamiento de Fotorejuvenecimiento con Luz Pulsada. 
La Mesoterapia es un tratamiento efectivo tanto en cara, como en el cuerpo.
</p>


        </section>

    </div>
    )
}

export default Acne;