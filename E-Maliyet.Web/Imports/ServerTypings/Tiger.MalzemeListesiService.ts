namespace E_Maliyet.Tiger {
    export namespace MalzemeListesiService {
        export const baseUrl = 'Tiger/MalzemeListesi';

        export declare function Create(request: Serenity.SaveRequest<MalzemeListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MalzemeListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MalzemeListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MalzemeListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Tiger/MalzemeListesi/Create",
            Update = "Tiger/MalzemeListesi/Update",
            Delete = "Tiger/MalzemeListesi/Delete",
            Retrieve = "Tiger/MalzemeListesi/Retrieve",
            List = "Tiger/MalzemeListesi/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MalzemeListesiService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
