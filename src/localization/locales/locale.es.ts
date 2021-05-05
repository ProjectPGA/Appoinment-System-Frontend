const es = {
    components: {
        navigation: {
            index: 'Inicio',
            appointments: 'Mis Citas',
            contactUs: 'Contacto',
        },
        register: {
            name: 'Nombre',
            surname: 'Apellido',
            email: 'E-Mail',
            password: 'Contraseña',
            repeatPassword: 'Repetir Contraseña',
            notSamePassword: 'Las contraseñas no coinciden',
            button: 'Registrar',
            emailExist: 'El email introducido ya existe',
            tryAgain: 'Volver a intentar',
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
    titles: {
        userAppointments: 'Mis Citas',
        contact: 'Contacto',
        register: 'Registro',
        login: 'Iniciar sesion',
        language: 'Idioma',
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
