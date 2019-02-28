import MasterPage from '../components/Master';

//importando depedencias
import fetch from 'isomorphic-unfetch';

//importando componentes
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2 className="my-4">Precio del Bitcoin</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias={props.noticiasBitcoin}
                />
            </div>

            <div className="col-md-4">
                <h2 className="my-4">Próximos Eventos Bitcoin</h2>
                <Eventos 
                    eventos={props.eventosBitcoin}
                />
            </div>
        </div>
    </MasterPage> 
);

Index.getInitialProps = async () => {
    const precio = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json"); //usando un api diferente porque CoinMarketCap no es fácil de trabajar y cambió desde que se hizo el curso.
    const noticias = await fetch ("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-28&sortBy=publishedAt&apiKey=903c8f80e07c4cc2921d6738e73455dd&language=es");
    const eventos = await fetch ("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&location.address=Mexico&token=S62EQYQZOMBNOXDGOTQZ");

    //convirtiendo los resultados a JSON
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();
    
    //el proyecto en el curso también despliega los cambios en el precio hace 1 hora, hace 24 horas y hace una semana pero no se pudo. Ver nota explicativa en Precio.js

    return {
        precioBitcoin: resPrecio.bpi.USD,
        noticiasBitcoin: resNoticias.articles,
        eventosBitcoin: resEventos.events
    }
}

export default Index;