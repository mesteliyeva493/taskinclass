import * as Yup from 'yup';

const productSchema = Yup.object().shape({
  name: Yup.string().required('ad daxil et'),
  description: Yup.string().min(10, 'en az 10 simvol daxil et').required('description daxil et'),
  imgSrc: Yup.string().url('url daxil et').required('Image daxil et'),
  costPrice: Yup.number().min(0, 'minimum 0 olmalidir').required('maya deyerin daxil et'),
  salePrice: Yup.number().min(0, 'satis qiymeti en az 0 olmalıdır').required('satis qiymetin daxil et').moreThan(Yup.ref('costPrice'), 'Satis qiymeti maya deyerinden yuxari olmalidir'),
  discountPercentage: Yup.number().min(0, 'Discount percentage must be at least 0').max(100, 'endirim 100 faizden yuxari ola bilmez'),
  stockCount: Yup.number().min(1, 'en az 1 olmalidir').required('stok deyerin daxil et'),
  createdAt: Yup.date().default(() => new Date())
});

export default productSchema;
