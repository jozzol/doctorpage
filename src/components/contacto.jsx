

const Contacto =() =>{

    return(
        <div>
            <section className="contacto" id="contacto">
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

        </div>
    )
}

export default Contacto;