import Link from 'next/link';

const Navegacion = () => ( //este arrow function es lo mismo que usar {} y return ();
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">Todo Bitcoin</a></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link href="/"><a className="nav-link">Inicio</a></Link></li>
                    <li className="nav-item"><Link href="/nosotros"><a className="nav-link">Nosotros</a></Link></li>
                </ul>
            </div>
        </div>

    </nav>
); //para reescribir estilos de CSS en vez de hacer un archivo aparte, se puede escribir dentro del archivo donde se encuentra lo que se quiere cambiar, por ej.:
/*
    <style jsx> {` 
        h1 {
            color: #fff;
        }
    `}
    </style>
*/

export default Navegacion;