import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 21,
    icono: "fas fa-car",
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios",
    valor: 2,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total de categorias",
    valor: 10,
    icono: "fas fa-cat",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;