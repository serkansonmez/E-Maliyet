
namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetDetayGrid extends Serenity.EntityGrid<MaliyetDetayRow, any> {
        protected getColumnsKey() { return 'Maliyet.MaliyetDetay'; }
        protected getDialogType() { return MaliyetDetayDialog; }
        protected getIdProperty() { return MaliyetDetayRow.idProperty; }
        protected getInsertPermission() { return MaliyetDetayRow.insertPermission; }
        protected getLocalTextPrefix() { return MaliyetDetayRow.localTextPrefix; }
        protected getService() { return MaliyetDetayService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}