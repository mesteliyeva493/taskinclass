import * as Yup from 'yup';
 const messSchema=Yup.object().shape({
    fullName:Yup.string().required('fullName daxil et').min(10,'en az 10 simvol olmalidir'),
    email:Yup.string().required('email daxil et'),
    title:Yup.string().required('title daxil et').min(10,'en az 10 simvol olmalidir'),
    message:Yup.string().required('message daxil et').min(10,'en az 10 simvol olmalidir'),
 })


 export default messSchema