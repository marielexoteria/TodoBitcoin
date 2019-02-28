const Noticia = (props) => {
    //haciendo destructuring para extraer la info a desplegar
    const {urlToImage, url, title, description, source} = props.noticia;

    let imagen;
    if (urlToImage !== '') {
        imagen = <img src={urlToImage} alt={title} className="card-img-top" />
    } else {
        imagen = <img src='https://raw.githubusercontent.com/marielexoteria/AppNoticias/master/src/img/fallback_no_image.png' alt={title} />
    }

    return ( 
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary d-block">Leer Noticia</a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;