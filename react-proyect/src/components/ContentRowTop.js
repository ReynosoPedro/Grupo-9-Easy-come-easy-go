import React,{useState,useEffect} from "react";
import LastProductInDb from './LastProductInDb';
import VehiculosInDb from './VehiculosInDb';
import CategoriesinDb from './CategoriesinDb'
import ContentRowProducts from './ContentRowProducts';
function ContentRowTop(){

	const [productos, setProductos] = useState(["productos"])

	let ultimoProduct;
	
	const fetchProductos = async () => {
	  const res = await fetch("http://localhost:3050/api/products/", {
		  method: 'GET',
		  headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
		  },
	  })
	  const productoArr = await res.json()
	  setProductos(productoArr.data)
  }
  useEffect(()=>{
	  fetchProductos()
  },[])
  
  if(productos[productos.length-1].id){
	  ultimoProduct = productos[productos.length-1]
	}
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProductInDb {...ultimoProduct}/>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<VehiculosInDb />

						{/*<!--End Genres In Db-->*/}	
						<CategoriesinDb />	
					</div>
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;