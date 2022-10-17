import duplicateService from '../../../../utility/duplicateService/duplicateService';
import selectEmailModel from '../../model/selectByEmail/selectByEmailModel';

const duplicateEmailService = Object.create(duplicateService);

duplicateEmailService.run = async function (email:string) {
    this.model = selectEmailModel;
    const valid = await this.validate(email);
    if (!valid) throw new Error(JSON.stringify({ emailError: 'E-mail taken.' }));
    return true;
};

export default duplicateEmailService;