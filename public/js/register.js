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
        }
        if(usuario.value == ''){
            errors.push('Ingrese un Usuario')
            usuario.classList.add('campos-invalidos')
        }
        if(password.value == ''){
            errors.push('Ingrese una contraseña')
            password.classList.add('campos-invalidos')
        }
        if(fechadenacimiento.value == ''){
            errors.push('Ingrese su Fecha de nacimiento')
            fechadenacimiento.classList.add('campos-invalidos')
        }
        if(email.value == ''){
            errors.push('Ingrese un Email')
            email.classList.add('campos-invalidos')
        }
        if(celular.value == ''){
            errors.push('Ingrese un numero de Celular')
            celular.classList.add('campos-invalidos')
        }
        if(categoria.value == ''){
            errors.push('Ingrese su categoria')
            categoria.classList.add('campos-invalidos')
        }
        if(image.value == ''){
            errors.push('Ingrese una imagen')
            image.classList.add('campos-invalidos')
        }


    })
}