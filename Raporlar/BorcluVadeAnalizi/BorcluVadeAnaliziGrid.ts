
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class BorcluVadeAnaliziGrid extends Serenity.EntityGrid<BorcluVadeAnaliziRow, any> {
        protected getColumnsKey() { return 'Raporlar.BorcluVadeAnalizi'; }
        protected getDialogType() { return BorcluVadeAnaliziDialog; }
        protected getIdProperty() { return BorcluVadeAnaliziRow.idProperty; }
        protected getInsertPermission() { return BorcluVadeAnaliziRow.insertPermission; }
        protected getLocalTextPrefix() { return BorcluVadeAnaliziRow.localTextPrefix; }
        protected getService() { return BorcluVadeAnaliziService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}