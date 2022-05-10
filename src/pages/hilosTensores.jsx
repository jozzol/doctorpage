import hilos from "../imgtratamientos/hilos tensores.png"

const HilosTensores = () =>{

    return(
    <div className='content'>
        <section className="introtratameintos">
            <div className="section_title section_title--introtratamientos">
                <h1>Tratamiento</h1>
            </div>
        </section>

        <section className="porque_altonivel">
            <div className="section_title section_title--porque tl-acc">
                <h2>Hilos Tensores</h2>
            </div>
                <p>Los Hilos Tensores son unos hilos finos utilizados estéticamente para rejuvenecer el rostro. Se pueden aplicar tanto para eliminar las arrugas y la Flacidez Facial, como para levantar las cejas o, incluso, para redefinir el óvalo de la cara y el contorno de la mandíbula.</p>

                <img src={hilos} alt="hilos tensores"></img>

                <p>Existen dos tipos de Hilos Tensores:</p>

                <ul>
                    <li>Permanentes, que están hechos de propileno</li>
                    <li>Temporales, realizados con dioxanona, material que después de unos dos años es reabsorbido por el organismo sin necesidad de ninguna operación</li>
                </ul>

                <h3>¿Por qué se realizan?</h3>

                <p>El tratamiento con Hilos Tensores se realiza para:</p>

                <ul>
                    <li>Disimular las arrugas del contorno de los ojos</li>
                    <li>Elevar las mejillas</li>
                    <li>Reafirmar el cuello</li>
                    <li>Elevar las cejas</li>
                    <li>Dar simetría a la cara</li>
                    <li>Reafirmar el Contorno Facial</li>
                    <li>Difuminar las arrugas de la frente</li>
                </ul>

                <h3>¿En qué consisten?</h3>

                <p>Es un tratamiento tensado cutáneo que se basa en la implantación de varios micro hilos en forma de red. Esta red actúa como soporte de los tejidos provocando el efecto reafirmante instantáneo y favoreciendo la producción natural de colágeno.</p>
                <p>Las intervenciones de Cirugía con Hilos Tensores requieren la realización de pequeñas incisiones a través de las que se injertan los hilos para desplazarlos y colocarlos en el tejido de la zona deseada hasta fijarlos en la posición marcada por el Cirujano. </p>
        
                <h3>Cuidados tras la intervención</h3>

                <p>El postratamiento puede resultar algo molesto. El paciente puede presentar hinchazón durante unos días, además de calor en la zona o incluso aparecer algún pequeño Hematoma. Sin embargo, lo normal es que no se produzca ningún tipo de molestia.</p>
        </section>

    </div>
    )
}

export default HilosTensores;