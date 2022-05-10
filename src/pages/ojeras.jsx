import ojeras from '../imgtratamientos/ojeras.png'

const Ojeras = () =>{

    return(
    <div className='content'>
        <section className="introtratameintos">
            <div className="section_title section_title--introtratamientos">
                <h1>Tratamiento</h1>
            </div>
        </section>

        <section className="porque_altonivel">
            <div className="section_title section_title--porque tl-acc">
                <h2>Tratamiento de ojeras</h2>
            </div>

            <h3>¿Qué es Tratamiento de las Ojeras?</h3>  

            <p>Las Ojeras (técnicamente: Hipercromía Idiopática del Anillo Orbitrario) es la parte más oscura de debajo los ojos. Pueden aparecer por herencia, hiperpigmentación, sombras, Alergias, Asma y Eccemas; medicación, cansancio, tristeza, cambios hormonales, edad o nutrición. </p>

            <img src={ojeras} alt='ojeras'></img>

            <p>El Tratamiento de las Ojeras es una técnica muy eficaz y satisfactoria para embellecer esa zona del rostro, corrigiendo las bolsas en los ojos, las Ojeras hundidas y marcadas que dan un aspecto apagado y de agotamiento al rostro.
Dada la delicadeza del área de las ojeras, resulta un tratamiento complejo, pero poco doloroso, aunque se puede utilizar anestesia local o tópica para reducir las molestias al paciente. 
</p>
            <h3>¿Por qué se realiza?</h3>

            <p>El Tratamiento de las Ojeras se puede aplicar tanto en hombres como en mujeres de todas las edades que se plantean cómo quitarse las Ojeras.</p>     

            <h3>¿En qué consiste el Tratamiento de las Ojeras?</h3>     

            <p>En función de su causa de aparición, hay diferentes técnicas para tratar las Ojeras:</p>

            <ul>
                <li>Ojeras Hereditarias: se pueden intentar eliminar con cosmética (que no lleve ningún tipo de ácido exfoliante), y si no hay éxito, se puede recurrir a las inyecciones de ácido hialurónico. Dependiendo del paciente y de la cantidad de producto inyectado el resultado durará más o menos tiempo, pudiéndose realizar una sesión de perfeccionamiento una vez al año.</li>
                <li>Ojeras por Hiperpigmentación: se pueden utilizar productos despigmentantes que ayuden a blanquear la zona</li>
                <li>Ojeras por Cansancio: se pueden usar cremas cosméticas que estimulan la oxigenación de la zona, evitan la coagulación de la sangre y la retención de líquidos. Además, será necesario adquirir buenos hábitos: dormir 8 horas, desmaquillarse bien, disminuir el consumo de alcohol, tabaco y cafeína; etc.</li>
            </ul>

            <h3>Preparación para el Tratamiento de las Ojeras</h3>   

            <p>Este procedimiento no requiere de ninguna preparación previa especial.</p>

            <h3>Cuidados tras el tratamiento</h3>

            <p>No hay ninguna indicación determinada para el cuidado del Tratamiento de las Ojeras.</p>
        </section>

    </div>
    )
}

export default Ojeras;