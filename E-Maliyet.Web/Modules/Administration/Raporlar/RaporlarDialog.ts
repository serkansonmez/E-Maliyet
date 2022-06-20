
namespace E_Maliyet.Administration {

    @Serenity.Decorators.registerClass()
    export class RaporlarDialog extends Serenity.EntityDialog<RaporlarRow, any> {
        protected getFormKey() { return RaporlarForm.formKey; }
        protected getIdProperty() { return RaporlarRow.idProperty; }
        protected getLocalTextPrefix() { return RaporlarRow.localTextPrefix; }
        protected getNameProperty() { return RaporlarRow.nameProperty; }
        protected getService() { return RaporlarService.baseUrl; }
        protected getDeletePermission() { return RaporlarRow.deletePermission; }
        protected getInsertPermission() { return RaporlarRow.insertPermission; }
        protected getUpdatePermission() { return RaporlarRow.updatePermission; }

        protected form = new RaporlarForm(this.idPrefix);

    }
}