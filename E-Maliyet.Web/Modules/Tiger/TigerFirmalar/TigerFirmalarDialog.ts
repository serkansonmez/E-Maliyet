
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class TigerFirmalarDialog extends Serenity.EntityDialog<TigerFirmalarRow, any> {
        protected getFormKey() { return TigerFirmalarForm.formKey; }
        protected getIdProperty() { return TigerFirmalarRow.idProperty; }
        protected getLocalTextPrefix() { return TigerFirmalarRow.localTextPrefix; }
        protected getNameProperty() { return TigerFirmalarRow.nameProperty; }
        protected getService() { return TigerFirmalarService.baseUrl; }
        protected getDeletePermission() { return TigerFirmalarRow.deletePermission; }
        protected getInsertPermission() { return TigerFirmalarRow.insertPermission; }
        protected getUpdatePermission() { return TigerFirmalarRow.updatePermission; }

        protected form = new TigerFirmalarForm(this.idPrefix);

    }
}