
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class TigerFirmalarGrid extends Serenity.EntityGrid<TigerFirmalarRow, any> {
        protected getColumnsKey() { return 'Tiger.TigerFirmalar'; }
        protected getDialogType() { return TigerFirmalarDialog; }
        protected getIdProperty() { return TigerFirmalarRow.idProperty; }
        protected getInsertPermission() { return TigerFirmalarRow.insertPermission; }
        protected getLocalTextPrefix() { return TigerFirmalarRow.localTextPrefix; }
        protected getService() { return TigerFirmalarService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}