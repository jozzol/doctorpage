import laserdeC02 from '../imgtratamientos/laserC02.png'

const LaserC02 = () =>{

    return(
    <div className='content'>
        <section className="introtratameintos">
            <div className="section_title section_title--introtratamientos">
                <h1>Tratamiento</h1>
            </div>
        </section>

        <section className="porque_altonivel">
            <div className="section_title section_title--porque tl-acc">
                <h2>Láser Quirúrgico de Co2</h2>
            </div>

            <h3>¿Qué es el Láser Quirúrgico de Co2?</h3>
            <p>El Láser Quirúrgico de Co2 es un tipo de Láser utilizado en cirugía Dermatológica y Ginecológica. Se trata de un procedimiento sencillo que se lleva a cabo de forma ambulatoria, con Anestesia mediante crema. Es rápido, seguro y no doloroso.</p>

            <img src={laserdeC02} alt='laser de C02'></img>

            <h3>¿Por qué se realiza?</h3>

            <p>Es un Láser muy preciso que permite eliminar de manera muy eficaz cualquier tipo de lesión Dermatológica, incluso aquellas de naturaleza benigna que se eliminan por motivos estéticos.</p>
            <p>En Ginecología, este tipo de Láser permite vaporizar y cortar, respetando los tejidos cercanos, para conseguir reducir el daño quirúrgico. De esta manera se podrá lograr una recuperación postoperatoria más rápida.
En Ginecología se puede tratar, entre otras patologías, éstas:
</p>

            <ul>
                <li>La Mucosa Vaginal y las paredes de esta</li>
                <li>La laxitud de las Paredes</li>
                <li>La Sequedad Vaginal</li>
                <li>La Incontinencia Urinaria</li>
                <li>La Corrección de los Labios Menores más largos de lo normal y la Malanosis Vulvar.</li>
                <li>En la especialidad de Dermatología, este tratamiento se usa para eliminar Verrugas, Nevus Maduros, Fibromas, y muchas otras lesiones</li>
            </ul>

            <h3>¿En qué consiste?</h3>

            <p>El procedimiento de eliminación de lesiones con Láser Co2 es muy rápido y cómodo para el paciente.
                <br/>
                Una vez anestesiada la lesión, se produce una Vaporización selectiva de la misma, muy precisa, de forma que el cirujano puede controlar la profundidad exacta a la que quiere llegar.
                <br/>
                De esta forma conseguimos eliminar la lesión de forma muy precisa minimizando el riesgo de una cicatriz posterior.
            </p>

            <h3>¿Qué se siente tras la intervención?</h3>

            <p>Durante los primeros días el paciente tendrá una pequeña costra en la zona, que se desprende sola, dejando una zona rojiza que posteriormente recupera el color normal de la piel, quedando en la mayoría de los casos prácticamente imperceptible.</p>

        </section>

    </div>
    )
}

export default LaserC02;