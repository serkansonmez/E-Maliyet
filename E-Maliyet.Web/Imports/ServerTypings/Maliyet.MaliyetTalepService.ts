namespace E_Maliyet.Maliyet {
    export namespace MaliyetTalepService {
        export const baseUrl = 'Maliyet/MaliyetTalep';

        export declare function Create(request: Serenity.SaveRequest<MaliyetTalepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaliyetTalepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetTalepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetTalepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Maliyet/MaliyetTalep/Create",
            Update = "Maliyet/MaliyetTalep/Update",
            Delete = "Maliyet/MaliyetTalep/Delete",
            Retrieve = "Maliyet/MaliyetTalep/Retrieve",
            List = "Maliyet/MaliyetTalep/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaliyetTalepService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
