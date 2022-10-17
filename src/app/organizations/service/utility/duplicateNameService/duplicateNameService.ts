import validityService from '../../../../utility/duplicateService/duplicateService';
import selectNameModel from '../../model/selectByName/selectByNameModel';

const duplicateNameService = Object.create(validityService);

duplicateNameService.run = function (email:string) {
    this.model = selectNameModel;
    const valid = this.validate(email);
    if (!valid) throw new Error(JSON.stringify({ emailError: 'Name taken.' }));
    return true;
};

export default duplicateNameService;