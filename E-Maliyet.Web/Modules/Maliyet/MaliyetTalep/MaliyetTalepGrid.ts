
namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetTalepGrid extends Serenity.EntityGrid<MaliyetTalepRow, any> {
        protected getColumnsKey() { return 'Maliyet.MaliyetTalep'; }
        protected getDialogType() { return MaliyetTalepDialog; }
        protected getIdProperty() { return MaliyetTalepRow.idProperty; }
        protected getInsertPermission() { return MaliyetTalepRow.insertPermission; }
        protected getLocalTextPrefix() { return MaliyetTalepRow.localTextPrefix; }
        protected getService() { return MaliyetTalepService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}