import { Screen } from './Screen'

export const Home = () => {
    const name = "Juan Pablo"
    const role = "Desarrollador de agentes de IA"
    return (
        <Screen title='Inicio'>
            <section className="hero">
                <div className="avatar">JP</div>
                <h2>{name}</h2>
                <p className="hero-role">{role}</p>
                <p>
                    Mi primer portafolio en React con jsx.
                </p>
            </section>
        </Screen>
    )
}