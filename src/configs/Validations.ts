
export class Validations {

    static validateRequiredField = (field: string, nameField: string) => {

        if(!field || field == undefined || field == null) {
            return `O campo ${nameField} deve ser preenchido!\n`;
        }
        
        return '';
    }
}