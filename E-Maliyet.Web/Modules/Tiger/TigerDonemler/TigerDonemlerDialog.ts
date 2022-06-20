
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class TigerDonemlerDialog extends Serenity.EntityDialog<TigerDonemlerRow, any> {
        protected getFormKey() { return TigerDonemlerForm.formKey; }
        protected getIdProperty() { return TigerDonemlerRow.idProperty; }
        protected getLocalTextPrefix() { return TigerDonemlerRow.localTextPrefix; }
        protected getService() { return TigerDonemlerService.baseUrl; }
        protected getDeletePermission() { return TigerDonemlerRow.deletePermission; }
        protected getInsertPermission() { return TigerDonemlerRow.insertPermission; }
        protected getUpdatePermission() { return TigerDonemlerRow.updatePermission; }

        protected form = new TigerDonemlerForm(this.idPrefix);

    }
}