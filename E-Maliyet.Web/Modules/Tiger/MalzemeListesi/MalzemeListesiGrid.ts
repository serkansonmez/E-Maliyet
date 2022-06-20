
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class MalzemeListesiGrid extends Serenity.EntityGrid<MalzemeListesiRow, any> {
        protected getColumnsKey() { return 'Tiger.MalzemeListesi'; }
        protected getDialogType() { return MalzemeListesiDialog; }
        protected getIdProperty() { return MalzemeListesiRow.idProperty; }
        protected getInsertPermission() { return MalzemeListesiRow.insertPermission; }
        protected getLocalTextPrefix() { return MalzemeListesiRow.localTextPrefix; }
        protected getService() { return MalzemeListesiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}