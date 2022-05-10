import rellenof from "../imgtratamientos/rellenofacial.png"

const RellenosFaciales = () =>{

    return(
    <div className='content'>
        <section className="introtratameintos">
            <div className="section_title section_title--introtratamientos">
                <h1>Tratamiento</h1>
            </div>
        </section>

        <section className="porque_altonivel">
            <div className="section_title section_title--porque tl-acc">
                <h2>Rellenos Faciales</h2>
            </div>

            <h3>¿Qué son los Rellenos Faciales?</h3>

            <p>Los Rellenos Faciales son uno de los tratamientos más populares en Medicina Estética hoy en día, ya que ofrecen buenos resultados sin la necesidad de someterse a una intervención quirúrgica. Estos resultados se consiguen de manera no invasiva, sin riesgos y sin efectos secundarios.</p>
            <img src={rellenof} alt='relleno facial'></img>

            <p>Son utilizados para:</p>

            <ul>
                <li>Eliminar arrugas</li>
                <li>Desvanecer surcos más marcados en el rostro</li>
                <li>Reponer volúmenes</li>
                <li>Rejuvenecer y revitalizar la piel</li>
                <li>Evitar la Flacidez Facial</li>
            </ul>

            <p>Las infiltraciones son a base de Ácido Hialurónico, Hilos de Policaprolactona, Ácido Poliláctico, Hidrociapatita Cálcica y Fosfato Tricálcico, Colágeno o Grasa Corporal.</p>
            <p>Todos los rellenos se aplican con anestesia local y pueden aplicarse de manera complementaria a otros tratamientos como la Cirugía Facial o la Toxina Botulínica.</p>

            <h3>¿Qué técnicas se utilizan para su aplicación?</h3>

            <p>Existen diferentes técnicas de infiltración de materiales de relleno, y se emplean en función de la zona a tratar, como el tipo de arruga, su localización o su profundidad.</p>

            <ul>
                <li>Técnica Lineal, de Trazado o de Tunelización: consiste en introducir la aguja en la piel y aplicar producto a la vez que se retira el agua de la zona</li>
                <li>Técnica de Depósito Punto por Punto: es la indicada para tratar zonas difíciles como ojeras, pómulos o sien</li>
                <li>Técnica de Abanico: se hace un único punto de inyección que permite cambiar la dirección de la aguja e inyectar con facilidad y precisión</li>
            </ul>

            <h3>Beneficios de los Rellenos Faciales</h3>

            <p>Los Rellenos Faciales se utilizan para rejuvenecer y revitalizar la piel del rostro de una persona. Así, mediante distintos tipos de infiltraciones se consigue dar más naturalidad al rostro a la vez que se rejuvenece gracias a la capacidad para reponer volúmenes perdidos, resaltar mejillas o pómulos y acabar con las arrugas y surcos del rostro.</p>
            <p>Con los rellenos se consigue reducir el descenso de los tejidos faciales, castigados con el paso de la edad y acabando con la sensación de que la piel de la cara cuelga y se cae, acabando con la sensación de flacidez y falta de firmeza en el rostro.</p>

            <h3>¿Qué preparación es necesaria para someterse a los Rellenos Faciales?</h3>

            <p>Antes de someterse a este tratamiento es necesario que el médico explique en qué consiste realmente este tratamiento y comprobar si se cumplen las expectativas del paciente.</p>

            <h3>Cuidados tras los Rellenos Faciales</h3>

            <p>Los riesgos de una infiltración son mínimos y lo más preocupante que pude suceder son reacciones inflamatorias locales que pueden estar acompañadas de una irritación o presión, aunque su aparición será temporal. </p>

        </section>

    </div>
    )
}

export default RellenosFaciales;