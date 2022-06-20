
namespace E_Go.Raporlar {

    @Serenity.Decorators.registerClass()
    export class BorcluVadeAnaliziYeniDialog extends Serenity.EntityDialog<BorcluVadeAnaliziYeniRow, any> {
        protected getFormKey() { return BorcluVadeAnaliziYeniForm.formKey; }
        protected getIdProperty() { return BorcluVadeAnaliziYeniRow.idProperty; }
        protected getLocalTextPrefix() { return BorcluVadeAnaliziYeniRow.localTextPrefix; }
        protected getNameProperty() { return BorcluVadeAnaliziYeniRow.nameProperty; }
        protected getService() { return BorcluVadeAnaliziYeniService.baseUrl; }
        protected getDeletePermission() { return BorcluVadeAnaliziYeniRow.deletePermission; }
        protected getInsertPermission() { return BorcluVadeAnaliziYeniRow.insertPermission; }
        protected getUpdatePermission() { return BorcluVadeAnaliziYeniRow.updatePermission; }

        protected form = new BorcluVadeAnaliziYeniForm(this.idPrefix);

    }
}