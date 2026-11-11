import { Screen } from "./Screen"
import { ProjectCard } from "./ProjectCard"

const projects = [
    {
        id: 1,
        title: 'Mi portafolio',
        description: 'Sitio personal hecho con React y Vite.',
        tags: ['React', 'Vite', 'CSS'],
    },
    {
        id: 2,
        title: 'Lista de tareas',
        description: 'Aplicación para organizar pendientes.',
        tags: ['JavaScript', 'HTML'],
    },
    {
        id: 3,
        title: 'Calculadora',
        description: 'Calculadora básica con diseño móvil.',
        tags: ['JavaScript', 'CSS'],
    }
]

export const ProjectCard = ({ title, description, tags = [] }) => {
    return (
        <article className="card">
            <h2>{title}</h2>
            <p className="card-text">{description}</p>
            <ul className="tag-list">
                {
                    tags.map((tag => (
                        <li key={tag} className="tag">{tag}</li>
                    )))
                }
            </ul>
        </article>
    )
}
