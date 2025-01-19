import React from 'react';

export default function Bienvenida() {
    return (
        <div className="container mt-4 ">
    <div className="row">

        <aside className="mb-4 col-md-4">
            <div className="p-3 border rounded bg-light">
                <h4 className='fs-3 '>Barra Lateral</h4>
                <p>Contenido adicional o enlaces relacionados.</p>
                <div className="my-1 github d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mx-[13px] bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                <a href="https://github.com/Ander2211" >Ander2211</a>
                </div>
            </div>
        </aside>

        <main className="col-md-8">
            <div className="p-3 mb-4">
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