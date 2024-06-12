export default function LogoContainer () {
    return (
        <section className="logo-container">
            <div className="logo-info">
                <h1 className="logo-info__title">
                    <span>Vite</span><br />
                    Next Generation<br />
                    Frontend Tooling
                </h1>
                <p className="logo-info__text">Get ready for a development enviroment that can finally catch up with you</p>
                
                <div className="button-container">
                    <button className="button button--blue">Get started</button>
                    <button className="button button--gray">Why Vite?</button>
                    <button className="button button--gray">View on Github</button>
                    <button className="button button--blue">🎉 ViteConf 23!</button>
                </div>
            </div>

            <div className="logo-image">
                <img src="https://vitejs.dev/logo-with-shadow.png"  className="logoVite" alt="LogotipoVite" />
            </div>
        </section>
    )
}