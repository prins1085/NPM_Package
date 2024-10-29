import * as Yup from 'yup';
import { MSG } from '../Message';
import { Regex } from '../../utils/Helper/regex';

export const loginFormValidation = Yup.object().shape({
    email: Yup.string().trim().email(MSG.INVALID_EMAIL).required(MSG.REQ_EMAIL).matches(Regex.Email_REGEX, MSG.INVALID_EMAIL),
    password: Yup.string().required(MSG.REQ_PASSWORD).min(6, MSG.MUST_BE_PASSWORD),
});