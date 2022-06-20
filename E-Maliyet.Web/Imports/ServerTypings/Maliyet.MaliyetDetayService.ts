namespace E_Maliyet.Maliyet {
    export namespace MaliyetDetayService {
        export const baseUrl = 'Maliyet/MaliyetDetay';

        export declare function Create(request: Serenity.SaveRequest<MaliyetDetayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MaliyetDetayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetDetayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetDetayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Maliyet/MaliyetDetay/Create",
            Update = "Maliyet/MaliyetDetay/Update",
            Delete = "Maliyet/MaliyetDetay/Delete",
            Retrieve = "Maliyet/MaliyetDetay/Retrieve",
            List = "Maliyet/MaliyetDetay/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MaliyetDetayService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
