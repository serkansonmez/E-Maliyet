namespace E_Maliyet
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// This data will be available from script code using a dynamic script.
    /// Add properties you need from script code and set them in UserEndpoint.GetUserData.
    /// </summary>
    [ScriptInclude]
    public class ScriptUserDefinition
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public Boolean IsAdmin { get; set; }
        public Dictionary<string, bool> Permissions { get; set; }
        public String TigerFirma { get; set; }
        public String TigerDonem { get; set; }
        public String TigerFirmaAdi { get; set; }
        public String TigerDonemAdi { get; set; }
        public Int32 UserId { get; set; }
    }
}