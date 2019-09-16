const es = {
    components: {
        navigation: {
            title: 'Castillo',
            subtitle: 'Barberia',
            index: 'Inicio',
            appointments: 'Mis Citas',
            contactUs: 'Contacto',
            language: 'Idioma',
        },
        modal: {
            title: 'Confirmación',
            accept: 'Aceptar',
            cancel: 'Cancelar',
            takeAppointTittle: ''
        },
        register: {
            name: 'Nombre',
            surname: 'Surname',
            email: 'E-Mail',
            password: 'Contraseña',
            repeatPassword: 'Repetir Contraseña',
            button: 'Registrar',
        },
        login: {
            email: 'E-Mail',
            password: 'Contraseña',
            button: 'Acceder',
            noAccount: '¿No tienes cuenta?',
            accessToInvitation:
                'Pulsa aquí para canjear tu codigo de invitación.',
        },
        contact: {
            titleSchedule: 'Horarios:',
            textMondayToFriday: 'Lunes a viernes: 10:00-14:00 / 17:00-21:00',
            textSaturday: 'Sabado: 10:00-14:00',
            titlePhone: 'Teléfono:',
            textPhone: '+34 679839952',
            titleAddress: 'Dirección:',
            textAddress: 'Av. Blas Infante, 105, 29120',
            textCity: 'Alhaurín el Grande, Málaga',
        },
        appointments: {
            reserved: 'Reservado',
        },
    },
    user: {
        settings: 'Configuración',
        logof: 'Cerrar sesión',
    },
    userConfig: {
        configText: 'Configuración',
        userText: 'Usuario',
        adminText: 'Administrador',
        user: {
            infoText: 'Informacion',
            securityText: 'Seguridad',
            adminText: 'Administrador',
            info: {
                infoText: 'Editar información de usuario',
                emailText: 'Email',
                newEmailText: 'Nuevo Email',
                emailSaveButton: 'Guardar',
                userNameText: 'Nombre de usuario',
                newUserNameText: 'Nuevo nombre de usuario',
                userNameButton: 'Guardar',
                emailShort: 'El email es demasiado corto',
                emailSame:
                    'El nuevo nuevo email tiene que ser distinto al actual',
                emailNotType: 'El valor intruducido no es tipo email',
                emailEmpty: 'El campo no puede estar vacio',
                emailChangeMessage: 'El email de usuario ha sido actualizado',
                usernameEmpty: 'El campo no puede estar vacio',
                usernameSame:
                    'El nuevo nuevo nombre de usuario tiene que ser distinto al actual',
                usernameChangeMessage:
                    'El nombre de usuario ha sido actualizado',
            },
            security: {
                passChangeTittle: 'Cambio de contraseña',
                actualPassText: 'Contraseña Actual',
                newPassText: 'Nueva Contraseña',
                repeatNewPassText: 'Repetir Nueva Contraseña',
                changePassButton: 'Guardar',
                passChangedMessage:
                    'La contraseña ha sido actualizada con exito',
            },
        },
        admin: {},
    },
    titles: {
        appointments: 'Citas',
        userAppointments: 'Mis Citas',
        contact: 'Contacto',
        register: 'Registro',
        login: 'Iniciar sesion',
        language: 'Idioma',
    },
    week: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miercoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sabado',
        sunday: 'Domingo',
    },
    month: {
        january: 'Enero',
        february: 'Febrero',
        march: 'Marzo',
        april: 'Abril',
        may: 'Mayo',
        june: 'Junio',
        july: 'Julio',
        august: 'Agosto',
        september: 'Septiembre',
        october: 'Octubre',
        november: 'Noviembre',
        december: 'diciembre',
    },
    languages: {
        spanish: 'Español',
        english: 'Ingles',
    },
};

export default es;
