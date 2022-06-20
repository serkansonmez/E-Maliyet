using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace E_Maliyet.Administration
{
    public partial class TigerFirmalarEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "E_Maliyet.Administration.TigerFirmalarEditor";

        public TigerFirmalarEditorAttribute()
            : base(Key)
        {
        }
    }
}
