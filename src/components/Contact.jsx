import { Screen } from '../components/Screen.jsx'

export const Contact = () => {
    return (
        <Screen title="Contacto">
            <ul className="contact-list">
                <li>
                    <a className="contact-link" href="mailto:ana@correo.com">
                        Correo: juanpji3210@gmail.com
                    </a>
                </li>
                <li>
                    <a className="contact-link" href="https://github.com/juanpji3210-del">
                        GitHub: juanpji3210
                    </a>
                </li>
            </ul>
        </Screen>
    )
}