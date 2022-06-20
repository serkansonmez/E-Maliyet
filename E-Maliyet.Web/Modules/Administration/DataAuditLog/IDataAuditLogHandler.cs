
using Serenity.Data;

namespace E_Maliyet.Administration.Behaviors
{
    public interface IDataAuditLogHandler
    {
        void Log(IUnitOfWork uow, Row old, Row row, object userId);
    }
}