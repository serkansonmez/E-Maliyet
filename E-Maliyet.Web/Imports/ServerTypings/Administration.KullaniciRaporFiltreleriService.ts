namespace E_Maliyet.Administration {
    export namespace KullaniciRaporFiltreleriService {
        export const baseUrl = 'Administration/KullaniciRaporFiltreleri';

        export declare function Create(request: Serenity.SaveRequest<KullaniciRaporFiltreleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<KullaniciRaporFiltreleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KullaniciRaporFiltreleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KullaniciRaporFiltreleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Administration/KullaniciRaporFiltreleri/Create",
            Update = "Administration/KullaniciRaporFiltreleri/Update",
            Delete = "Administration/KullaniciRaporFiltreleri/Delete",
            Retrieve = "Administration/KullaniciRaporFiltreleri/Retrieve",
            List = "Administration/KullaniciRaporFiltreleri/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>KullaniciRaporFiltreleriService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
