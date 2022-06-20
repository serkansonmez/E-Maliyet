namespace E_Maliyet.Administration {
    @Serenity.Decorators.registerEditor()
    export class TigerFirmalarEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, E_Maliyet.Tiger.TigerFirmalarRow> {

        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }
        protected getLookupKey() {
            return E_Maliyet.Tiger.TigerFirmalarRow.lookupKey;

        }
        protected getItems(lookup: Q.Lookup<E_Maliyet.Tiger.TigerFirmalarRow>) {
            return super.getItems(lookup).filter(x =>
                x.Name != '' && x.Name != null);
        }
    }
}