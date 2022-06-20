
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class VaryantListesiDialog extends Serenity.EntityDialog<VaryantListesiRow, any> {
        protected getFormKey() { return VaryantListesiForm.formKey; }
        protected getIdProperty() { return VaryantListesiRow.idProperty; }
        protected getLocalTextPrefix() { return VaryantListesiRow.localTextPrefix; }
        protected getNameProperty() { return VaryantListesiRow.nameProperty; }
        protected getService() { return VaryantListesiService.baseUrl; }
        protected getDeletePermission() { return VaryantListesiRow.deletePermission; }
        protected getInsertPermission() { return VaryantListesiRow.insertPermission; }
        protected getUpdatePermission() { return VaryantListesiRow.updatePermission; }

        protected form = new VaryantListesiForm(this.idPrefix);

    }
}