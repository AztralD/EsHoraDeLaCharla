import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

function Start() {
    return (
        <div className="MenuPrincipal">
            <Menu />
            <h2 className="TituloCentrado">¡Bienvenido!</h2>
            <h3 className="TituloCentrado">"Con la charla y el preservativo, construiremos un buen camino."</h3>
            <br />
            <img src="https://static.vecteezy.com/system/resources/previews/020/625/686/non_2x/one-single-line-drawing-of-female-obstetrics-and-gynecology-doctor-talking-to-patient-and-explain-the-womb-condition-pregnant-health-care-concept-continuous-line-draw-design-illustration-vector.jpg" width="50%" class="FloatImg1"  alt="dima"/>
            <h4>Esta página fue creada para la educación de niños, jóvenes y adultos para su obtención de conocimiento sobre el sexo, la sexualidad y las precauciones con esta.</h4>
            <ul className="BigList">
                <li>Concientización</li>
                <li>Fomentar e Incentivar</li>
                <li>Profundizar y Objetivizar</li>
                <li>Autoestima </li>
                <li>Cuidado Personal</li>
            </ul>
            <br />
            <br />
            <br />
            <img src="https://i0.wp.com/verdeguanajuato.com/wp-content/uploads/2023/10/Recurso-1.png?fit=477%2C319&ssl=1" width="45%" class="FloatImg2" alt="pipi" />
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