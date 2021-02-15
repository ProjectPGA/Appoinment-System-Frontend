const en = {
    components: {
        loginInputs: {
            email: 'E-Mail',
            password: 'Password',
            inputEmpty: 'Please fill this field',
            emailInvalid: 'Please add @ on your email',
            passwordInvalid: 'The password has minimum 8 characters',
        },
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
            emailExist: 'The email already exist!',
            tryAgain: 'Try again',
            mandatoryFieldsEmpty: 'Empty mandatory fields',
            notSamePassword: 'The passwords are not the same',
            notPasswordLength:
                'Password length dont math the minimun (8 minumum)',
        },
        invitation: {
            title: 'Enter your invitation code',
            button: 'Validate',
            error: 'Invalid invitational code!',
            clean: 'Clean',
        },
        login: {
            email: 'E-Mail',
            password: 'Password',
            button: 'Login',
            noAccount: 'You dont have an account?',
            accessToInvitation: 'Click here to redeem your invitational code.',
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
            pastAppointments: 'Past appointments',
        },
        utils: {
            noAppointsTitle: 'No appointment assigned',
            noAppointsSubtitle:
                'You can assign yourself an appointment by clicking here',
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
                emailNotType: 'The value introduced is not an email',
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
        cancelMessage: 'Canceled: Day ',
        cancelMessagedate: ' at ',
        assginMessage: 'Assigned: Day ',
        assginMessageDate: ' at ',
        oneAppoinmetPerday: 'You only can asign one appoinment per day',
        notLikePassword: 'Passwords dont match',
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
    maintenance: {
        title: 'Page in maintenance',
        subtitle: 'We will back soon, thanks for your patience',
    },
};

export default en;
