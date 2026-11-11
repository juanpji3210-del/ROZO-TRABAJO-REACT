import { Screen } from '../components/Screen.jsx'

export const Contact = () => {
    return (
        <Screen title="Contacto">
            <ul className="contact-list">
                <li>
                    <a className="contact-link" href="mailto:ana@correo.com">
                        Correo: erozog125@gmail.com
                    </a>
                </li>
                <li>
                    <a className="contact-link" href="https://github.com/">
                        GitHub: erozog125
                    </a>
                </li>
            </ul>
        </Screen>
    )
}