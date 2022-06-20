﻿
namespace E_Maliyet.Administration
{
    using Microsoft.AspNetCore.DataProtection;
    using Newtonsoft.Json;
    using Serenity.Services;

    public class UserListRequest : ListRequest
    {
        [JsonIgnore]
        internal IDataProtector DataProtector;
        [JsonIgnore]
        internal byte[] ClientHash;
    }
}
