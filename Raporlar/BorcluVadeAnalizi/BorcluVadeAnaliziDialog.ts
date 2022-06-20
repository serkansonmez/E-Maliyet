
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class BorcluVadeAnaliziDialog extends Serenity.EntityDialog<BorcluVadeAnaliziRow, any> {
        protected getFormKey() { return BorcluVadeAnaliziForm.formKey; }
        protected getIdProperty() { return BorcluVadeAnaliziRow.idProperty; }
        protected getLocalTextPrefix() { return BorcluVadeAnaliziRow.localTextPrefix; }
        protected getNameProperty() { return BorcluVadeAnaliziRow.nameProperty; }
        protected getService() { return BorcluVadeAnaliziService.baseUrl; }
        protected getDeletePermission() { return BorcluVadeAnaliziRow.deletePermission; }
        protected getInsertPermission() { return BorcluVadeAnaliziRow.insertPermission; }
        protected getUpdatePermission() { return BorcluVadeAnaliziRow.updatePermission; }

        protected form = new BorcluVadeAnaliziForm(this.idPrefix);

    }
}