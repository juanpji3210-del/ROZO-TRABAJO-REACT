import { Children } from "react"

// props
export const Screen = ({ title, children }) => {
    return (
        <main className="screen">
            <h1 className="screen-title">{title}</h1>
            {Children}
        </main>
    )
}
