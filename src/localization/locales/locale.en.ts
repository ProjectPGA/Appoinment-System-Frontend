const en = {
    components: {
        navigation: {
            title: 'Castillo',
            subtitle: 'Barberia',
            index: 'Main',
            appointments: 'My Appoints',
            contactUs: 'Contact',
        },
        modal: {
            title: 'Confirmation',
            reserveMessage: 'Do you want to book this appointment?',
            CancelMessage: 'Do you want to cancel this appointment?',
            accept: 'Confirm',
            cancel: 'Cancel',
        },
        register: {
            name: 'Name',
            surname: 'Surname',
            email: 'E-Mail',
            password: 'Password',
            repeatPassword: 'Repeat Password',
            button: 'Register',
            invitationCodeTitle: 'Enter your invitation code',
            invitationCodeButton: 'Validate',
        },
        login: {
            email: 'E-Mail',
            password: 'Password',
            button: 'Login',
            noAccount: 'You dont have an account?',
            accessToInvitation: 'click here to redeem your invitational code.',
        },
        contact: {
            titleSchedule: 'Timetables:',
            textMondayToFriday: 'Mondays to Fridays: 10:00-14:00 / 17:00-21:00',
            textSaturday: 'Saturdays: 10:00-14:00',
            titlePhone: 'Phone:',
            textPhone: '+34 679839952',
            titleAddress: 'Address:',
            textAddress: 'Av. Blas Infante, 105, 29120',
            textCity: 'Alhaurín el Grande, Málaga',
        },
        appointments: {
            reserved: 'Reserved',
            userAppointment: 'My appointment',
        },
    },
    user: {
        settings: 'Configuration',
        logof: 'Log Off',
    },
    userConfig: {
        configText: 'Configuration',
        userText: 'User',
        adminText: 'Administrator',
        user: {
            infoText: 'Information',
            securityText: 'Security',
            info: {
                infoText: 'User information edit',
                emailText: 'Email',
                newEmailText: 'New Email',
                emailSaveButton: 'Save',
                userNameText: 'Username',
                newUserNameText: 'New Username',
                userNameButton: 'Save',
                emailShort: 'The email introduced is too short',
                emailSame:
                    'The new email must be different from the current one',
                emailNotType: 'The value introduced is not email type',
                emailEmpty: 'This field cant be empty',
                emailChangeMessage: 'The user email has been updated',
                usernameEmpty: 'This field cant be empty',
                usernameSame:
                    'The new username must be different from the current one',
                usernameChangeMessage: 'The username has been updated',
            },
            security: {
                passChangeTittle: 'Password change',
                actualPassText: 'Current Password',
                newPassText: 'New Password',
                repeatNewPassText: 'Repeat New Password',
                changePassButton: 'Save',
                passChangedMessage: 'Password successfully updated',
            },
        },
        admin: {},
    },
    titles: {
        appointments: 'Appoints',
        userAppointments: 'My Appoints',
        contact: 'Contact',
        register: 'Register',
        login: 'Login',
        language: 'Language',
    },
    snackbar: {
        cancelMessage: 'Cancelada: Día ',
        cancelMessagedate: ' a las ',
        assginMessage: 'Assignada: Día ',
        assginMessageDate: ' a las ',
        oneAppoinmetPerday: 'Solo puedes asignar una cita por dia',
    },
    week: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursdays',
        friday: 'Fridays',
        saturday: 'Saturdays',
        sunday: 'Sundays',
    },
    month: {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
    },
    languages: {
        spanish: 'Spanish',
        english: 'English',
    },
};

export default en;
