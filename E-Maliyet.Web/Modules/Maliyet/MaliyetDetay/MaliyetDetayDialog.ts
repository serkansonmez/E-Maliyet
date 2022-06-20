
namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetDetayDialog extends Serenity.EntityDialog<MaliyetDetayRow, any> {
        protected getFormKey() { return MaliyetDetayForm.formKey; }
        protected getIdProperty() { return MaliyetDetayRow.idProperty; }
        protected getLocalTextPrefix() { return MaliyetDetayRow.localTextPrefix; }
        protected getNameProperty() { return MaliyetDetayRow.nameProperty; }
        protected getService() { return MaliyetDetayService.baseUrl; }
        protected getDeletePermission() { return MaliyetDetayRow.deletePermission; }
        protected getInsertPermission() { return MaliyetDetayRow.insertPermission; }
        protected getUpdatePermission() { return MaliyetDetayRow.updatePermission; }

        protected form = new MaliyetDetayForm(this.idPrefix);

    }
}