import logo from '../../img/logo-tmdb.png'

import './Footer.css'

function Footer() {
    return (
        <footer className="bg-dark text-light lead">
            <div className="row g-0">
                <div className="col p-5 d-flex flex-column text-center">
                    <div className="API-references mb-3">
                        <p>
                            This application uses an API TMDB Database
                        </p>
                        <img src={logo} alt="Logo TMDB API"  className="logo-tmdb"/>
                    </div>
                    <div className="contact">
                        <p>Contacts</p>
                        <div className="social-media d-flex justify-content-center">
                            <p className="d-flex align-items-center">
                                <ion-icon name="mail-outline"></ion-icon>petersondev.profissional@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer