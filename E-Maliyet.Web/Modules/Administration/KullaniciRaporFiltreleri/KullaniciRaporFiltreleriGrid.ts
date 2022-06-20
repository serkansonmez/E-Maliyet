
namespace E_Maliyet.Administration {

    @Serenity.Decorators.registerClass()
    export class KullaniciRaporFiltreleriGrid extends Serenity.EntityGrid<KullaniciRaporFiltreleriRow, any> {
        protected getColumnsKey() { return 'Administration.KullaniciRaporFiltreleri'; }
        protected getDialogType() { return KullaniciRaporFiltreleriDialog; }
        protected getIdProperty() { return KullaniciRaporFiltreleriRow.idProperty; }
        protected getInsertPermission() { return KullaniciRaporFiltreleriRow.insertPermission; }
        protected getLocalTextPrefix() { return KullaniciRaporFiltreleriRow.localTextPrefix; }
        protected getService() { return KullaniciRaporFiltreleriService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}