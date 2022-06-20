
namespace E_Maliyet.Administration {

    @Serenity.Decorators.registerClass()
    export class RaporlarGrid extends Serenity.EntityGrid<RaporlarRow, any> {
        protected getColumnsKey() { return 'Administration.Raporlar'; }
        protected getDialogType() { return RaporlarDialog; }
        protected getIdProperty() { return RaporlarRow.idProperty; }
        protected getInsertPermission() { return RaporlarRow.insertPermission; }
        protected getLocalTextPrefix() { return RaporlarRow.localTextPrefix; }
        protected getService() { return RaporlarService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}