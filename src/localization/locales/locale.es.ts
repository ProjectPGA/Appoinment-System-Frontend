const es = {
    views: {
        register: {
            emailExist: 'El email introducido ya existe',
        },
        maintenancePage: {},
        login: {
            mailLoginForm: {
                button: 'Acceder',
                noAccount: '¿No tienes cuenta?',
                accessToInvitation:
                    'Pulsa aquí para canjear tu código de invitación.',
            },
            mainRegisterForm: {
                name: 'Nombre',
                surname: 'Apellido',
                button: 'Registrar',
            },
        },
        invitation: {
            invitationalCode: {
                button: 'Validar',
            },
        },
        home: {},
        contact: {
            componentContact: {
                titleSchedule: 'Horarios',
                textMondayToFriday:
                    'Lunes a Viernes: 10:00-14:00 / 17:00-21:00',
                textSaturday: 'Sábado: 10:00-14:00',
                titlePhone: 'Teléfono',
                textPhone: '+34 679839952',
                titleAddress: 'Dirección',
                textAddress: 'Av. Blas Infante, 105, 29120',
                textCity: 'Alhaurín el Grande, Málaga',
            },
        },
    },
    common: {
        email: 'E-Mail',
        password: 'Contraseña',
        components: {
            appointments: {
                pastAppointments: 'Citas pasadas',
            },
            navigation: {
                index: 'Inicio',
                appointments: 'Mis Citas',
                contactUs: 'Contacto',
                userLogOff: 'Cerrar sesión',
                userSettings: 'Configuración',
            },
            utils: {
                noAppointsTitle: 'Ninguna cita asignada',
                noAppointsSubtitle: 'Puedes asignarte una cita pulsando aquí',
            },
        },
        title: {
            maintenance: 'Página en mantenimiento',
            userAppointments: 'Mis Citas',
            contact: 'Contacto',
            register: 'Registro',
            login: 'Iniciar sesion',
            language: 'Idioma',
            invitation: 'Introduce tu código de invitación',
        },
        subtitle: {
            subtitle: 'Estaremos pronto de vuelta, gracias por su paciencia',
        },
        languages: {
            spanish: 'Español',
            english: 'Inglés',
        },
        errors: {},
    },
};

export default es;
