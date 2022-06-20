
namespace E_Go.Raporlar.Repositories
{
    using E_Go.Administration.Entities;
    using E_Go.Web.Modules.Raporlar;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.BorcluVadeAnaliziRow;

    public class BorcluVadeAnaliziRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
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
        public ListResponse<MyRow> ListBySP(IDbConnection connection, BorcluVadeAnaliziRequest request)
        {
            if (request.RaporTarihi == null)
            {
                request.RaporTarihi =   DateTime.Now;
            }

            UserDefinition user = (UserDefinition)Authorization.UserDefinition;

            string donem = user.TigerDonem;
            string firma = user.TigerFirma;

            var data = connection.Query<MyRow>("sp_BorcluVadeAnalizi",
              param: new
              {
                  _FIRMA = "004",
                  _DONEM = "01",
                  _RAPTAR = request.RaporTarihi,
                  _CARKOD = request.CariHesapKodu,
                  _BAKIYE = request.Bakiye,

              },
              commandType: System.Data.CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();
            response.Entities = (List<MyRow>)data;
            return response;

        }
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}