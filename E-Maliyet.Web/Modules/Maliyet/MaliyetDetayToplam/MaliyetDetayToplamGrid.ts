
namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetDetayToplamGrid extends Serenity.EntityGrid<MaliyetDetayToplamRow, any> {
        protected getColumnsKey() { return 'Maliyet.MaliyetDetayToplam'; }
        protected getDialogType() { return MaliyetDetayToplamDialog; }
        protected getIdProperty() { return MaliyetDetayToplamRow.idProperty; }
        protected getInsertPermission() { return MaliyetDetayToplamRow.insertPermission; }
        protected getLocalTextPrefix() { return MaliyetDetayToplamRow.localTextPrefix; }
        protected getService() { return MaliyetDetayToplamService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}