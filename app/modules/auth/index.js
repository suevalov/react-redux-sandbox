import LoginHandler from './handlers/login-handler';
import AuthRequired from 'modules/auth/decorators/auth-required';

require('./login-page.less');

export default {
    LoginHandler: LoginHandler,
    AuthRequired: AuthRequired
};
