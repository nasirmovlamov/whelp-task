import { errorToast} from "./ErrorToasts";
import { successToast } from "./SuccessToast";

export const autoErrorToaster = (message: string) => {
    errorToast('top-right' , message);
}