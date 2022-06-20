
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class TigerBorcluVadeAnaliziDialog extends Serenity.EntityDialog<TigerBorcluVadeAnaliziRow, any> {
        protected getFormKey() { return TigerBorcluVadeAnaliziForm.formKey; }
        protected getIdProperty() { return TigerBorcluVadeAnaliziRow.idProperty; }
        protected getLocalTextPrefix() { return TigerBorcluVadeAnaliziRow.localTextPrefix; }
        protected getNameProperty() { return TigerBorcluVadeAnaliziRow.nameProperty; }
        protected getService() { return TigerBorcluVadeAnaliziService.baseUrl; }
        protected getDeletePermission() { return TigerBorcluVadeAnaliziRow.deletePermission; }
        protected getInsertPermission() { return TigerBorcluVadeAnaliziRow.insertPermission; }
        protected getUpdatePermission() { return TigerBorcluVadeAnaliziRow.updatePermission; }

        protected form = new TigerBorcluVadeAnaliziForm(this.idPrefix);

    }
}