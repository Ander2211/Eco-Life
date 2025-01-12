import React from 'react';

export default function Bienvenida() {
    return (
        <div className="container mt-4 ">
    <div className="row">

        <aside className="mb-4 col-md-4">
            <div className="p-3 border rounded bg-light">
                <h4 className='fs-3 '>Barra Lateral</h4>
                <p>Contenido adicional o enlaces relacionados.</p>
            </div>
        </aside>

        <main className="col-md-8">
            <div className="p-3 mb-4 bg-white border rounded">
                <h1 className='fs-3'>Bienvenido</h1>
                <p>"EcoLife" es un espacio dedicado a inspirar y educar sobre la importancia de adoptar prácticas sostenibles
                    para cuidar nuestro planeta. En un mundo donde el cambio climático y el impacto ambiental son retos cada
                    vez más urgentes, este sitio busca empoderarte con información clara y acciones prácticas que puedes implementar
                    en tu vida diaria. Queremos ser el puente entre la conciencia y el cambio, ayudándote a tomar decisiones más
                    verdes para construir un futuro más limpio y saludable. <br></br>

                    Propósito principal:

                    </p>
                    <br />

                <li>Concienciar sobre los efectos del cambio climático.</li>
                <li className='py-2'>Promover hábitos sostenibles que beneficien a las personas y al planeta.</li>
                <li>Proveer recursos, consejos y datos clave para hacer la sostenibilidad accesible para todos.</li>

            </div>

        </main>
    </div>
</div>
    );
}