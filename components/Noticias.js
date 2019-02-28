import Noticia from './Noticia';

const Noticias = (props) => {
    return (
        <div className="row">
            {props.noticias.map((noticia) => ( //este prop se recibe desde App.js
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
        
      );
}
 
export default Noticias;