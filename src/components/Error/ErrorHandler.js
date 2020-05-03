const ErrorHandler = {

    validEmailRegex: RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),


    validateForm(errors) {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    },

    errorValidator(name, value, errors) {

        switch (name) {
            case 'email':
                errors.email =
                    this.validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

    }

}

export default ErrorHandler