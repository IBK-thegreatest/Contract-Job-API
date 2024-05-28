const emailValidator = require("email-validator")
const PasswordValidator = require("password-validator")
const HttpException = require("../exceptions/HttpException.js");
const schema = new PasswordValidator()

schema
    .is().min(8)                                    // Minimum length 8
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 1 digit
    .has().symbols()                                // Must have at least 1 symbol
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['password', 'Password']);

//AUTHENTICANTION SERVICE
const registerService = (userData) => {
    const user = []
    const data = {
        email: userData.email,
        password: userData.password
    }
    if(!userData.email || !userData.password) {
        throw new HttpException(404, "Both Username and Password are needed to register")
    } else if(!emailValidator.validate(userData.email)) {
        throw new HttpException(403, "Invalid Email Address, Email Address must be in the format foo@bar.com")
    } else if(!schema.validate(userData.password)){
        throw new HttpException(403, "Invalid Password, Password must be at least 8 characters, an uppercase letter, lowercase letter, no whitespaces, ")
    } else {
        user.push(data)
        return data
    }
}


module.exports = { registerService }