using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace E_Maliyet.Administration
{
    public partial class TigerDonemlerEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "E_Maliyet.Administration.TigerDonemlerEditor";

        public TigerDonemlerEditorAttribute()
            : base(Key)
        {
        }
    }
}
