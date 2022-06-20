
namespace E_Maliyet.Maliyet.Repositories
{
    using E_Maliyet.Maliyet.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.MaliyetTalepRow;

    public class MaliyetTalepRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            SaveResponse saveResponse = new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            if (request.Entity.MaliyetTalepId > 0)
            {
                // SP çalıştırılacak
                // IDbConnection conn = SqlConnections.NewFor<MaliyetDetayRow>();
                IDbConnection conn = uow.Connection;
                var data = conn.Query<MaliyetDetayRow>("dbo.SP_UrunAgaciUret",
              param: new
              {

                  MaliyetTalepId = request.Entity.MaliyetTalepId,
                  ItemRef = request.Entity.ItemRef,
                  VariantRef = request.Entity.VariantRef,
                  Adet = request.Entity.Adet,

              },
              commandType: System.Data.CommandType.StoredProcedure);
            }
            return saveResponse;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (Row.InsertDate == null)
                {
                    UserDefinition user = (UserDefinition)Authorization.UserDefinition;
                    Row.UserId = Serenity.Authorization.UserId.TryParseID32();
                    Row.InsertDate = DateTime.Now;
                    Row.TigerDonem = user.TigerDonem.PadLeft(2, '0');
                    Row.TigerFirma = user.TigerFirma.PadLeft(3, '0');
                  

                }


            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}