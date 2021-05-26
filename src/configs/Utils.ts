
export class Utils {

    static removeDiacritics = (value: string) => {
        return value
            .replace(" ", "")
            .replace(".", "")
            .replace(".", "")
            .replace("-", "")
            .replace("/", "")
            .replace("(", "")
            .replace(")", "");
    }

    static alertLocalStorage = (message: string, isSuccess: boolean) => {
        localStorage.setItem('alert-message', message);
        localStorage.setItem('alert-type', isSuccess ? 'alert-success' : 'alert-danger');
    }
}