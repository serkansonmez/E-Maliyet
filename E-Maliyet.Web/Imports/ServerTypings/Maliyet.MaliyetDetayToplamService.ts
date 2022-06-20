namespace E_Maliyet.Maliyet {
    export namespace MaliyetDetayToplamService {
        export const baseUrl = 'Maliyet/MaliyetDetayToplam';

        export declare function Create(request: Serenity.SaveRequest<MaliyetDetayToplamRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaliyetDetayToplamRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetDetayToplamRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetDetayToplamRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Maliyet/MaliyetDetayToplam/Create",
            Update = "Maliyet/MaliyetDetayToplam/Update",
            Delete = "Maliyet/MaliyetDetayToplam/Delete",
            Retrieve = "Maliyet/MaliyetDetayToplam/Retrieve",
            List = "Maliyet/MaliyetDetayToplam/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaliyetDetayToplamService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
