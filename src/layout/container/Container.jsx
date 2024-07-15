import './Container.css'

function Container({children}) {
    return (
        <main>
            <div className="container bg-light shadow-lg bg-body-tertiary  p-5 mt-5 mb-5">
                {children}
            </div>
        </main>
    )
}

export default Container