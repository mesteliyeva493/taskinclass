import * as Yup from 'yup';
const regisSchema=Yup.object().shape({
    username: Yup.string().required('username daxil et '),
    password: Yup.string().required('Password daxil et')
})

export default regisSchema