
import createModel from '../../subRoutes/graphics/service/model/create/createModel';
import { FieldInfo } from 'mysql'; 
import { Observable, forkJoin } from 'rxjs';

//type queueReturnType = Observable<{results?: Object[] | undefined; fields?: FieldInfo[] | undefined; }>[];

export const queueGraphicObservables = async (graphics: any, incidentId:number):Promise<any> => {
    const observables:any = {};
    let i = 0;
    for (let graphic of graphics) {
        graphic[0] = await incidentId;
        observables[i] = await createModel.query(graphic);
        i = await i + 1;
    }
    return forkJoin(observables);
};