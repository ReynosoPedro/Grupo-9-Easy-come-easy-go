window.onload = function(){

    let form = document.querySelector('form')
    form.nombre.focus()

    form.addEventListener('submit', function(e){
    e.preventDefault()

        let errors = []

        let nombre = document.querySelector('#nombre')

        let usuario = document.querySelector('#usuario')

        let password = document.querySelector('#password')

        let fechadenacimiento = document.querySelector('#fechadenacimiento')

        let email = document.querySelector('#email')

        let celular = document.querySelector('#celular')

        let categoria = document.querySelector('#categoria')

        let image = document.querySelector('#image')


        if(nombre.value == ''){
            errors.push('Ingrese su Nombre completo')
            nombre.classList.add('campos-invalidos')
        }else{
            nombre.classList.add('campos-validos')
            nombre.classList.remove('campos-invalidos')
        }

        if(usuario.value == ''){
            errors.push('Ingrese un Usuario')
            usuario.classList.add('campos-invalidos')
        }else{
            usuario.classList.add('campos-validos')
            usuario.classList.remove('campos-invalidos')
        }

        if(password.value == ''){
            errors.push('Ingrese una contraseña')
            password.classList.add('campos-invalidos')
        }else{
            password.classList.add('campos-validos')
            password.classList.remove('campos-invalidos')
        }

        if(fechadenacimiento.value == ''){
            errors.push('Ingrese su Fecha de nacimiento')
            fechadenacimiento.classList.add('campos-invalidos')
        }else{
            fechadenacimiento.classList.add('campos-validos')
            fechadenacimiento.classList.remove('campos-invalidos')
        }

        if(email.value == ''){
            errors.push('Ingrese un Email')
            email.classList.add('campos-invalidos')
        }else{
            email.classList.add('campos-validos')
            email.classList.remove('campos-invalidos')
        }

        if(celular.value == ''){
            errors.push('Ingrese un numero de Celular')
            celular.classList.add('campos-invalidos')
        }else{
            celular.classList.add('campos-validos')
            celular.classList.remove('campos-invalidos')
        }

        if(categoria.value == ''){
            errors.push('Ingrese su categoria')
            categoria.classList.add('campos-invalidos')
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