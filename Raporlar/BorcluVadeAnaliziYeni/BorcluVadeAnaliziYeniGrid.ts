
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class BorcluVadeAnaliziYeniGrid extends Serenity.EntityGrid<BorcluVadeAnaliziYeniRow, any> {
        protected getColumnsKey() { return 'Raporlar.BorcluVadeAnaliziYeni'; }
        protected getDialogType() { return BorcluVadeAnaliziYeniDialog; }
        protected getIdProperty() { return BorcluVadeAnaliziYeniRow.idProperty; }
        protected getInsertPermission() { return BorcluVadeAnaliziYeniRow.insertPermission; }
        protected getLocalTextPrefix() { return BorcluVadeAnaliziYeniRow.localTextPrefix; }
        protected getService() { return BorcluVadeAnaliziYeniService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}