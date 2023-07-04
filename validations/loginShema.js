import { object, string } from "yup";

export const loginShema = object({
  username: string()
    .nullable()
    .notRequired()
    .email("Geçerli bir email adresi giriniz")
    .required("Email boş bırakılamaz."),
  password: string()
    .required("Şifre boş bırakılamaz.")
    .min(8, "Şifre çok kısa - en az 8 karakter olmalıdır.")
    .matches(/[a-zA-Z]/, "Şifre Sadece Alfabetik karakterler içermelidir."),
});