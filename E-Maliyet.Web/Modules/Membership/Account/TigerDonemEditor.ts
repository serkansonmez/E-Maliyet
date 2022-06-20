namespace E_Maliyet.Administration {
    @Serenity.Decorators.registerEditor()
    export class TigerDonemlerEditor extends
        Serenity.LookupEditorBase<Serenity.LookupEditorOptions, E_Maliyet.Tiger.TigerDonemlerRow> {

        constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            super(container, opt);
        }
        protected getLookupKey() {
            return E_Maliyet.Tiger.TigerDonemlerRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<E_Maliyet.Tiger.TigerDonemlerRow>) {
            return super.getItems(lookup).filter(x =>
                x.Firmnr != 0);
        }

        //protected getItems(lookup: Q.Lookup<E_Maliyet.Tiger.TigerDonemlerRow>, filterValue = null) {
        //    var filteredLookUp;

          
        //    filteredLookUp = super.getItems(lookup).filter(x => x.Firmnr.toString() === this.filterValue);
             
        //    return filteredLookUp;
        //}
    }
}