
namespace E_Maliyet.Maliyet {

    @Serenity.Decorators.registerClass()
    export class MaliyetDetayToplamDialog extends Serenity.EntityDialog<MaliyetDetayToplamRow, any> {
        protected getFormKey() { return MaliyetDetayToplamForm.formKey; }
        protected getIdProperty() { return MaliyetDetayToplamRow.idProperty; }
        protected getLocalTextPrefix() { return MaliyetDetayToplamRow.localTextPrefix; }
        protected getService() { return MaliyetDetayToplamService.baseUrl; }
        protected getDeletePermission() { return MaliyetDetayToplamRow.deletePermission; }
        protected getInsertPermission() { return MaliyetDetayToplamRow.insertPermission; }
        protected getUpdatePermission() { return MaliyetDetayToplamRow.updatePermission; }

        protected form = new MaliyetDetayToplamForm(this.idPrefix);

    }
}