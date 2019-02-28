import Head from 'next/head';

//importando componentes
import Navegacion from './Navegacion';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Todo Bitcoin</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
        </Head>

        <Navegacion />
        <div className="container mt-4">
        {props.children}
        </div>
    </div>
); //{props.children} aquí "children" se refiere a todos los elementos y el contenido que está dentro de <MasterPage></MasterPage>, sino no se despliega en las páginas


export default MasterPage;