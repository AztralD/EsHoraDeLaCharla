import Menu from "../Components/Menu";

function PF() {
    return (
        <div className="MenuPrincipal">
            <Menu />
            <h1 className="TituloCentrado">Preguntas Frecuentes</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ¿Cuál es la anatomía sexual del hombre?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">El sistema reproductor masculino está formado por el pene, el escroto, los testículos, el epidídimo, el conducto deferente, la próstata y las vesículas seminales. El pene y la uretra forman parte del sistema urinario y reproductor.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            ¿Cuál es la función de los labios menores?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Protegen las aberturas de la uretra y la vagina de la irritación y las infecciones, contribuyen a la lubricación y son una parte sensible del clítoris que puede aumentar el placer sexual y la sensibilidad durante el coito. 
</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ¿Cuáles son las ETS más comunes?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Según la Organización Mundial de la Salud (OMS), son la clamidiasis, la gonorrea, la tricomoniasis y la sífilis. Otras ETS también comunes incluyen el herpes simple, el VIH, la hepatitis B y el virus del papiloma humano (VPH).</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            ¿Cuáles son los tres pilares del consentimiento?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Para que el consentimiento sea válido, debe ser voluntario e informado y la persona que consiente debe tener la capacidad de tomar la decisión.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            ¿Qué anticonceptivo es mejor y no engorda?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No existe un "mejor" método universal para todas las personas, pero generalmente los que se asocian menos con el aumento de peso son el dispositivo intrauterino de cobre (DIU) y el diafragma, ya que son métodos no hormonales o con hormonas locales.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseFive">
                            ¿Por qué es incomodo hablar de sexualidad?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Muchas veces, sentimos vergüenza de hablar de sexo porque pensamos que eso nos hace quedar como personas “promiscuas”, cuando en realidad la sexualidad es parte de la naturaleza y debería ser tratada con la misma seriedad que cualquier otro aspecto de nuestra salud.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseFive">
                            ¿Por qué es importante hablar de la sexualidad de manera abierta y libre de prejuicios?
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Reconocer la sexualidad como parte integral del desarrollo humano es fundamental para garantizar el ejercicio pleno de los derechos, el bienestar y la dignidad de todas las personas.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PF;