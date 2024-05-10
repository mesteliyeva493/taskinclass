import * as Yup from 'yup';

const categorySchema = Yup.object().shape({
  name: Yup.string()
    .required('ad daxil edin')
    .matches(/^[a-zA-Z]+$/, 'ancaq herf olmalidir')
});

export default categorySchema