window.onload = function(){

    let form = document.querySelector('form')
    form.marca.focus()

    form.addEventListener('submit', function(e){
    e.preventDefault()

        let errors = []

        let marca = document.querySelector('#marca')

        let modelo = document.querySelector('#modelo')

        let kilometraje = document.querySelector('#kilometraje')

        let precio = document.querySelector('#precio')

        let color = document.querySelector('#color')

        let year = document.querySelector('#year')

        let transmision = document.querySelector('#transmision')

        let condicion = document.querySelector('#condicion')

        let categoria = document.querySelector('#categoria')

        let image = document.querySelector('#image')
        console.log(marca );
        console.log(modelo);
        console.log(kilometraje);
        console.log(precio );
        console.log(color);
        console.log(year);
        console.log( transmision  );
        console.log(condicion );
        console.log(categoria );
        console.log(image );        

        if(marca.value == ''){
            errors.push('Debe ingresar la marca del vehiculo')
            marca.classList.add('campos-invalidos')
        }else{
            marca.classList.add('campos-validos')
            marca.classList.remove('campos-invalidos')
        }

        if(modelo.value == ''){
            errors.push('Debe ingresar el modelo del vehiculo')
            modelo.classList.add('campos-invalidos')
        }else{
            modelo.classList.add('campos-validos')
            modelo.classList.remove('campos-invalidos')
        }

        if(kilometraje.value == ''){
            errors.push('Debe ingresar el kilometraje del vehiculo')
            kilometraje.classList.add('campos-invalidos')
        }else{
            kilometraje.classList.add('campos-validos')
            kilometraje.classList.remove('campos-invalidos')
        }

        if(precio.value == '' || precio.value == 0){
            errors.push('Debe ingresar el precio del vehiculo')
            precio.classList.add('campos-invalidos')
        }else{
            precio.classList.add('campos-validos')
            precio.classList.remove('campos-invalidos')
        }

        if(color.value == ''){
            errors.push('Debe ingresar el color del vehiculo')
            color.classList.add('campos-invalidos')
        }else{
            color.classList.add('campos-validos')
            color.classList.remove('campos-invalidos')
        }

        if(year.value == ''){
            errors.push('Debe ingresar el año de frabricación del vehiculo')
            year.classList.add('campos-invalidos')
        }else{
            year.classList.add('campos-validos')
            year.classList.remove('campos-invalidos')
        }


        if(transmision.value == ''){
            errors.push('Debe ingresar el tipo de transmisión que usa su vehiculo')
            transmision.classList.add('campos-invalidos')
        }else{
            transmision.classList.add('campos-validos')
            transmision.classList.remove('campos-invalidos')
        }


        if(condicion.value == ''){
            errors.push('Ingrese en que condicion se encuentra su vehiculo')
            condicion.classList.add('campos-invalidos')
        }else{
            condicion.classList.add('campos-validos')
            condicion.classList.remove('campos-invalidos')
        }

        if(categoria.value == ''){
            errors.push('Ingrese la categoria a la que pertenece su vehiculo')
            condicion.classList.add('campos-invalidos')
        }else{
            categoria.classList.add('campos-validos')
            categoria.classList.remove('campos-invalidos')
        }
        
        

        if(image.value == ''){
            errors.push('Ingrese una imagen')
            image.classList.add('campos-invalidos')
        }else{
            image.classList.add('campos-validos')
            image.classList.remove('campos-invalidos')
        }

        

        let campError= document.querySelector('.errorescamp');
        campError.classList.add('mensaje-alerta')
        campError.innerHTML='';
        if(errors.length > 0){
            for(let i = 0; i < errors.length;  i ++){
                campError.innerHTML += `<li> ${errors[i]} </li>`
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Asegurate de completar los campos!',
                    
                })
            }
        }else{
            Swal.fire(
                'Excelente!',
                'Tu registro fue realizado con exito!',
                'success'
            )
        }



    })
 
}