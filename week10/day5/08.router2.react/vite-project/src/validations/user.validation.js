import * as Yup from 'yup';
const userSchema=Yup.object().shape({
    username:Yup.string().required('username daxil edin').min(3,'en az 3 simvol olmalidir'),
    password:Yup.string().required('sifreni daxil edin')
    .min(5,'en az 5 simvol olmalidir')
    .matches(
        /^[a-zA-Z]{5,}$/,'sifreden bir boyuk herf, bir balaca ve bir reqem en azindan olmalidir.'
    ),
    confirmPassword:Yup.string().required('sifreni tesdiq edin ').oneOf([Yup.ref('password'),null],'sifreler beraber olmalidir'),
    email:Yup.string().email('emaili daxil edin').required('emaili daxil edin'),
    profileImg:Yup.string().url('url daxil edin').required('url daxil edinn'),
    balance:Yup.number().required('balance daxil edin')
    .positive('musbet eded olmalidir')
    .integer('tam eded olmalidir')
})


export default  userSchema