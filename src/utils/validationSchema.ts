import * as Yup from 'yup';

const loginSchema: Yup.ObjectSchema<{username: string; password: string}> =
  Yup.object().shape({
    username: Yup.string()
      .required('Zorunlu alan')
      .min(5, 'Kullanıcı adı 5 karakterden az olamaz'),
    password: Yup.string().required('Zorunlu alan'),
  });
export {loginSchema};
