const Evento = (props) => {
    //haciendo destructuring para extraer la info que se quiere desplegar
    const {name, url, description} = props.info;

    //para desplegar los primeros 150 caracteres del título
    let titulo = name.text;
    if (titulo.length > 150) { //siempre habrá un título y por eso se busca comparar su longitud con length()
        titulo = titulo.substr(0,150) + "...";
    }

    //para que solamente se desplieguen 250 caracteres de la descripción del evento, si la hubiere
    let desc = description.text;
    if (desc) {
        desc = desc.substr(0,250) + "...";
    }

    return (
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{desc}</p>
        </a>
      );
}
 
export default Evento;