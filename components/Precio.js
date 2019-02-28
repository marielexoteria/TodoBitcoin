const Precio = (props) => {
    const {rate_float, code} = props.precio;
    const rate = rate_float.toFixed(2); //para que redondee el precio a 2 cifras decimales porque el float puede tener más de 2

    return ( 
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Precio del Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: ${rate} {code}</h4>
            </div>
        </div>
     );
     //no se pudo desplegar las fluctuaciones del precio a 1 hora, a 24 horas y a 7 días según el proyecto porque el API de Coindesk provee el precio hace 24 horas o dentro de un rango de fechas, pero lo que devuelve es una fecha específica y me es difícil sacar el objeto porque cuando la fecha cambie, el objeto en el código no va a cambiar. Por ej. el 28 de febrero hago el query y el histórico a 24 horas me da info con "2019-02-27", el cual yo tendría que escribir en alguna variable. Cuando la fecha cambie al 1 de marzo, el código no refleja el precio al 28 de febrero. Por lo tanto, solamente desplegaré el precio del bitcoin al momento. Info en https://www.coindesk.com/api
}
 
export default Precio;