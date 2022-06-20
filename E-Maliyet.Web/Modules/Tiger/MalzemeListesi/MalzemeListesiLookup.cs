
namespace E_Maliyet.Tiger.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

      [LookupScript("Lookups.MalzemeListesiLookup", Permission = "*",Expiration =-1)]
  //  [LookupScript("Northwind.Customer")]
    public class MalzemeListesiLookup : RowLookupScript<MalzemeListesiRow>
    {
        public MalzemeListesiLookup()
        {
            IdField = MalzemeListesiRow.Fields.Logicalref.PropertyName;
            TextField = MalzemeListesiRow.Fields.ItemsName.PropertyName;
             
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.MalzemeListesiRow.Fields;
            query.Distinct(false)
                 .Select(fld.Logicalref)
                .Select(fld.ItemsName)
              
                .Where(
                    new Criteria(fld.ItemsName) != "" &
                    new Criteria(fld.ItemsName).IsNotNull())
                 .OrderBy(fld.ItemsName);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}