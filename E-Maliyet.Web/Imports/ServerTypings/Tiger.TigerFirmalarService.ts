namespace E_Maliyet.Tiger {
    export namespace TigerFirmalarService {
        export const baseUrl = 'Tiger/TigerFirmalar';

        export declare function Create(request: Serenity.SaveRequest<TigerFirmalarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TigerFirmalarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TigerFirmalarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TigerFirmalarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Tiger/TigerFirmalar/Create",
            Update = "Tiger/TigerFirmalar/Update",
            Delete = "Tiger/TigerFirmalar/Delete",
            Retrieve = "Tiger/TigerFirmalar/Retrieve",
            List = "Tiger/TigerFirmalar/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TigerFirmalarService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
