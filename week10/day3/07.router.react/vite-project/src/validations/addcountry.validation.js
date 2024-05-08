import * as Yup from 'yup';

const AddcountrySchema=Yup.object().shape({
    name: Yup.string().required('ad daxil edin'),
    capital:Yup.string().required('paytaxt daxil edin'),
    flagImg:Yup.string().url('invalid url').required('url daxil edin'),
    population: Yup.number().positive().min(1000,'ehali sayi minimum 1000 olmalidir').required('ehali sayini daxil edin'),
    description: Yup.string().min(20,'en az 20 soz olmalidir').required('elave et'),
})

export default AddcountrySchema