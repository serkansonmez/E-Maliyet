
namespace E_Maliyet.Tiger.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

      [LookupScript("Lookups.VaryantListesiLookup", Permission = "*",Expiration =-1)]
  //  [LookupScript("Northwind.Customer")]
    public class VaryantListesiLookup : RowLookupScript<VaryantListesiRow>
    {
        public VaryantListesiLookup()
        {
            IdField = VaryantListesiRow.Fields.Logicalref.PropertyName;
            TextField = VaryantListesiRow.Fields.Name.PropertyName;
            ParentIdField= VaryantListesiRow.Fields.Itemref.PropertyName;
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.VaryantListesiRow.Fields;
            query.Distinct(false)
                 .Select(fld.Logicalref)
                .Select(fld.Name)
                .Select(fld.Itemref)

                .Where(
                    new Criteria(fld.Name) != "" &
                    new Criteria(fld.Name).IsNotNull())
                 .OrderBy(fld.Name);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}