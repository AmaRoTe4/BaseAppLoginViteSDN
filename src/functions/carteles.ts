import { Bounce, toast } from "react-toastify";

export const cartelError = (Mesanje: string) => {
  toast.error(Mesanje, {
    position: toast.POSITION.TOP_LEFT,
    transition: Bounce,
    autoClose: 5000,
  });
};

export const cartelErrorLong = (Mesanje: string) => {
  toast.error(Mesanje, {
    position: toast.POSITION.TOP_LEFT,
    transition: Bounce,
    autoClose: 60000,
  });
};

export const cartelOk = (Mesanje: string) => {
  toast.success(Mesanje, {
    position: toast.POSITION.TOP_CENTER,
    transition: Bounce,
    autoClose: 3000,
  });
};
