const es = {
    components: {
        loginInputs: {
            email: 'E-Mail',
            password: 'Contraseña',
            inputEmpty: 'Porfavor completa este campo.',
            emailInvalid:
                'Correo electrónico erroneo. El campo de correo electrónico debe tener "@".',
            passwordInvalid:
                'Contraseña no válida. La contraseña debe tener un mínimo de 8 caracteres."',
        },
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
            reserveMessage: '¿Deseas Reservar esta cita?',
            CancelMessage: '¿Deseas Cancelar esta cita?',
            accept: 'Aceptar',
            cancel: 'Cancelar',
        },
        register: {
            name: 'Nombre',
            surname: 'Apellido',
            email: 'E-Mail',
            password: 'Contraseña',
            repeatPassword: 'Repetir Contraseña',
            button: 'Registrar',
            emailExist: 'El email introducido ya existe',
            tryAgain: 'Volver a intentar',
            mandatoryFieldsEmpty: 'Campos obligatorios vacíos',
            notSamePassword: 'Las contraseñas no coinciden',
            notPasswordLength:
                'La contraseña no cumple la longitud requerida (8 mínimo)',
        },
        invitation: {
            title: 'Introduce tu código de invitación',
            button: 'Validar',
            error: 'Código de invitación incorrecto!',
            clean: 'Limpiar',
        },
        login: {
            email: 'E-Mail',
            password: 'Contraseña',
            button: 'Acceder',
            noAccount: '¿No tienes cuenta?',
            accessToInvitation:
                'Pulsa aquí para canjear tu código de invitación.',
        },
        contact: {
            titleSchedule: 'Horarios',
            textMondayToFriday: 'Lunes a Viernes: 10:00-14:00 / 17:00-21:00',
            textSaturday: 'Sábado: 10:00-14:00',
            titlePhone: 'Teléfono',
            textPhone: '+34 679839952',
            titleAddress: 'Dirección',
            textAddress: 'Av. Blas Infante, 105, 29120',
            textCity: 'Alhaurín el Grande, Málaga',
        },
        appointments: {
            reserved: 'Reservado',
            userAppointment: 'Mi cita',
            pastAppointments: 'Citas pasadas',
        },
        utils: {
            noAppointsTitle: 'Ninguna cita asignada',
            noAppointsSubtitle: 'Puedes asignarte una cita pulsando aquí',
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
            infoText: 'Información',
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
                emailNotType: 'El valor intruducido no es un email',
                emailEmpty: 'El campo no puede estar vacío',
                emailChangeMessage: 'El email de usuario ha sido actualizado',
                usernameEmpty: 'El campo no puede estar vacío',
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
                    'La contraseña ha sido actualizada con éxito',
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
    snackbar: {
        cancelMessage: 'Cancelada: Día ',
        cancelMessagedate: ' a las ',
        assginMessage: 'Assignada: Día ',
        assginMessageDate: ' a las ',
        oneAppoinmetPerday: 'Solo puedes asignar una cita por día',
        notLikePassword: 'Las contraseñas no coinciden',
    },
    week: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
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
        december: 'Diciembre',
    },
    languages: {
        spanish: 'Español',
        english: 'Inglés',
    },
    maintenance: {
        title: 'Página en mantenimiento',
        subtitle: 'Estaremos pronto de vuelta, gracias por su paciencia',
    },
};

export default es;
