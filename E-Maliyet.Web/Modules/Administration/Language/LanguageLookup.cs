
namespace E_Maliyet.Administration.Lookups
{
    using E_Maliyet.Administration.Entities;
    using E_Maliyet.Tiger.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public sealed class LanguageLookup : RowLookupScript<LanguageRow>
    {
        public LanguageLookup()
        {
            IdField = LanguageRow.Fields.LanguageId.PropertyName;
            Permission = "*";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(LanguageRow.Fields.LanguageId);
        }
    }


    [LookupScript]
    public class TigerFirmalarLookup : RowLookupScript<TigerFirmalarRow>
    {
        public TigerFirmalarLookup()
        {
            IdField =  TigerFirmalarRow.Fields.Nr.PropertyName;
            TextField =   TigerFirmalarRow.Fields.Name.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TigerFirmalarRow.Fields;
            query.Distinct(true)
                .Select(fld.Nr)
                .Select(fld.Name)
                .Where(
                    new Criteria(fld.Name) != "" &
                    new Criteria(fld.Name).IsNotNull()  );
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }


    
    [LookupScript(Permission = "*")]
    public class TigerDonemlerLookup : RowLookupScript<TigerDonemlerRow>
    {
        public TigerDonemlerLookup()
        {
            IdField = TigerDonemlerRow.Fields.Nr.PropertyName;
            TextField = TigerDonemlerRow.Fields.Nr.PropertyName;
            
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = TigerDonemlerRow.Fields;
            query.Distinct(true)
                .Select(fld.Nr);
                
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}