
namespace E_Maliyet.Tiger {

    @Serenity.Decorators.registerClass()
    export class VaryantListesiGrid extends Serenity.EntityGrid<VaryantListesiRow, any> {
        protected getColumnsKey() { return 'Tiger.VaryantListesi'; }
        protected getDialogType() { return VaryantListesiDialog; }
        protected getIdProperty() { return VaryantListesiRow.idProperty; }
        protected getInsertPermission() { return VaryantListesiRow.insertPermission; }
        protected getLocalTextPrefix() { return VaryantListesiRow.localTextPrefix; }
        protected getService() { return VaryantListesiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}