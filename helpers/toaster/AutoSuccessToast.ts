import { successToast } from "./SuccessToast";

export const autoSuccessToaster = (message: string) => {
    successToast('top-right' , message);
}