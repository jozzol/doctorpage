import React from "react";
import profile from '../imagenes de referencia/foto perfil.png'
import stars  from "../imagenes de referencia/5stars.png"
import mint from '../imagenes de referencia/certificado mint.jpeg'
import YoutubeEmbed from "./youtubeEmbed";
import { Link } from "react-router-dom";

const Home = () =>{


    return(
        <div>
            <section className="intro" id="home">
                <div className="intro_img">
                    <img src={profile} alt="foto de perfil"/>
                </div>
                <div className="section_title section_title--intro">
                    <h1>DRA. SYLVIA GARCIA</h1>
                    <p className='section__subtitle section__subtitle--intro'>MEDICINA ESTETICA</p>
                    <p>Cedula Profesional: 52868936</p>
                    <button className="btn">Pide cita ahora</button>
                </div>
            </section>

            <section className="porque_altonivel">
                <h2 className="section_title section_title--porque tl-acc">Por que es un doctor de alto nivel</h2>
                <div className="razones">
                    <div className="razones-intro">
                        <p>La Dra. Sylvia García es una especialista en Medicina Estética. Cuenta con amplia experiencia en diversas clínicas de prestigio y actualmente brinda atención en el Edificio Horizonte – Health Resources.  </p>
                    </div>
                    <div className="razones-experta ">
                        <h3 className="tl-acc">Es experta en:</h3>
                        <ul>
                            <li>Ultrasonido HIFU</li>
                            <li>Perfilado de Labios</li>
                            <li>Fibroblastos Autólogos</li>
                            <li>Toxina Botulínica</li>
                            <li>Tratamiento de Ojeras</li>
                            <li>Rellenos Faciales</li>
                            <li>Hilos Tensores</li>
                            <li>Ácido Hialurónico</li>
                            <li>Laser de cicatrices</li>
                        </ul>
                    </div>
                    <div className="razones-formacion">
                        <h3 className="tl-acc">Formación académica:</h3>
                        <p>Se formó como médico en la Universidad de La Sabana (UNISABANA) y cursó la especialidad en Medicina Estética y Láser en la Universidad del Rosario (UROSARIO). Además, se mantiene en constante actualización asistiendo a congresos, cursos y simposios relacionados con su especialidad.
                        </p>
                        <p>Debido a esto, la Dra. García es una especialista en Medicina Estética de Bogotá, Colombia. Puedes consultar con ella dando click en los botones de E-CONSULTATION, LLAMAR o PEDIR CITA.</p>
                    </div>
                    <div className="razones-link">
                        <Link to='/perfil'>
                            <button className="btn">
                                Ver perfil
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="especialista">
                <h1 className="section_title section_title--especialista">Especialista en</h1>
                <div className="servicios">
                    <div className="servicio">
                        <h3>Ultrasonido HIFU</h3>
                        <p>El ultrasonido HIFU se usa para el tratamiento del envejecimiento que se presenta en cara, cuello y brazos. Las ondas ultrasónicas focalizadas que se producen durante e...</p>
                        <Link to='/ultrasonidoHIFU'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Hilos Tensores</h3>
                        <p>¿Qué son los Hilos Tensores?  Los ...</p>
                        <Link to='/hilostensores'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Perfilado de Labios</h3>
                        <p>¿Qué es ell Perfilado de Labios?  El...</p>
                        <Link to='/hilostensores'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Ácido Hialurónico</h3>
                        <p>¿Qué son las Infiltraciones de Ácido Hialurónico? ...</p>
                        <Link to='/acidohialuronico'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Toxina botulínica</h3>
                        <p>Es una neurotoxina hecha por la bacteria llamada Clostridium botulinum. Esta toxina produce botulismo cuando se ingieren alimentos contaminados c...</p>
                        <Link to='/acidohialuronico'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Tratamiento de las Ojeras</h3>
                        <p>¿Qué es Tratamiento de las Ojeras? ...</p>
                        <Link to='/tratamientodelasojeras'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Rellenos Faciales</h3>
                        <p>¿Qué son los Rellenos Faciales? Los Rellenos F...</p>
                        <Link to='/rellenosfaciales'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Láser Quirúrgico de CO2</h3>
                        <p>¿Qué es el Láser Quirúrgico de Co2? El...</p>
                        <Link to='/laserquirurgicodec02'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Acné</h3>
                        <p>¿Qué es el Acné? El Acne...</p>
                        <Link to='/acne'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                    <div className="servicio">
                        <h3>Rejuvenecimiento Facial con Láser</h3>
                        <p>Rejuvenecimiento Facial con Láser...</p>
                        <Link to='/rejuvencecimientofacialconlaser'>
                            <button className="btn">
                            leer más
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section  className="otros_tratamientos">
                <h1 className="section_title section_title--otros">Enfermedades, Pruebas y Tratamientos</h1>
                {/* <div className="imagen_banner">
                    <img src={bannerotros} alt='' />
                </div> */}
                <div className="otros_container">
                    <ul className="otros">
                        <li className="otro">
                            <Link className="textlink" to="/acidohialuronico">Ácido Hialurónico</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="acne">Acné</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="correciondecicatrices">Corrección de Cicatrices</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="enzimasbiologicas">Enzimas Biológicas</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="estrias">Estrías</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="hilostensores">Hilos Tensores</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="laser">Láser</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="laserquirurgicodec02">Láser Quirúrgico de CO2</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="manchasdelapiel">Manchas de la Piel</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="medicinabiologica">Medicina Biológica</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="nevusolunares">Nevus o Lunares</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="perfiladodelabios">Perfilado de Labios</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="plasmaricoenplaquetas">Plasma Rico en Plaqueta</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="rejuvencimientofacial">Rejuvenecimiento Facial</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="rejuvenecimientofacialconlaser">Rejuvenecimiento Facial con Láser</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="rejuevenecimientofacialintegralsincirugia">Rejuvenecimiento Facial Integral Sin Cirugía</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="rellenodermico">Relleno Dérmico (Radiesse)</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="rellenosfaciales">Rellenos Faciales</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="toxinabotulinica">Toxina Botulínica (Botox)</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="tratamientosantienvejecimiento">Tratamiento Antienvejecimiento</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="tratamientodelacelulitis">Tratamiento de la Celulitis</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="tratamientodelasojeras">Tratamiento de las Ojeras</Link>
                        </li>
                        <li className="otro">
                            <Link className="textlink" to="ultrasonidoHIFU">Ultrasonido HIFU</Link>
                        </li>

                    </ul>
                </div>

            </section>

            <section className="contacto">
                <h2 className="section_title section_title--contacto">contacto</h2>

                <div className="card cardcontacto">
                    <p>Estamos ubicados en:</p>
                    <p>Edificio Horizonte - Health Resources</p>
                    <p> Cl. 127 No. 20 – 78, Consultorio 607 57 - Bogotá</p>
                    <p> (+57) 3014616577</p>
                    
                </div>

                <div className="solicitudcontacto">
                    <h3>¿Tienes alguna duda?</h3>
                    <p>contactanos a nuetro whatsapp</p>
                <a
                    href="https://wa.me/573014616577"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                </a>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3650037963157!2d-74.05351018523763!3d4.706497796581516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f854acf92a265%3A0xc9810ce74ef0efa6!2sEdificio%20Horizonte%20Health%20Resources!5e0!3m2!1ses-419!2sco!4v1651860873748!5m2!1ses-419!2sco" 
                    width="600" 
                    height="450"   
                    style={{border:"0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="mapa">    
                    </iframe>
            </section>

            <section className="valoracion_pacientes">
                <h2 className="section_title section_title--valoracion">Valoraciones de pacientes</h2>
                <div className="cards">

                    <div className="card">
                        <img src={stars} alt='estrellas'/>
                        <p className="testimonio">Me encanto mi cita con la Dra Sylvia Garcia, me aplique botox y acido Hialurónico, no me dolio, no me salieron morados y me veo natural y mucho mas joven</p>
                        <p className="fecha_testimonio"> M.S. | Bogota 12/10/2019</p>                   
                    </div>
                    <div className="card">
                        <img src={stars} alt='estrellas'/>
                        <p className="testimonio">Excelente Doctora, muy Profesional!!!!!</p>
                        <p className="fecha_testominio"> D.G.C.S 16/09/2020</p>                   
                    </div>
                </div>
            </section>

            <section className="imagenes">
                <h2 className="section_title section_title--imagenes">Imagenes</h2>
                <img src={mint} alt='certmint'/>
            </section>

            <section className="videos">
                <h2 className="section_title section_title--video">Videos</h2>
                <div className="videocontainer">
                    <div className="videoitem">
                        <div className="video">
                            <YoutubeEmbed embedId="rj_5Xuz99XIk" />
                        </div>
                        </div>
                    <div className="videoitem">
                        <div className="video">
                            <YoutubeEmbed embedId="1kOVK23qnUE" />
                        </div>
                    </div>
                    <div className="videoitem">
                        <div className="video">
                            <YoutubeEmbed embedId="BwwkTNEnerc" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;