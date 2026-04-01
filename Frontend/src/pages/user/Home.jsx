import '../../App.css'

function Home() {
    return(
        <>
        <div>
            <img src="/img/banner_001.jpg" className="banner_pagina" alt="NO IMAGE" />
            <div className="color-testing home-titulo_slogan">
                <p>Home</p>
            </div>
            <div className="color-testing home-mascotas row">
                <div className="col-4 p-3">
                    <div className="home-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
                <div className="col-4 p-3">
                    <div className="home-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
                <div className="col-4 p-3">
                    <div className="home-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
            </div>
            <div className="color-testing home-contacto">
                <p>Contactanos</p>
                <p>TEMPORAL DESCRIPTION</p>
                <p>TEMPORAL DESCRIPTION</p>
                <button className="btn-testing">Contactar</button>
            </div>
        </div>
        </>
    )
}
export default Home