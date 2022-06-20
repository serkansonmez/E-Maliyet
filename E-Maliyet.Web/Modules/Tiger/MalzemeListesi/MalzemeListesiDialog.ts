
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class MalzemeListesiDialog extends Serenity.EntityDialog<MalzemeListesiRow, any> {
        protected getFormKey() { return MalzemeListesiForm.formKey; }
        protected getIdProperty() { return MalzemeListesiRow.idProperty; }
        protected getLocalTextPrefix() { return MalzemeListesiRow.localTextPrefix; }
        protected getNameProperty() { return MalzemeListesiRow.nameProperty; }
        protected getService() { return MalzemeListesiService.baseUrl; }
        protected getDeletePermission() { return MalzemeListesiRow.deletePermission; }
        protected getInsertPermission() { return MalzemeListesiRow.insertPermission; }
        protected getUpdatePermission() { return MalzemeListesiRow.updatePermission; }

        protected form = new MalzemeListesiForm(this.idPrefix);

    }
}