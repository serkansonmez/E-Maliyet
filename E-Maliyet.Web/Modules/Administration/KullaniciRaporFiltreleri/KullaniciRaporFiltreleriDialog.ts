
namespace E_Maliyet.Administration {

    @Serenity.Decorators.registerClass()
    export class KullaniciRaporFiltreleriDialog extends Serenity.EntityDialog<KullaniciRaporFiltreleriRow, any> {
        protected getFormKey() { return KullaniciRaporFiltreleriForm.formKey; }
        protected getIdProperty() { return KullaniciRaporFiltreleriRow.idProperty; }
        protected getLocalTextPrefix() { return KullaniciRaporFiltreleriRow.localTextPrefix; }
        protected getNameProperty() { return KullaniciRaporFiltreleriRow.nameProperty; }
        protected getService() { return KullaniciRaporFiltreleriService.baseUrl; }
        protected getDeletePermission() { return KullaniciRaporFiltreleriRow.deletePermission; }
        protected getInsertPermission() { return KullaniciRaporFiltreleriRow.insertPermission; }
        protected getUpdatePermission() { return KullaniciRaporFiltreleriRow.updatePermission; }

        protected form = new KullaniciRaporFiltreleriForm(this.idPrefix);

    }
}