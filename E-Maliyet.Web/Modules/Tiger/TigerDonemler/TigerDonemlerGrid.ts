
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class TigerDonemlerGrid extends Serenity.EntityGrid<TigerDonemlerRow, any> {
        protected getColumnsKey() { return 'Tiger.TigerDonemler'; }
        protected getDialogType() { return TigerDonemlerDialog; }
        protected getIdProperty() { return TigerDonemlerRow.idProperty; }
        protected getInsertPermission() { return TigerDonemlerRow.insertPermission; }
        protected getLocalTextPrefix() { return TigerDonemlerRow.localTextPrefix; }
        protected getService() { return TigerDonemlerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}