import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import '../index.css'

function Start() {
    return (
        <div className="MenuPrincipal">
            <Menu />
            <h2 className="TituloCentrado">¡Bienvenido!</h2>
            <h3 className="TituloCentrado">"Con la charla y el preservativo, construiremos un buen camino."</h3>
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://img.freepik.com/vector-gratis/movimiento-genero-neutral-que-rompe-normas_23-2148541423.jpg?semt=ais_hybrid&w=740&q=80" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="text-dark"> CONCIENTIZAR</h1>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://criticasur.com.ar/uploads/noticias/5/20190920203702_0036997319.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-warning">FOMENTAR E INCENTIVAR</h2>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://mentesanapsicologia.com/wp-content/uploads/2025/03/freepik__upload__2399-1024x621.jpeg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-dark">AUTOESTIMA</h2>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://barcelona.derosemeditation.es/wp-content/uploads/2024/04/shutterstock_1874170642-2-1024x683.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-dark">PROFUNDIZACION</h2>
                                <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://img.freepik.com/fotos-premium/manos-cuidado-personal-hombre-productos-belleza-estudio-rostro-natural-rutina-aseo-cuidado-piel-bienestar-joven-modelo-masculino-tratamiento-salud-e-higiene-aislado-fondo-azul_590464-211206.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-white">CUIDADO PERSONAL</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            
            <h4>Sexualidad</h4>
            <ul className="BigList">
                <li>Buen Manejo del Preservativo</li>
                <li>Buena Higiene</li>
                <li>Educación sobre los Medicamentos</li>
                <li>Prácticas Constructivas</li>
                <li>Embarazos</li>
                <li>ETS e ITS</li>
                <li>Anatomía y Autodescubrimiento</li>
                <li>Perspectiva Socioeconomica</li>
            </ul>
            <br />
            <br />
            <Footer />
        </div>
    );
}
export default Start;