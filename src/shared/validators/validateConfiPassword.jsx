export const validateConfiPassword = (pass, confPass) => {
    return pass === confPass;
}

export const passwordConfirmationMessage = 'Las contraseñas no coinciden';