import Menu from "../Components/Menu";
import Video from "../Components/video";
function MA() {
    return (
        <div className="MenuPrincipal">
            <Menu />
            <h1>Metodos Anticonceptivos</h1>
            <h2>¿Que son?</h2>
            <img src="https://masvitae.com/wp-content/uploads/2021/04/anticonceptivos.jpg" width="40%" className="FloatImg2" alt="nosexo" />
            <p>Los métodos anticonceptivos son esenciales para prevenir embarazos no deseados y planificar de forma consciente. Este tema abarca métodos de barrera, hormonales, de emergencia y naturales, explicando su efectividad y posibles efectos secundarios. También orienta sobre cómo elegir el método adecuado según cada persona y sus necesidades. Aprender sobre anticoncepción permite tomar decisiones informadas y responsables sobre la vida sexual y reproductiva.</p>
            <p>Existen varios tipos de anticonceptivos, los cuales se pueden clasificar en función de su composición y mecanismo de acción. Se clasifican de esta manera:</p>
            <ul>
                <li>Masculinos o Femeninos: En función de si lo usa el hombre o la mujer.</li>
                <li>Orales o No Orales: Hace referencia a si los anticonceptivos se toman en forma de pastillas o si se colocan en otro lugar del cuerpo.</li>
                <li>Hormonales o No Hormonales: En base a si incluyen hormonas en su composición.</li>
                <li>Temporales o Permanentes: En función de la duración de la anticoncepción.</li>
                <li>Reversibles o Irreversibles: Hace referencia a la esterilización total del hombre o la mujer.</li>
            </ul>
            <img src="https://www.unipiloto.edu.co/wp-content/uploads/2020/11/natural.jpg" width="40%" className="FloatImg1" alt="sexono" />
            <p>Hay algo llamado "anticonceptivo natural". Este mecanismo de acción de los anticonceptivos se basan en el control del ciclo menstrual para evitar mantener relaciones sexuales en los días fértiles de la mujer, que son aquellos cercanos al momento de la ovulación. Popularmente se conoce a este anticonceptivo natural como Ogino-knaus. A pesar de ser un método anticonceptivo sin costo, no es un método muy seguro. Su eficacia anticonceptiva no supera el 75% y, además, no protege frente a las enfermedades de transmisión sexual (ETS).</p>
            <p>Algunos métodos anticonceptivos son:</p>
            <ul>
                <li>Píldoras Anticonceptivas: Pastillas que se toman diariamente y liberan hormonas para evitar la ovulación. </li>
                <li>Implante Subdérmico: Una varilla que se implanta bajo la piel y libera hormonas durante varios años. </li>
                <li>Inyecciones Anticonceptivas: Se aplican periódicamente para prevenir el embarazo y pueden ser de diferentes duraciones. </li>
                <li>Parche y Anillo Vaginal: Dispositivos que liberan hormonas y se aplican en la piel o se insertan en la vagina, respectivamente</li>
                <li>DIU Hormonal: Un dispositivo intrauterino que libera progesterona para prevenir el embarazo. </li>
                <li>Preservativos (Condones): Fundas de látex o poliuretano que se usan durante el coito para evitar el paso del esperma. Son el único método que protege contra las ITS. </li>
                <li>Diafragma: Una copa de silicona o látex que se coloca en la vagina cubriendo el cuello uterino. </li>
                <li>DIU de Cobre: Un pequeño dispositivo que se inserta en el útero y dificulta el movimiento de espermatozoides y óvulos</li>
                <li>Anticoncepción de Emergencia (AIE): Pastillas o métodos que se usan después de una relación sexual sin protección para prevenir un embarazo</li>
                <li>Ligadura Tubaria: Un procedimiento quirúrgico para mujeres que bloquea o corta las trompas de Falopio. </li>
                <li>Vasectomía: Un procedimiento quirúrgico para hombres que interrumpe los conductos deferentes, impidiendo que los espermatozoides lleguen al semen.</li>
            </ul>
            <Video />
        </div>
    );
}

export default MA;