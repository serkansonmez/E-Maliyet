
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class TigerBorcluVadeAnaliziGrid extends Serenity.EntityGrid<TigerBorcluVadeAnaliziRow, any> {
        protected getColumnsKey() { return 'Raporlar.TigerBorcluVadeAnalizi'; }
        protected getDialogType() { return TigerBorcluVadeAnaliziDialog; }
        protected getIdProperty() { return TigerBorcluVadeAnaliziRow.idProperty; }
        protected getInsertPermission() { return TigerBorcluVadeAnaliziRow.insertPermission; }
        protected getLocalTextPrefix() { return TigerBorcluVadeAnaliziRow.localTextPrefix; }
        protected getService() { return TigerBorcluVadeAnaliziService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}