/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface DataAuditLogForm {
        LogType: Serenity.EnumEditor;
        LogDate: Serenity.DateTimeEditor;
        UserId: Serenity.IntegerEditor;
        Tablename: Serenity.LookupEditor;
        RecordId: Serenity.StringEditor;
        FieldName: Serenity.LookupEditor;
        OldValue: Serenity.StringEditor;
        NewValue: Serenity.StringEditor;
    }
    class DataAuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface DataAuditLogRow {
        LogId?: number;
        LogType?: DataAuditLogType;
        LogDate?: string;
        UserId?: number;
        Tablename?: string;
        RecordId?: string;
        FieldName?: string;
        OldValue?: string;
        NewValue?: string;
        Username?: string;
        UserDisplayName?: string;
    }
    namespace DataAuditLogRow {
        const idProperty = "LogId";
        const localTextPrefix = "Administration.DataAuditLog";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            LogId = "LogId",
            LogType = "LogType",
            LogDate = "LogDate",
            UserId = "UserId",
            Tablename = "Tablename",
            RecordId = "RecordId",
            FieldName = "FieldName",
            OldValue = "OldValue",
            NewValue = "NewValue",
            Username = "Username",
            UserDisplayName = "UserDisplayName"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace DataAuditLogService {
        const baseUrl = "Administration/DataAuditLog";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Administration/DataAuditLog/Retrieve",
            List = "Administration/DataAuditLog/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
    enum DataAuditLogType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface KullaniciRaporFiltreleriForm {
        UserId: Serenity.LookupEditor;
        RaporlarId: Serenity.LookupEditor;
        KullaniciFiltresi: Serenity.TextAreaEditor;
    }
    class KullaniciRaporFiltreleriForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface KullaniciRaporFiltreleriRow {
        Id?: number;
        UserId?: number;
        RaporlarId?: number;
        KullaniciFiltresi?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserMobilePhoneNumber?: string;
        UserMobilePhoneVerified?: boolean;
        UserTwoFactorAuth?: number;
        UserTigerFirma?: string;
        UserTigerDonem?: string;
        RaporlarRaporKodu?: string;
        RaporlarRaporAdi?: string;
    }
    namespace KullaniciRaporFiltreleriRow {
        const idProperty = "Id";
        const nameProperty = "KullaniciFiltresi";
        const localTextPrefix = "Administration.KullaniciRaporFiltreleri";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            RaporlarId = "RaporlarId",
            KullaniciFiltresi = "KullaniciFiltresi",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserMobilePhoneNumber = "UserMobilePhoneNumber",
            UserMobilePhoneVerified = "UserMobilePhoneVerified",
            UserTwoFactorAuth = "UserTwoFactorAuth",
            UserTigerFirma = "UserTigerFirma",
            UserTigerDonem = "UserTigerDonem",
            RaporlarRaporKodu = "RaporlarRaporKodu",
            RaporlarRaporAdi = "RaporlarRaporAdi"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace KullaniciRaporFiltreleriService {
        const baseUrl = "Administration/KullaniciRaporFiltreleri";
        function Create(request: Serenity.SaveRequest<KullaniciRaporFiltreleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KullaniciRaporFiltreleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KullaniciRaporFiltreleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KullaniciRaporFiltreleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/KullaniciRaporFiltreleri/Create",
            Update = "Administration/KullaniciRaporFiltreleri/Update",
            Delete = "Administration/KullaniciRaporFiltreleri/Delete",
            Retrieve = "Administration/KullaniciRaporFiltreleri/Retrieve",
            List = "Administration/KullaniciRaporFiltreleri/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface RaporlarForm {
        RaporKodu: Serenity.StringEditor;
        RaporAdi: Serenity.StringEditor;
    }
    class RaporlarForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface RaporlarRow {
        Id?: number;
        RaporKodu?: string;
        RaporAdi?: string;
    }
    namespace RaporlarRow {
        const idProperty = "Id";
        const nameProperty = "RaporAdi";
        const localTextPrefix = "Administration.Raporlar";
        const lookupKey = "Administration.Raporlar";
        function getLookup(): Q.Lookup<RaporlarRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            RaporKodu = "RaporKodu",
            RaporAdi = "RaporAdi"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace RaporlarService {
        const baseUrl = "Administration/Raporlar";
        function Create(request: Serenity.SaveRequest<RaporlarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RaporlarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RaporlarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RaporlarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Raporlar/Create",
            Update = "Administration/Raporlar/Update",
            Delete = "Administration/Raporlar/Delete",
            Retrieve = "Administration/Raporlar/Retrieve",
            List = "Administration/Raporlar/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace E_Maliyet.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace E_Maliyet.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace E_Maliyet.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace E_Maliyet.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace E_Maliyet.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace E_Maliyet.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace E_Maliyet.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace E_Maliyet.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace E_Maliyet.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace E_Maliyet.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace E_Maliyet.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace E_Maliyet.Administration {
}
declare namespace E_Maliyet.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace E_Maliyet.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace E_Maliyet.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace E_Maliyet.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace E_Maliyet.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace E_Maliyet.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace E_Maliyet.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace E_Maliyet.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        TigerFirma?: string;
        TigerDonem?: string;
        TigerFirmaAdi?: string;
        TigerDonemNo?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            TigerFirma = "TigerFirma",
            TigerDonem = "TigerDonem",
            TigerFirmaAdi = "TigerFirmaAdi",
            TigerDonemNo = "TigerDonemNo",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace E_Maliyet.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace E_Maliyet.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace E_Maliyet.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace E_Maliyet.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace E_Maliyet.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace E_Maliyet.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace EGo.Web.Modules.Finans.BankaBakiye {
    interface BankaBakiyeRequest extends Serenity.ListRequest {
        BaslangicTarihi?: string;
        BitisTarihi?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachment {
        Key?: number;
        FileName?: string;
        DownloadUrl?: string;
        Size?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachmentRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        Key?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeForm {
        Subject: StringEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }
    class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeRequest extends Serenity.ServiceRequest {
        To?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToFolder?: string;
        ReplyToUniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailDeleteRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailFolder {
        Kind?: string;
        Name?: string;
        FullName?: string;
        UnreadCount?: number;
        SubFolders?: EmailFolder[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailItem {
        UniqueId?: number;
        Subject?: string;
        Date?: string;
        From?: string;
        To?: string;
        Cc?: string;
        Seen?: boolean;
        Important?: boolean;
        Deleted?: boolean;
        HasAttachments?: boolean;
        Size?: number;
        HtmlBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailListRequest extends Serenity.ListRequest {
        Folder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginInfo {
        ImapHost?: string;
        ImapPort?: number;
        ImapUsername?: string;
        ImapPassword?: string;
        SmtpHost?: string;
        SmtpPort?: number;
        SmtpUsername?: string;
        SmtpPassword?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginRequest extends Serenity.ServiceRequest {
        LoginInfo?: EmailLoginInfo;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailMoveRequest extends Serenity.ServiceRequest {
        SourceFolder?: string;
        UniqueIds?: number[];
        TargetFolder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        ReplyToAll?: boolean;
        Forward?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyResponse extends Serenity.ServiceResponse {
        Subject?: string;
        To?: string;
        Cc?: string;
        ReplyBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailRetrieveRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    namespace EmailService {
        const baseUrl = "Common/Email";
        function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Signout(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFolders(request: ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Login = "Common/Email/Login",
            Signout = "Common/Email/Signout",
            UnreadCount = "Common/Email/UnreadCount",
            Suggest = "Common/Email/Suggest",
            Reply = "Common/Email/Reply",
            Compose = "Common/Email/Compose",
            DeleteMessages = "Common/Email/DeleteMessages",
            ToggleSeen = "Common/Email/ToggleSeen",
            Move = "Common/Email/Move",
            ListMessages = "Common/Email/ListMessages",
            ListFolders = "Common/Email/ListFolders",
            RetrieveMessage = "Common/Email/RetrieveMessage"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestRequest extends Serenity.ServiceRequest {
        ContainsText?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestResponse extends Serenity.ServiceResponse {
        Suggestions?: string[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailToggleSeenRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
        Seen?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountResponse extends Serenity.ServiceResponse {
        UnreadCount?: number;
    }
}
declare namespace E_Maliyet {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace E_Maliyet {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace E_Maliyet.Finans {
}
declare namespace E_Maliyet.Finans {
    interface BankaBakiyeForm {
        BankaAdi: Serenity.StringEditor;
        HesapAdi: Serenity.StringEditor;
        BakiyeTl: Serenity.DecimalEditor;
        BakiyeUsd: Serenity.DecimalEditor;
        BakiyeEuro: Serenity.DecimalEditor;
    }
    class BankaBakiyeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Finans {
    interface BankaBakiyeRow {
        Id?: number;
        BankaAdi?: string;
        HesapAdi?: string;
        BakiyeTl?: number;
        BakiyeUsd?: number;
        BakiyeEuro?: number;
    }
    namespace BankaBakiyeRow {
        const idProperty = "Id";
        const nameProperty = "BankaAdi";
        const localTextPrefix = "Finans.BankaBakiye";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BankaAdi = "BankaAdi",
            HesapAdi = "HesapAdi",
            BakiyeTl = "BakiyeTl",
            BakiyeUsd = "BakiyeUsd",
            BakiyeEuro = "BakiyeEuro"
        }
    }
}
declare namespace E_Maliyet.Finans {
    namespace BankaBakiyeService {
        const baseUrl = "Finans/BankaBakiye";
        function Create(request: Serenity.SaveRequest<BankaBakiyeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankaBakiyeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankaBakiyeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: EGo.Web.Modules.Finans.BankaBakiye.BankaBakiyeRequest, onSuccess?: (response: Serenity.ListResponse<BankaBakiyeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List2(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankaBakiyeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finans/BankaBakiye/Create",
            Update = "Finans/BankaBakiye/Update",
            Delete = "Finans/BankaBakiye/Delete",
            Retrieve = "Finans/BankaBakiye/Retrieve",
            List = "Finans/BankaBakiye/List",
            List2 = "Finans/BankaBakiye/List2"
        }
    }
}
declare namespace E_Maliyet.Finans {
}
declare namespace E_Maliyet.Finans {
    interface BankaHareketleriForm {
        BankaAdi: Serenity.StringEditor;
        HesapAdi: Serenity.StringEditor;
        Tarih: Serenity.DateEditor;
        FisNo: Serenity.StringEditor;
        FisTuru: Serenity.StringEditor;
        SatirAciklamasi: Serenity.StringEditor;
        CariKodu: Serenity.StringEditor;
        CariUnvani: Serenity.StringEditor;
        TahsilTl: Serenity.DecimalEditor;
        OdemeTl: Serenity.DecimalEditor;
        TahsilUsd: Serenity.DecimalEditor;
        OdemeUsd: Serenity.DecimalEditor;
        TahsilEuro: Serenity.DecimalEditor;
        OdemeEuro: Serenity.DecimalEditor;
    }
    class BankaHareketleriForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Finans {
    interface BankaHareketleriRow {
        Id?: number;
        BankaAdi?: string;
        HesapAdi?: string;
        Tarih?: string;
        FisNo?: string;
        FisTuru?: string;
        SatirAciklamasi?: string;
        CariKodu?: string;
        CariUnvani?: string;
        TahsilTl?: number;
        OdemeTl?: number;
        TahsilUsd?: number;
        OdemeUsd?: number;
        TahsilEuro?: number;
        OdemeEuro?: number;
    }
    namespace BankaHareketleriRow {
        const idProperty = "Id";
        const nameProperty = "BankaAdi";
        const localTextPrefix = "Finans.BankaHareketleri";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BankaAdi = "BankaAdi",
            HesapAdi = "HesapAdi",
            Tarih = "Tarih",
            FisNo = "FisNo",
            FisTuru = "FisTuru",
            SatirAciklamasi = "SatirAciklamasi",
            CariKodu = "CariKodu",
            CariUnvani = "CariUnvani",
            TahsilTl = "TahsilTl",
            OdemeTl = "OdemeTl",
            TahsilUsd = "TahsilUsd",
            OdemeUsd = "OdemeUsd",
            TahsilEuro = "TahsilEuro",
            OdemeEuro = "OdemeEuro"
        }
    }
}
declare namespace E_Maliyet.Finans {
    namespace BankaHareketleriService {
        const baseUrl = "Finans/BankaHareketleri";
        function Create(request: Serenity.SaveRequest<BankaHareketleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankaHareketleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankaHareketleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankaHareketleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finans/BankaHareketleri/Create",
            Update = "Finans/BankaHareketleri/Update",
            Delete = "Finans/BankaHareketleri/Delete",
            Retrieve = "Finans/BankaHareketleri/Retrieve",
            List = "Finans/BankaHareketleri/List"
        }
    }
}
declare namespace E_Maliyet.Finans {
}
declare namespace E_Maliyet.Finans {
    interface KasaHareketForm {
        KasaKodu: Serenity.StringEditor;
        KasaAdi: Serenity.StringEditor;
        Tarih: Serenity.DateEditor;
        IslemNo: Serenity.StringEditor;
        IslemTuru: Serenity.StringEditor;
        DetayAciklama: Serenity.StringEditor;
        TahsilTl: Serenity.DecimalEditor;
        OdemeTl: Serenity.DecimalEditor;
        TahsilUsd: Serenity.DecimalEditor;
        OdemeUsd: Serenity.DecimalEditor;
        TahsilEuro: Serenity.DecimalEditor;
        OdemeEuro: Serenity.DecimalEditor;
        CariKodu: Serenity.StringEditor;
        CariUnvan: Serenity.StringEditor;
    }
    class KasaHareketForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Finans {
    interface KasaHareketRow {
        Id?: number;
        KasaKodu?: string;
        KasaAdi?: string;
        Tarih?: string;
        IslemNo?: string;
        IslemTuru?: string;
        DetayAciklama?: string;
        TahsilTl?: number;
        OdemeTl?: number;
        TahsilUsd?: number;
        OdemeUsd?: number;
        TahsilEuro?: number;
        OdemeEuro?: number;
        CariKodu?: string;
        CariUnvan?: string;
    }
    namespace KasaHareketRow {
        const idProperty = "Id";
        const nameProperty = "KasaKodu";
        const localTextPrefix = "Finans.KasaHareket";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            KasaKodu = "KasaKodu",
            KasaAdi = "KasaAdi",
            Tarih = "Tarih",
            IslemNo = "IslemNo",
            IslemTuru = "IslemTuru",
            DetayAciklama = "DetayAciklama",
            TahsilTl = "TahsilTl",
            OdemeTl = "OdemeTl",
            TahsilUsd = "TahsilUsd",
            OdemeUsd = "OdemeUsd",
            TahsilEuro = "TahsilEuro",
            OdemeEuro = "OdemeEuro",
            CariKodu = "CariKodu",
            CariUnvan = "CariUnvan"
        }
    }
}
declare namespace E_Maliyet.Finans {
    namespace KasaHareketService {
        const baseUrl = "Finans/KasaHareket";
        function Create(request: Serenity.SaveRequest<KasaHareketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KasaHareketRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KasaHareketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KasaHareketRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finans/KasaHareket/Create",
            Update = "Finans/KasaHareket/Update",
            Delete = "Finans/KasaHareket/Delete",
            Retrieve = "Finans/KasaHareket/Retrieve",
            List = "Finans/KasaHareket/List"
        }
    }
}
declare namespace E_Maliyet.Finans {
}
declare namespace E_Maliyet {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace E_Maliyet {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace E_Maliyet.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace E_Maliyet.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace E_Maliyet.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
        TigerFirma: Serenity.LookupEditor;
        TigerDonem: Serenity.LookupEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TigerFirma?: string;
        TigerDonem?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace E_Maliyet.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace E_Maliyet.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace E_Maliyet.Muhasebe {
}
declare namespace E_Maliyet.Muhasebe {
    interface BilancoForm {
        Tip1: Serenity.StringEditor;
        Tip2: Serenity.StringEditor;
        Tip3: Serenity.StringEditor;
        Tip4: Serenity.StringEditor;
        HesapKodu: Serenity.StringEditor;
        HesapAdi: Serenity.StringEditor;
        Deger: Serenity.DecimalEditor;
    }
    class BilancoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Muhasebe {
    interface BilancoRow {
        Logicalref?: number;
        Tip1?: string;
        Tip2?: string;
        Tip3?: string;
        Tip4?: string;
        HesapKodu?: string;
        HesapAdi?: string;
        Deger?: number;
    }
    namespace BilancoRow {
        const idProperty = "Logicalref";
        const nameProperty = "Tip1";
        const localTextPrefix = "Muhasebe.Bilanco";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Logicalref = "Logicalref",
            Tip1 = "Tip1",
            Tip2 = "Tip2",
            Tip3 = "Tip3",
            Tip4 = "Tip4",
            HesapKodu = "HesapKodu",
            HesapAdi = "HesapAdi",
            Deger = "Deger"
        }
    }
}
declare namespace E_Maliyet.Muhasebe {
    namespace BilancoService {
        const baseUrl = "Muhasebe/Bilanco";
        function Create(request: Serenity.SaveRequest<BilancoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BilancoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BilancoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BilancoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Muhasebe/Bilanco/Create",
            Update = "Muhasebe/Bilanco/Update",
            Delete = "Muhasebe/Bilanco/Delete",
            Retrieve = "Muhasebe/Bilanco/Retrieve",
            List = "Muhasebe/Bilanco/List"
        }
    }
}
declare namespace E_Maliyet.Muhasebe {
}
declare namespace E_Maliyet.Muhasebe {
    interface GelirTablosuForm {
        Grup1: Serenity.StringEditor;
        Aciklama: Serenity.StringEditor;
        Ay: Serenity.IntegerEditor;
        Tutar: Serenity.DecimalEditor;
    }
    class GelirTablosuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Muhasebe {
    interface GelirTablosuRow {
        SatirNo?: number;
        Grup1?: string;
        Aciklama?: string;
        Ay?: number;
        Tutar?: number;
    }
    namespace GelirTablosuRow {
        const idProperty = "SatirNo";
        const nameProperty = "Grup1";
        const localTextPrefix = "Muhasebe.GelirTablosu";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SatirNo = "SatirNo",
            Grup1 = "Grup1",
            Aciklama = "Aciklama",
            Ay = "Ay",
            Tutar = "Tutar"
        }
    }
}
declare namespace E_Maliyet.Muhasebe {
    namespace GelirTablosuService {
        const baseUrl = "Muhasebe/GelirTablosu";
        function Create(request: Serenity.SaveRequest<GelirTablosuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GelirTablosuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GelirTablosuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GelirTablosuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Muhasebe/GelirTablosu/Create",
            Update = "Muhasebe/GelirTablosu/Update",
            Delete = "Muhasebe/GelirTablosu/Delete",
            Retrieve = "Muhasebe/GelirTablosu/Retrieve",
            List = "Muhasebe/GelirTablosu/List"
        }
    }
}
declare namespace E_Maliyet.Muhasebe {
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface BorcVadeAnaliziForm {
        CariHesapKodu: Serenity.StringEditor;
        Tel1: Serenity.StringEditor;
        Tel2: Serenity.StringEditor;
        CariHesapUnvani: Serenity.StringEditor;
        OzelKod: Serenity.StringEditor;
        OzelKod2: Serenity.StringEditor;
        OzelKod3: Serenity.StringEditor;
        OzelKod4: Serenity.StringEditor;
        OzelKod5: Serenity.StringEditor;
        TanimliVade: Serenity.StringEditor;
        ToplamBakiye: Serenity.DecimalEditor;
        OrtalamaVade: Serenity.DateEditor;
        DolanBakiye: Serenity.DecimalEditor;
        DolanVade: Serenity.DateEditor;
        DolacakIlkFaturaTutari: Serenity.DecimalEditor;
        DolacakIlkFaturaVade: Serenity.DateEditor;
        SonTahsilatTarihi: Serenity.DateEditor;
        SonTahsilatTuru: Serenity.StringEditor;
        SonTahsilatCekOrtVade: Serenity.DateEditor;
        SonTahsilatTutari: Serenity.DecimalEditor;
        DevredenBakiye: Serenity.DecimalEditor;
        DevredenVade: Serenity.DateEditor;
        SonGorusenKisi: Serenity.StringEditor;
        SonGorusulenKisi: Serenity.StringEditor;
        SonGorusmeTarihi: Serenity.DateEditor;
        SonGorusmeDetayi: Serenity.StringEditor;
    }
    class BorcVadeAnaliziForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface BorcVadeAnaliziRow {
        CariReferans?: number;
        CariHesapKodu?: string;
        Tel1?: string;
        Tel2?: string;
        CariHesapUnvani?: string;
        OzelKod?: string;
        OzelKod2?: string;
        OzelKod3?: string;
        OzelKod4?: string;
        OzelKod5?: string;
        TanimliVade?: string;
        ToplamBakiye?: number;
        OrtalamaVade?: string;
        DolanBakiye?: number;
        DolanVade?: string;
        DolacakIlkFaturaTutari?: number;
        DolacakIlkFaturaVade?: string;
        SonTahsilatTarihi?: string;
        SonTahsilatTuru?: string;
        SonTahsilatCekOrtVade?: string;
        SonTahsilatTutari?: number;
        DevredenBakiye?: number;
        DevredenVade?: string;
        SonGorusenKisi?: string;
        SonGorusulenKisi?: string;
        SonGorusmeTarihi?: string;
        SonGorusmeDetayi?: string;
    }
    namespace BorcVadeAnaliziRow {
        const idProperty = "CariReferans";
        const nameProperty = "CariHesapKodu";
        const localTextPrefix = "Raporlar.BorcVadeAnalizi";
        const deletePermission = "Bor\u00E7 Vade Analizi:Silme";
        const insertPermission = "Bor\u00E7 Vade Analizi:Ekleme";
        const readPermission = "Bor\u00E7 Vade Analizi:Okuma";
        const updatePermission = "Bor\u00E7 Vade Analizi:G\u00FCncelleme";
        const enum Fields {
            CariReferans = "CariReferans",
            CariHesapKodu = "CariHesapKodu",
            Tel1 = "Tel1",
            Tel2 = "Tel2",
            CariHesapUnvani = "CariHesapUnvani",
            OzelKod = "OzelKod",
            OzelKod2 = "OzelKod2",
            OzelKod3 = "OzelKod3",
            OzelKod4 = "OzelKod4",
            OzelKod5 = "OzelKod5",
            TanimliVade = "TanimliVade",
            ToplamBakiye = "ToplamBakiye",
            OrtalamaVade = "OrtalamaVade",
            DolanBakiye = "DolanBakiye",
            DolanVade = "DolanVade",
            DolacakIlkFaturaTutari = "DolacakIlkFaturaTutari",
            DolacakIlkFaturaVade = "DolacakIlkFaturaVade",
            SonTahsilatTarihi = "SonTahsilatTarihi",
            SonTahsilatTuru = "SonTahsilatTuru",
            SonTahsilatCekOrtVade = "SonTahsilatCekOrtVade",
            SonTahsilatTutari = "SonTahsilatTutari",
            DevredenBakiye = "DevredenBakiye",
            DevredenVade = "DevredenVade",
            SonGorusenKisi = "SonGorusenKisi",
            SonGorusulenKisi = "SonGorusulenKisi",
            SonGorusmeTarihi = "SonGorusmeTarihi",
            SonGorusmeDetayi = "SonGorusmeDetayi"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace BorcVadeAnaliziService {
        const baseUrl = "Raporlar/BorcVadeAnalizi";
        function Create(request: Serenity.SaveRequest<BorcVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorcVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorcVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorcVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/BorcVadeAnalizi/Create",
            Update = "Raporlar/BorcVadeAnalizi/Update",
            Delete = "Raporlar/BorcVadeAnalizi/Delete",
            Retrieve = "Raporlar/BorcVadeAnalizi/Retrieve",
            List = "Raporlar/BorcVadeAnalizi/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface BorcluVadeAnaliziForm {
        CariHesapKodu: Serenity.StringEditor;
        Temsilci: Serenity.StringEditor;
        CariHesapUnvani: Serenity.StringEditor;
        OzelKod1: Serenity.StringEditor;
        OzelKod2: Serenity.StringEditor;
        OzelKod3: Serenity.StringEditor;
        OzelKod4: Serenity.StringEditor;
        OzelKod5: Serenity.StringEditor;
        TanimliVade: Serenity.StringEditor;
        ToplamBakiye: Serenity.DecimalEditor;
        OrtalamaVade: Serenity.DateEditor;
        DolanBakiye: Serenity.DecimalEditor;
        DolanVade: Serenity.DateEditor;
        DolacakIlkFaturaTutari: Serenity.DecimalEditor;
        DolacakIlkFaturaVade: Serenity.DateEditor;
        SonTahsilatTarihi: Serenity.DateEditor;
        SonTahsilatTutari: Serenity.DecimalEditor;
        DevredenBakiye: Serenity.DecimalEditor;
        DevredenVade: Serenity.DateEditor;
    }
    class BorcluVadeAnaliziForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface BorcluVadeAnaliziRow {
        CariReferans?: number;
        CariHesapKodu?: string;
        Temsilci?: string;
        CariHesapUnvani?: string;
        OzelKod1?: string;
        OzelKod2?: string;
        OzelKod3?: string;
        OzelKod4?: string;
        OzelKod5?: string;
        TanimliVade?: string;
        ToplamBakiye?: number;
        OrtalamaVade?: string;
        DolanBakiye?: number;
        DolanVade?: string;
        DolacakIlkFaturaTutari?: number;
        DolacakIlkFaturaVade?: string;
        SonTahsilatTarihi?: string;
        SonTahsilatTutari?: number;
        DevredenBakiye?: number;
        DevredenVade?: string;
    }
    namespace BorcluVadeAnaliziRow {
        const idProperty = "CariReferans";
        const nameProperty = "CariHesapKodu";
        const localTextPrefix = "Raporlar.BorcluVadeAnalizi";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CariReferans = "CariReferans",
            CariHesapKodu = "CariHesapKodu",
            Temsilci = "Temsilci",
            CariHesapUnvani = "CariHesapUnvani",
            OzelKod1 = "OzelKod1",
            OzelKod2 = "OzelKod2",
            OzelKod3 = "OzelKod3",
            OzelKod4 = "OzelKod4",
            OzelKod5 = "OzelKod5",
            TanimliVade = "TanimliVade",
            ToplamBakiye = "ToplamBakiye",
            OrtalamaVade = "OrtalamaVade",
            DolanBakiye = "DolanBakiye",
            DolanVade = "DolanVade",
            DolacakIlkFaturaTutari = "DolacakIlkFaturaTutari",
            DolacakIlkFaturaVade = "DolacakIlkFaturaVade",
            SonTahsilatTarihi = "SonTahsilatTarihi",
            SonTahsilatTutari = "SonTahsilatTutari",
            DevredenBakiye = "DevredenBakiye",
            DevredenVade = "DevredenVade"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace BorcluVadeAnaliziService {
        const baseUrl = "Raporlar/BorcluVadeAnalizi";
        function Create(request: Serenity.SaveRequest<BorcluVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorcluVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorcluVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorcluVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/BorcluVadeAnalizi/Create",
            Update = "Raporlar/BorcluVadeAnalizi/Update",
            Delete = "Raporlar/BorcluVadeAnalizi/Delete",
            Retrieve = "Raporlar/BorcluVadeAnalizi/Retrieve",
            List = "Raporlar/BorcluVadeAnalizi/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface BorcluVadeAnaliziYeniForm {
        CariHesapKodu: Serenity.StringEditor;
        Tel1: Serenity.StringEditor;
        Tel2: Serenity.StringEditor;
        CariHesapUnvani: Serenity.StringEditor;
        ÖzelKod: Serenity.StringEditor;
        ÖzelKod2: Serenity.StringEditor;
        ÖzelKod3: Serenity.StringEditor;
        ÖzelKod4: Serenity.StringEditor;
        ÖzelKod5: Serenity.StringEditor;
        TanımlıVade: Serenity.StringEditor;
        ToplamBakiye: Serenity.DecimalEditor;
        OrtalamaVade: Serenity.DateEditor;
        DolanBakiye: Serenity.DecimalEditor;
        DolanVade: Serenity.DateEditor;
        DolacakIlkFaturaTutarı: Serenity.DecimalEditor;
        DolacakIlkFaturaVade: Serenity.DateEditor;
        SonTahsilatTarihi: Serenity.DateEditor;
        SonTahsilatTürü: Serenity.StringEditor;
        SonTahsilatçekOrtVade: Serenity.DateEditor;
        SonTahsilatTutarı: Serenity.DecimalEditor;
        DevredenBakiye: Serenity.DecimalEditor;
        DevredenVade: Serenity.DateEditor;
        SonGorusenKisi: Serenity.StringEditor;
        SonGorusulenKisi: Serenity.StringEditor;
        SonGorusmeTarihi: Serenity.DateEditor;
        SonGorusmeDetayı: Serenity.StringEditor;
    }
    class BorcluVadeAnaliziYeniForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface BorcluVadeAnaliziYeniRow {
        CariReferans?: number;
        CariHesapKodu?: string;
        Tel1?: string;
        Tel2?: string;
        CariHesapUnvani?: string;
        ÖzelKod?: string;
        ÖzelKod2?: string;
        ÖzelKod3?: string;
        ÖzelKod4?: string;
        ÖzelKod5?: string;
        TanımlıVade?: string;
        ToplamBakiye?: number;
        OrtalamaVade?: string;
        DolanBakiye?: number;
        DolanVade?: string;
        DolacakIlkFaturaTutarı?: number;
        DolacakIlkFaturaVade?: string;
        SonTahsilatTarihi?: string;
        SonTahsilatTürü?: string;
        SonTahsilatçekOrtVade?: string;
        SonTahsilatTutarı?: number;
        DevredenBakiye?: number;
        DevredenVade?: string;
        SonGorusenKisi?: string;
        SonGorusulenKisi?: string;
        SonGorusmeTarihi?: string;
        SonGorusmeDetayı?: string;
    }
    namespace BorcluVadeAnaliziYeniRow {
        const idProperty = "CariReferans";
        const nameProperty = "CariHesapKodu";
        const localTextPrefix = "Raporlar.BorcluVadeAnaliziYeni";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CariReferans = "CariReferans",
            CariHesapKodu = "CariHesapKodu",
            Tel1 = "Tel1",
            Tel2 = "Tel2",
            CariHesapUnvani = "CariHesapUnvani",
            ÖzelKod = "\u00D6zelKod",
            ÖzelKod2 = "\u00D6zelKod2",
            ÖzelKod3 = "\u00D6zelKod3",
            ÖzelKod4 = "\u00D6zelKod4",
            ÖzelKod5 = "\u00D6zelKod5",
            TanımlıVade = "Tan\u0131ml\u0131Vade",
            ToplamBakiye = "ToplamBakiye",
            OrtalamaVade = "OrtalamaVade",
            DolanBakiye = "DolanBakiye",
            DolanVade = "DolanVade",
            DolacakIlkFaturaTutarı = "DolacakIlkFaturaTutar\u0131",
            DolacakIlkFaturaVade = "DolacakIlkFaturaVade",
            SonTahsilatTarihi = "SonTahsilatTarihi",
            SonTahsilatTürü = "SonTahsilatT\u00FCr\u00FC",
            SonTahsilatçekOrtVade = "SonTahsilat\u00E7ekOrtVade",
            SonTahsilatTutarı = "SonTahsilatTutar\u0131",
            DevredenBakiye = "DevredenBakiye",
            DevredenVade = "DevredenVade",
            SonGorusenKisi = "SonGorusenKisi",
            SonGorusulenKisi = "SonGorusulenKisi",
            SonGorusmeTarihi = "SonGorusmeTarihi",
            SonGorusmeDetayı = "SonGorusmeDetay\u0131"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace BorcluVadeAnaliziYeniService {
        const baseUrl = "Raporlar/BorcluVadeAnaliziYeni";
        function Create(request: Serenity.SaveRequest<BorcluVadeAnaliziYeniRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BorcluVadeAnaliziYeniRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BorcluVadeAnaliziYeniRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BorcluVadeAnaliziYeniRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/BorcluVadeAnaliziYeni/Create",
            Update = "Raporlar/BorcluVadeAnaliziYeni/Update",
            Delete = "Raporlar/BorcluVadeAnaliziYeni/Delete",
            Retrieve = "Raporlar/BorcluVadeAnaliziYeni/Retrieve",
            List = "Raporlar/BorcluVadeAnaliziYeni/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface CariBakiyeRaporuForm {
        CariHesapUnvani: Serenity.StringEditor;
        OzelKod: Serenity.StringEditor;
        YetkiKod: Serenity.StringEditor;
        İşlemTarihi: Serenity.DateEditor;
        İşlemNo: Serenity.StringEditor;
        IslemReferans: Serenity.IntegerEditor;
        İşlemAçıklaması: Serenity.StringEditor;
        BelgeNo: Serenity.StringEditor;
        İşlemTürü: Serenity.StringEditor;
        Borç: Serenity.DecimalEditor;
        Alacak: Serenity.DecimalEditor;
        Bakiye: Serenity.DecimalEditor;
    }
    class CariBakiyeRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface CariBakiyeRaporuRow {
        CariHesapKodu?: string;
        CariHesapUnvani?: string;
        OzelKod?: string;
        YetkiKod?: string;
        İşlemTarihi?: string;
        İşlemNo?: string;
        IslemReferans?: number;
        İşlemAçıklaması?: string;
        BelgeNo?: string;
        İşlemTürü?: string;
        Borç?: number;
        Alacak?: number;
        Bakiye?: number;
    }
    namespace CariBakiyeRaporuRow {
        const idProperty = "CariHesapKodu";
        const nameProperty = "CariHesapKodu";
        const localTextPrefix = "Raporlar.CariBakiyeRaporu";
        const deletePermission = "Cari Bakiye Raporu:Silme";
        const insertPermission = "Cari Bakiye Raporu:Ekleme";
        const readPermission = "Cari Bakiye Raporu:Okuma";
        const updatePermission = "Cari Bakiye Raporu:G\u00FCncelleme";
        const enum Fields {
            CariHesapKodu = "CariHesapKodu",
            CariHesapUnvani = "CariHesapUnvani",
            OzelKod = "OzelKod",
            YetkiKod = "YetkiKod",
            İşlemTarihi = "\u0130\u015FlemTarihi",
            İşlemNo = "\u0130\u015FlemNo",
            IslemReferans = "IslemReferans",
            İşlemAçıklaması = "\u0130\u015FlemA\u00E7\u0131klamas\u0131",
            BelgeNo = "BelgeNo",
            İşlemTürü = "\u0130\u015FlemT\u00FCr\u00FC",
            Borç = "Bor\u00E7",
            Alacak = "Alacak",
            Bakiye = "Bakiye"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace CariBakiyeRaporuService {
        const baseUrl = "Raporlar/CariBakiyeRaporu";
        function Create(request: Serenity.SaveRequest<CariBakiyeRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CariBakiyeRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CariBakiyeRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CariBakiyeRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/CariBakiyeRaporu/Create",
            Update = "Raporlar/CariBakiyeRaporu/Update",
            Delete = "Raporlar/CariBakiyeRaporu/Delete",
            Retrieve = "Raporlar/CariBakiyeRaporu/Retrieve",
            List = "Raporlar/CariBakiyeRaporu/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface CekSenetRaporuForm {
        Durum: Serenity.StringEditor;
        BelgeTuru: Serenity.StringEditor;
        Tip: Serenity.StringEditor;
        SonDurum: Serenity.StringEditor;
        PortfoyNo: Serenity.StringEditor;
        SeriNo: Serenity.StringEditor;
        Borclu: Serenity.StringEditor;
        CiroEdenKesideci: Serenity.StringEditor;
        TcVergiNo: Serenity.StringEditor;
        CekBankaAdi: Serenity.StringEditor;
        Iban: Serenity.StringEditor;
        CekBankaHesapNo: Serenity.StringEditor;
        CekBankaSubeKodu: Serenity.StringEditor;
        Muhabir: Serenity.StringEditor;
        Sehir: Serenity.StringEditor;
        VadeYili: Serenity.IntegerEditor;
        VadeAy: Serenity.StringEditor;
        Vade: Serenity.DateEditor;
        GirisTarihi: Serenity.DateEditor;
        GirisYil: Serenity.IntegerEditor;
        GirisAyi: Serenity.StringEditor;
        Tutar: Serenity.DecimalEditor;
        Doviz: Serenity.StringEditor;
    }
    class CekSenetRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface CekSenetRaporuRow {
        Referans?: number;
        Durum?: string;
        BelgeTuru?: string;
        Tip?: string;
        SonDurum?: string;
        PortfoyNo?: string;
        SeriNo?: string;
        Borclu?: string;
        CiroEdenKesideci?: string;
        TcVergiNo?: string;
        CekBankaAdi?: string;
        Iban?: string;
        CekBankaHesapNo?: string;
        CekBankaSubeKodu?: string;
        Muhabir?: string;
        Sehir?: string;
        VadeYili?: number;
        VadeAy?: string;
        Vade?: string;
        GirisTarihi?: string;
        GirisYil?: number;
        GirisAyi?: string;
        Tutar?: number;
        Doviz?: string;
        SatisElemani?: string;
    }
    namespace CekSenetRaporuRow {
        const idProperty = "Referans";
        const nameProperty = "Durum";
        const localTextPrefix = "Raporlar.CekSenetRaporu";
        const deletePermission = "\u00C7ek Senet Raporu:Silme";
        const insertPermission = "\u00C7ek Senet Raporu:Ekleme";
        const readPermission = "\u00C7ek Senet Raporu:Okuma";
        const updatePermission = "\u00C7ek Senet Raporu:G\u00FCncelleme";
        const enum Fields {
            Referans = "Referans",
            Durum = "Durum",
            BelgeTuru = "BelgeTuru",
            Tip = "Tip",
            SonDurum = "SonDurum",
            PortfoyNo = "PortfoyNo",
            SeriNo = "SeriNo",
            Borclu = "Borclu",
            CiroEdenKesideci = "CiroEdenKesideci",
            TcVergiNo = "TcVergiNo",
            CekBankaAdi = "CekBankaAdi",
            Iban = "Iban",
            CekBankaHesapNo = "CekBankaHesapNo",
            CekBankaSubeKodu = "CekBankaSubeKodu",
            Muhabir = "Muhabir",
            Sehir = "Sehir",
            VadeYili = "VadeYili",
            VadeAy = "VadeAy",
            Vade = "Vade",
            GirisTarihi = "GirisTarihi",
            GirisYil = "GirisYil",
            GirisAyi = "GirisAyi",
            Tutar = "Tutar",
            Doviz = "Doviz",
            SatisElemani = "SatisElemani"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace CekSenetRaporuService {
        const baseUrl = "Raporlar/CekSenetRaporu";
        function Create(request: Serenity.SaveRequest<CekSenetRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CekSenetRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CekSenetRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CekSenetRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/CekSenetRaporu/Create",
            Update = "Raporlar/CekSenetRaporu/Update",
            Delete = "Raporlar/CekSenetRaporu/Delete",
            Retrieve = "Raporlar/CekSenetRaporu/Retrieve",
            List = "Raporlar/CekSenetRaporu/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface HareketsizCariListesiForm {
        Statu: Serenity.StringEditor;
        CariHesapKodu: Serenity.StringEditor;
        CariHesapUnvani: Serenity.StringEditor;
        OzelKod: Serenity.StringEditor;
        OzelKod2: Serenity.StringEditor;
        OzelKod3: Serenity.StringEditor;
        OzelKod4: Serenity.StringEditor;
        OzelKod5: Serenity.StringEditor;
        YetkiKodu: Serenity.StringEditor;
        Adres1: Serenity.StringEditor;
        Adres2: Serenity.StringEditor;
        Telefon1: Serenity.StringEditor;
        Telefon2: Serenity.StringEditor;
        SonHareketTarihi: Serenity.DateEditor;
    }
    class HareketsizCariListesiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface HareketsizCariListesiRow {
        Logicalref?: number;
        Statu?: string;
        CariHesapKodu?: string;
        CariHesapUnvani?: string;
        OzelKod?: string;
        OzelKod2?: string;
        OzelKod3?: string;
        OzelKod4?: string;
        OzelKod5?: string;
        YetkiKodu?: string;
        Adres1?: string;
        Adres2?: string;
        Telefon1?: string;
        Telefon2?: string;
        SonHareketTarihi?: string;
    }
    namespace HareketsizCariListesiRow {
        const idProperty = "Logicalref";
        const nameProperty = "Statu";
        const localTextPrefix = "Raporlar.HareketsizCariListesi";
        const deletePermission = "Hareketsiz Cari Listesi:Silme";
        const insertPermission = "Hareketsiz Cari Listesi:Ekleme";
        const readPermission = "Hareketsiz Cari Listesi:Okuma";
        const updatePermission = "Hareketsiz Cari Listesi:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Statu = "Statu",
            CariHesapKodu = "CariHesapKodu",
            CariHesapUnvani = "CariHesapUnvani",
            OzelKod = "OzelKod",
            OzelKod2 = "OzelKod2",
            OzelKod3 = "OzelKod3",
            OzelKod4 = "OzelKod4",
            OzelKod5 = "OzelKod5",
            YetkiKodu = "YetkiKodu",
            Adres1 = "Adres1",
            Adres2 = "Adres2",
            Telefon1 = "Telefon1",
            Telefon2 = "Telefon2",
            SonHareketTarihi = "SonHareketTarihi"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace HareketsizCariListesiService {
        const baseUrl = "Satis/HareketsizCariListesi";
        function Create(request: Serenity.SaveRequest<HareketsizCariListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HareketsizCariListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HareketsizCariListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Web.Modules.Raporlar.HareketsizCariListesi.HareketsizCariListesiRequest, onSuccess?: (response: Serenity.ListResponse<HareketsizCariListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Satis/HareketsizCariListesi/Create",
            Update = "Satis/HareketsizCariListesi/Update",
            Delete = "Satis/HareketsizCariListesi/Delete",
            Retrieve = "Satis/HareketsizCariListesi/Retrieve",
            List = "Satis/HareketsizCariListesi/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface MizanRaporuForm {
        FisTarihi: Serenity.DateEditor;
        FisNumarasi: Serenity.StringEditor;
        YevmiyeNo: Serenity.StringEditor;
        FisOzelKodu: Serenity.StringEditor;
        FisYetkiKodu: Serenity.StringEditor;
        AnaHesapKodu: Serenity.StringEditor;
        AnaHesapAciklamasi: Serenity.StringEditor;
        HesapKodu: Serenity.StringEditor;
        HesapAdi: Serenity.StringEditor;
        Borc: Serenity.DecimalEditor;
        Alacak: Serenity.DecimalEditor;
        Bakiye: Serenity.DecimalEditor;
        SatirAciklamasi: Serenity.StringEditor;
        FisAciklamasi: Serenity.StringEditor;
    }
    class MizanRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface MizanRaporuRow {
        Logicalref?: number;
        FisTarihi?: string;
        FisNumarasi?: string;
        YevmiyeNo?: string;
        FisOzelKodu?: string;
        FisYetkiKodu?: string;
        AnaHesapKodu?: string;
        AnaHesapAciklamasi?: string;
        HesapKodu?: string;
        HesapAdi?: string;
        Borc?: number;
        Alacak?: number;
        Bakiye?: number;
        SatirAciklamasi?: string;
        FisAciklamasi?: string;
    }
    namespace MizanRaporuRow {
        const idProperty = "Logicalref";
        const nameProperty = "FisNumarasi";
        const localTextPrefix = "Raporlar.MizanRaporu";
        const deletePermission = "Mizan Raporu:Silme";
        const insertPermission = "Mizan Raporu:Ekleme";
        const readPermission = "Mizan Raporu:Okuma";
        const updatePermission = "Mizan Raporu:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            FisTarihi = "FisTarihi",
            FisNumarasi = "FisNumarasi",
            YevmiyeNo = "YevmiyeNo",
            FisOzelKodu = "FisOzelKodu",
            FisYetkiKodu = "FisYetkiKodu",
            AnaHesapKodu = "AnaHesapKodu",
            AnaHesapAciklamasi = "AnaHesapAciklamasi",
            HesapKodu = "HesapKodu",
            HesapAdi = "HesapAdi",
            Borc = "Borc",
            Alacak = "Alacak",
            Bakiye = "Bakiye",
            SatirAciklamasi = "SatirAciklamasi",
            FisAciklamasi = "FisAciklamasi"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace MizanRaporuService {
        const baseUrl = "Raporlar/MizanRaporu";
        function Create(request: Serenity.SaveRequest<MizanRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MizanRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MizanRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MizanRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/MizanRaporu/Create",
            Update = "Raporlar/MizanRaporu/Update",
            Delete = "Raporlar/MizanRaporu/Delete",
            Retrieve = "Raporlar/MizanRaporu/Retrieve",
            List = "Raporlar/MizanRaporu/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface SatisAnalizRaporuForm {
        CariStatusu: Serenity.StringEditor;
        CariKodu: Serenity.StringEditor;
        CariUnvani: Serenity.StringEditor;
        CariOzelKodu: Serenity.StringEditor;
        CariOzelKod5: Serenity.StringEditor;
        CariYetkiKodu: Serenity.StringEditor;
        VergiDairesi: Serenity.StringEditor;
        VergiNo: Serenity.StringEditor;
        MalzemeKodu: Serenity.StringEditor;
        MalzemeAciklamasi: Serenity.StringEditor;
        MalzemeOzelKodu: Serenity.StringEditor;
        MalzemeOzelKod2: Serenity.StringEditor;
        MalzemeOzelKod3: Serenity.StringEditor;
        MalzemeOzelKod4: Serenity.StringEditor;
        MalzemeOzelKod5: Serenity.StringEditor;
        MalzemeGrupKodu: Serenity.StringEditor;
        MalzemeYetkiKodu: Serenity.StringEditor;
        FisTuru: Serenity.StringEditor;
        FisTarihi: Serenity.DateEditor;
        FisNo: Serenity.StringEditor;
        MuhasebeDurumu: Serenity.StringEditor;
        FaturaDurumu: Serenity.StringEditor;
        FaturaNo: Serenity.StringEditor;
        FisAyi: Serenity.StringEditor;
        Miktar: Serenity.IntegerEditor;
        Kdv: Serenity.DecimalEditor;
        KdvHaric: Serenity.DecimalEditor;
        KdvTutari: Serenity.DecimalEditor;
        SatirTipi: Serenity.StringEditor;
        SaticiKodu: Serenity.StringEditor;
        SaticiAdi: Serenity.StringEditor;
        Maliyet: Serenity.DecimalEditor;
        SatisFiyatFarki: Serenity.DecimalEditor;
        Kar: Serenity.DecimalEditor;
        Yil: Serenity.IntegerEditor;
        Sehir: Serenity.StringEditor;
    }
    class SatisAnalizRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface SatisAnalizRaporuRow {
        Referans?: number;
        CariStatusu?: string;
        CariKodu?: string;
        CariUnvani?: string;
        CariOzelKodu?: string;
        CariOzelKod5?: string;
        CariYetkiKodu?: string;
        VergiDairesi?: string;
        VergiNo?: string;
        MalzemeKodu?: string;
        MalzemeAciklamasi?: string;
        MalzemeOzelKodu?: string;
        MalzemeOzelKod2?: string;
        MalzemeOzelKod3?: string;
        MalzemeOzelKod4?: string;
        MalzemeOzelKod5?: string;
        MalzemeGrupKodu?: string;
        MalzemeYetkiKodu?: string;
        FisTuru?: string;
        FisTarihi?: string;
        FisNo?: string;
        MuhasebeDurumu?: string;
        FaturaDurumu?: string;
        FaturaNo?: string;
        FisAyi?: string;
        Miktar?: number;
        Kdv?: number;
        KdvHaric?: number;
        KdvTutari?: number;
        SatirTipi?: string;
        SaticiKodu?: string;
        SaticiAdi?: string;
        Maliyet?: number;
        SatisFiyatFarki?: number;
        Kar?: number;
        Yil?: number;
        Sehir?: string;
    }
    namespace SatisAnalizRaporuRow {
        const idProperty = "Referans";
        const nameProperty = "CariStatusu";
        const localTextPrefix = "Raporlar.SatisAnalizRaporu";
        const deletePermission = "Sat\u0131\u015F Analiz Raporu:Silme";
        const insertPermission = "Sat\u0131\u015F Analiz Raporu:Ekleme";
        const readPermission = "Sat\u0131\u015F Analiz Raporu:Okuma";
        const updatePermission = "Sat\u0131\u015F Analiz Raporu:G\u00FCncelleme";
        const enum Fields {
            Referans = "Referans",
            CariStatusu = "CariStatusu",
            CariKodu = "CariKodu",
            CariUnvani = "CariUnvani",
            CariOzelKodu = "CariOzelKodu",
            CariOzelKod5 = "CariOzelKod5",
            CariYetkiKodu = "CariYetkiKodu",
            VergiDairesi = "VergiDairesi",
            VergiNo = "VergiNo",
            MalzemeKodu = "MalzemeKodu",
            MalzemeAciklamasi = "MalzemeAciklamasi",
            MalzemeOzelKodu = "MalzemeOzelKodu",
            MalzemeOzelKod2 = "MalzemeOzelKod2",
            MalzemeOzelKod3 = "MalzemeOzelKod3",
            MalzemeOzelKod4 = "MalzemeOzelKod4",
            MalzemeOzelKod5 = "MalzemeOzelKod5",
            MalzemeGrupKodu = "MalzemeGrupKodu",
            MalzemeYetkiKodu = "MalzemeYetkiKodu",
            FisTuru = "FisTuru",
            FisTarihi = "FisTarihi",
            FisNo = "FisNo",
            MuhasebeDurumu = "MuhasebeDurumu",
            FaturaDurumu = "FaturaDurumu",
            FaturaNo = "FaturaNo",
            FisAyi = "FisAyi",
            Miktar = "Miktar",
            Kdv = "Kdv",
            KdvHaric = "KdvHaric",
            KdvTutari = "KdvTutari",
            SatirTipi = "SatirTipi",
            SaticiKodu = "SaticiKodu",
            SaticiAdi = "SaticiAdi",
            Maliyet = "Maliyet",
            SatisFiyatFarki = "SatisFiyatFarki",
            Kar = "Kar",
            Yil = "Yil",
            Sehir = "Sehir"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace SatisAnalizRaporuService {
        const baseUrl = "Raporlar/SatisAnalizRaporu";
        function Create(request: Serenity.SaveRequest<SatisAnalizRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SatisAnalizRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SatisAnalizRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SatisAnalizRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/SatisAnalizRaporu/Create",
            Update = "Raporlar/SatisAnalizRaporu/Update",
            Delete = "Raporlar/SatisAnalizRaporu/Delete",
            Retrieve = "Raporlar/SatisAnalizRaporu/Retrieve",
            List = "Raporlar/SatisAnalizRaporu/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface TahsilatRaporuForm {
        Tarih: Serenity.DateEditor;
        BelgeNo: Serenity.StringEditor;
        CariKod: Serenity.StringEditor;
        CariUnvani: Serenity.StringEditor;
        SaticiKodu: Serenity.StringEditor;
        SaticiAdi: Serenity.StringEditor;
        PlakaNo: Serenity.StringEditor;
        PlakaAciklama: Serenity.StringEditor;
        Aciklama: Serenity.StringEditor;
        NakitTahsilat: Serenity.DecimalEditor;
        KrediTahsilat: Serenity.DecimalEditor;
    }
    class TahsilatRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface TahsilatRaporuRow {
        Logicalref?: number;
        Tarih?: string;
        BelgeNo?: string;
        CariKod?: string;
        CariUnvani?: string;
        SaticiKodu?: string;
        SaticiAdi?: string;
        PlakaNo?: string;
        PlakaAciklama?: string;
        Aciklama?: string;
        NakitTahsilat?: number;
        KrediTahsilat?: number;
    }
    namespace TahsilatRaporuRow {
        const idProperty = "Logicalref";
        const nameProperty = "BelgeNo";
        const localTextPrefix = "Raporlar.TahsilatRaporu";
        const deletePermission = "Tahsilat Raporu:Silme";
        const insertPermission = "Tahsilat Raporu:Ekleme";
        const readPermission = "Tahsilat Raporu:Okuma";
        const updatePermission = "Tahsilat Raporu:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Tarih = "Tarih",
            BelgeNo = "BelgeNo",
            CariKod = "CariKod",
            CariUnvani = "CariUnvani",
            SaticiKodu = "SaticiKodu",
            SaticiAdi = "SaticiAdi",
            PlakaNo = "PlakaNo",
            PlakaAciklama = "PlakaAciklama",
            Aciklama = "Aciklama",
            NakitTahsilat = "NakitTahsilat",
            KrediTahsilat = "KrediTahsilat"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace TahsilatRaporuService {
        const baseUrl = "Raporlar/TahsilatRaporu";
        function Create(request: Serenity.SaveRequest<TahsilatRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TahsilatRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TahsilatRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TahsilatRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/TahsilatRaporu/Create",
            Update = "Raporlar/TahsilatRaporu/Update",
            Delete = "Raporlar/TahsilatRaporu/Delete",
            Retrieve = "Raporlar/TahsilatRaporu/Retrieve",
            List = "Raporlar/TahsilatRaporu/List"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
}
declare namespace E_Maliyet.Raporlar {
    interface TigerBorcluVadeAnaliziForm {
        CariHesapKodu: Serenity.StringEditor;
        Temsilci: Serenity.StringEditor;
        CariHesapUnvani: Serenity.StringEditor;
        OzelKod1: Serenity.StringEditor;
        OzelKod2: Serenity.StringEditor;
        OzelKod3: Serenity.StringEditor;
        OzelKod4: Serenity.StringEditor;
        OzelKod5: Serenity.StringEditor;
        TanimliVade: Serenity.StringEditor;
        ToplamBakiye: Serenity.DecimalEditor;
        OrtalamaVade: Serenity.DateEditor;
        DolanBakiye: Serenity.DecimalEditor;
        DolanVade: Serenity.DateEditor;
        DolacakIlkFaturaTutari: Serenity.DecimalEditor;
        DolacakIlkFaturaVade: Serenity.DateEditor;
        SonTahsilatTarihi: Serenity.DateEditor;
        SonTahsilatTutari: Serenity.DecimalEditor;
        DevredenBakiye: Serenity.DecimalEditor;
        DevredenVade: Serenity.DateEditor;
    }
    class TigerBorcluVadeAnaliziForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Raporlar {
    interface TigerBorcluVadeAnaliziRow {
        CariReferans?: number;
        CariHesapKodu?: string;
        Temsilci?: string;
        CariHesapUnvani?: string;
        OzelKod1?: string;
        OzelKod2?: string;
        OzelKod3?: string;
        OzelKod4?: string;
        OzelKod5?: string;
        TanimliVade?: string;
        ToplamBakiye?: number;
        OrtalamaVade?: string;
        DolanBakiye?: number;
        DolanVade?: string;
        DolacakIlkFaturaTutari?: number;
        DolacakIlkFaturaVade?: string;
        SonTahsilatTarihi?: string;
        SonTahsilatTutari?: number;
        DevredenBakiye?: number;
        DevredenVade?: string;
    }
    namespace TigerBorcluVadeAnaliziRow {
        const idProperty = "CariReferans";
        const nameProperty = "CariHesapKodu";
        const localTextPrefix = "Raporlar.TigerBorcluVadeAnalizi";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CariReferans = "CariReferans",
            CariHesapKodu = "CariHesapKodu",
            Temsilci = "Temsilci",
            CariHesapUnvani = "CariHesapUnvani",
            OzelKod1 = "OzelKod1",
            OzelKod2 = "OzelKod2",
            OzelKod3 = "OzelKod3",
            OzelKod4 = "OzelKod4",
            OzelKod5 = "OzelKod5",
            TanimliVade = "TanimliVade",
            ToplamBakiye = "ToplamBakiye",
            OrtalamaVade = "OrtalamaVade",
            DolanBakiye = "DolanBakiye",
            DolanVade = "DolanVade",
            DolacakIlkFaturaTutari = "DolacakIlkFaturaTutari",
            DolacakIlkFaturaVade = "DolacakIlkFaturaVade",
            SonTahsilatTarihi = "SonTahsilatTarihi",
            SonTahsilatTutari = "SonTahsilatTutari",
            DevredenBakiye = "DevredenBakiye",
            DevredenVade = "DevredenVade"
        }
    }
}
declare namespace E_Maliyet.Raporlar {
    namespace TigerBorcluVadeAnaliziService {
        const baseUrl = "Raporlar/TigerBorcluVadeAnalizi";
        function Create(request: Serenity.SaveRequest<TigerBorcluVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TigerBorcluVadeAnaliziRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TigerBorcluVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TigerBorcluVadeAnaliziRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Raporlar/TigerBorcluVadeAnalizi/Create",
            Update = "Raporlar/TigerBorcluVadeAnalizi/Update",
            Delete = "Raporlar/TigerBorcluVadeAnalizi/Delete",
            Retrieve = "Raporlar/TigerBorcluVadeAnalizi/Retrieve",
            List = "Raporlar/TigerBorcluVadeAnalizi/List"
        }
    }
}
declare namespace Serenity.Reporting {
    interface ReportRetrieveResult extends Serenity.ServiceResponse {
        IsExternalReport?: boolean;
        ReportKey?: string;
        Title?: string;
        Properties?: Serenity.PropertyItem[];
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
declare namespace E_Maliyet.Satinalma {
}
declare namespace E_Maliyet.Satinalma {
}
declare namespace E_Maliyet.Satinalma {
    interface SatinalmaAnalizRaporuForm {
        CariStatusu: Serenity.StringEditor;
        CariKodu: Serenity.StringEditor;
        CariUnvani: Serenity.StringEditor;
        CariOzelKodu: Serenity.StringEditor;
        CariOzelKod5: Serenity.StringEditor;
        CariYetkiKodu: Serenity.StringEditor;
        VergiDairesi: Serenity.StringEditor;
        VergiNo: Serenity.StringEditor;
        MalzemeKodu: Serenity.StringEditor;
        MalzemeAciklamasi: Serenity.StringEditor;
        MalzemeOzelKodu: Serenity.StringEditor;
        MalzemeOzelKod2: Serenity.StringEditor;
        MalzemeOzelKod3: Serenity.StringEditor;
        MalzemeOzelKod4: Serenity.StringEditor;
        MalzemeOzelKod5: Serenity.StringEditor;
        MalzemeGrupKodu: Serenity.StringEditor;
        MalzemeYetkiKodu: Serenity.StringEditor;
        FisTuru: Serenity.StringEditor;
        FisTarihi: Serenity.DateEditor;
        FisNo: Serenity.StringEditor;
        MuhasebeDurumu: Serenity.StringEditor;
        FaturaDurumu: Serenity.StringEditor;
        FaturaNo: Serenity.StringEditor;
        FisAyi: Serenity.StringEditor;
        Miktar: Serenity.IntegerEditor;
        Kdv: Serenity.DecimalEditor;
        KdvHaric: Serenity.DecimalEditor;
        KdvTutari: Serenity.DecimalEditor;
        SatirTipi: Serenity.StringEditor;
        SaticiKodu: Serenity.StringEditor;
        SaticiAdi: Serenity.StringEditor;
        Maliyet: Serenity.DecimalEditor;
        SatisFiyatFarki: Serenity.DecimalEditor;
        Kar: Serenity.DecimalEditor;
        Yil: Serenity.IntegerEditor;
        Sehir: Serenity.StringEditor;
    }
    class SatinalmaAnalizRaporuForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Satinalma {
    interface SatinalmaAnalizRaporuRow {
        Referans?: number;
        CariStatusu?: string;
        CariKodu?: string;
        CariUnvani?: string;
        CariOzelKodu?: string;
        CariOzelKod5?: string;
        CariYetkiKodu?: string;
        VergiDairesi?: string;
        VergiNo?: string;
        MalzemeKodu?: string;
        MalzemeAciklamasi?: string;
        MalzemeOzelKodu?: string;
        MalzemeOzelKod2?: string;
        MalzemeOzelKod3?: string;
        MalzemeOzelKod4?: string;
        MalzemeOzelKod5?: string;
        MalzemeGrupKodu?: string;
        MalzemeYetkiKodu?: string;
        FisTuru?: string;
        FisTarihi?: string;
        FisNo?: string;
        MuhasebeDurumu?: string;
        FaturaDurumu?: string;
        FaturaNo?: string;
        FisAyi?: string;
        Miktar?: number;
        Kdv?: number;
        KdvHaric?: number;
        KdvTutari?: number;
        SatirTipi?: string;
        SaticiKodu?: string;
        SaticiAdi?: string;
        Maliyet?: number;
        SatisFiyatFarki?: number;
        Kar?: number;
        Yil?: number;
        Sehir?: string;
    }
    namespace SatinalmaAnalizRaporuRow {
        const idProperty = "Referans";
        const nameProperty = "CariStatusu";
        const localTextPrefix = "Satinalma.SatinalmaAnalizRaporu";
        const deletePermission = "Sat\u0131nalma Analiz Raporu:Silme";
        const insertPermission = "Sat\u0131nalma Analiz Raporu:Ekleme";
        const readPermission = "Sat\u0131nalma Analiz Raporu:Okuma";
        const updatePermission = "Sat\u0131nalma Analiz Raporu:G\u00FCncelleme";
        const enum Fields {
            Referans = "Referans",
            CariStatusu = "CariStatusu",
            CariKodu = "CariKodu",
            CariUnvani = "CariUnvani",
            CariOzelKodu = "CariOzelKodu",
            CariOzelKod5 = "CariOzelKod5",
            CariYetkiKodu = "CariYetkiKodu",
            VergiDairesi = "VergiDairesi",
            VergiNo = "VergiNo",
            MalzemeKodu = "MalzemeKodu",
            MalzemeAciklamasi = "MalzemeAciklamasi",
            MalzemeOzelKodu = "MalzemeOzelKodu",
            MalzemeOzelKod2 = "MalzemeOzelKod2",
            MalzemeOzelKod3 = "MalzemeOzelKod3",
            MalzemeOzelKod4 = "MalzemeOzelKod4",
            MalzemeOzelKod5 = "MalzemeOzelKod5",
            MalzemeGrupKodu = "MalzemeGrupKodu",
            MalzemeYetkiKodu = "MalzemeYetkiKodu",
            FisTuru = "FisTuru",
            FisTarihi = "FisTarihi",
            FisNo = "FisNo",
            MuhasebeDurumu = "MuhasebeDurumu",
            FaturaDurumu = "FaturaDurumu",
            FaturaNo = "FaturaNo",
            FisAyi = "FisAyi",
            Miktar = "Miktar",
            Kdv = "Kdv",
            KdvHaric = "KdvHaric",
            KdvTutari = "KdvTutari",
            SatirTipi = "SatirTipi",
            SaticiKodu = "SaticiKodu",
            SaticiAdi = "SaticiAdi",
            Maliyet = "Maliyet",
            SatisFiyatFarki = "SatisFiyatFarki",
            Kar = "Kar",
            Yil = "Yil",
            Sehir = "Sehir"
        }
    }
}
declare namespace E_Maliyet.Satinalma {
    namespace SatinalmaAnalizRaporuService {
        const baseUrl = "Satinalma/SatinalmaAnalizRaporu";
        function Create(request: Serenity.SaveRequest<SatinalmaAnalizRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SatinalmaAnalizRaporuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SatinalmaAnalizRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SatinalmaAnalizRaporuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Satinalma/SatinalmaAnalizRaporu/Create",
            Update = "Satinalma/SatinalmaAnalizRaporu/Update",
            Delete = "Satinalma/SatinalmaAnalizRaporu/Delete",
            Retrieve = "Satinalma/SatinalmaAnalizRaporu/Retrieve",
            List = "Satinalma/SatinalmaAnalizRaporu/List"
        }
    }
}
declare namespace E_Maliyet {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
        TigerFirma?: string;
        TigerDonem?: string;
        TigerFirmaAdi?: string;
        TigerDonemAdi?: string;
        UserId?: number;
    }
}
declare namespace E_Maliyet.Texts {
}
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
    interface BankaHareketleriForm {
        BankaAdi: Serenity.StringEditor;
        HesapAdi: Serenity.StringEditor;
        Tarih: Serenity.DateEditor;
        FisNo: Serenity.StringEditor;
        FisTuru: Serenity.StringEditor;
        SatirAciklamasi: Serenity.StringEditor;
        TahsilTl: Serenity.DecimalEditor;
        OdemeTl: Serenity.DecimalEditor;
        TahsilUsd: Serenity.DecimalEditor;
        OdemeUsd: Serenity.DecimalEditor;
        TahsilEuro: Serenity.DecimalEditor;
        OdemeEuro: Serenity.DecimalEditor;
    }
    class BankaHareketleriForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface BankaHareketleriRow {
        Id?: number;
        BankaAdi?: string;
        HesapAdi?: string;
        Tarih?: string;
        FisNo?: string;
        FisTuru?: string;
        SatirAciklamasi?: string;
        TahsilTl?: number;
        OdemeTl?: number;
        TahsilUsd?: number;
        OdemeUsd?: number;
        TahsilEuro?: number;
        OdemeEuro?: number;
    }
    namespace BankaHareketleriRow {
        const idProperty = "Id";
        const nameProperty = "BankaAdi";
        const localTextPrefix = "Tiger.BankaHareketleri";
        const deletePermission = "Finans";
        const insertPermission = "Finans";
        const readPermission = "Finans";
        const updatePermission = "Finans";
        const enum Fields {
            Id = "Id",
            BankaAdi = "BankaAdi",
            HesapAdi = "HesapAdi",
            Tarih = "Tarih",
            FisNo = "FisNo",
            FisTuru = "FisTuru",
            SatirAciklamasi = "SatirAciklamasi",
            TahsilTl = "TahsilTl",
            OdemeTl = "OdemeTl",
            TahsilUsd = "TahsilUsd",
            OdemeUsd = "OdemeUsd",
            TahsilEuro = "TahsilEuro",
            OdemeEuro = "OdemeEuro"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace BankaHareketleriService {
        const baseUrl = "Tiger/BankaHareketleri";
        function Create(request: Serenity.SaveRequest<BankaHareketleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankaHareketleriRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankaHareketleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankaHareketleriRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/BankaHareketleri/Create",
            Update = "Tiger/BankaHareketleri/Update",
            Delete = "Tiger/BankaHareketleri/Delete",
            Retrieve = "Tiger/BankaHareketleri/Retrieve",
            List = "Tiger/BankaHareketleri/List"
        }
    }
}
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
    interface CariHesapListesiForm {
        Code: Serenity.StringEditor;
        Definition: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Active: Serenity.IntegerEditor;
        Cardtype: Serenity.IntegerEditor;
        Specode: Serenity.StringEditor;
        Tradinggrp: Serenity.StringEditor;
        Cyphcode: Serenity.StringEditor;
        Incharge: Serenity.StringEditor;
        Specode2: Serenity.StringEditor;
        Specode3: Serenity.StringEditor;
        Specode4: Serenity.StringEditor;
        Specode5: Serenity.StringEditor;
        Taxoffice: Serenity.StringEditor;
        Taxnr: Serenity.StringEditor;
        Tckno: Serenity.StringEditor;
        Emailaddr: Serenity.StringEditor;
        Telnrs1: Serenity.StringEditor;
        Telnrs2: Serenity.StringEditor;
        Orglogicref: Serenity.IntegerEditor;
        Wflowcrdref: Serenity.IntegerEditor;
        Purchbrws: Serenity.IntegerEditor;
        Salesbrws: Serenity.IntegerEditor;
        Finbrws: Serenity.IntegerEditor;
        Wflowcrd: Serenity.StringEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        DebitRd: Serenity.DecimalEditor;
        CreditRd: Serenity.DecimalEditor;
    }
    class CariHesapListesiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface CariHesapListesiRow {
        Logicalref?: number;
        Code?: string;
        Definition?: string;
        City?: string;
        Country?: string;
        Active?: number;
        Cardtype?: number;
        Specode?: string;
        Tradinggrp?: string;
        Cyphcode?: string;
        Incharge?: string;
        Specode2?: string;
        Specode3?: string;
        Specode4?: string;
        Specode5?: string;
        Taxoffice?: string;
        Taxnr?: string;
        Tckno?: string;
        Emailaddr?: string;
        Telnrs1?: string;
        Telnrs2?: string;
        Orglogicref?: number;
        Wflowcrdref?: number;
        Purchbrws?: number;
        Salesbrws?: number;
        Finbrws?: number;
        Wflowcrd?: string;
        Debit?: number;
        Credit?: number;
        DebitRd?: number;
        CreditRd?: number;
        Bakiye?: string;
    }
    namespace CariHesapListesiRow {
        const idProperty = "Logicalref";
        const nameProperty = "Definition";
        const localTextPrefix = "Tiger.CariHesapListesi";
        const lookupKey = "Tiger.CariHesapListesi";
        function getLookup(): Q.Lookup<CariHesapListesiRow>;
        const deletePermission = "Cari G\u00F6r\u00FC\u015Fmeler:Silme";
        const insertPermission = "Cari G\u00F6r\u00FC\u015Fmeler:Ekleme";
        const readPermission = "Cari G\u00F6r\u00FC\u015Fmeler:Okuma";
        const updatePermission = "Cari G\u00F6r\u00FC\u015Fmeler:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Code = "Code",
            Definition = "Definition",
            City = "City",
            Country = "Country",
            Active = "Active",
            Cardtype = "Cardtype",
            Specode = "Specode",
            Tradinggrp = "Tradinggrp",
            Cyphcode = "Cyphcode",
            Incharge = "Incharge",
            Specode2 = "Specode2",
            Specode3 = "Specode3",
            Specode4 = "Specode4",
            Specode5 = "Specode5",
            Taxoffice = "Taxoffice",
            Taxnr = "Taxnr",
            Tckno = "Tckno",
            Emailaddr = "Emailaddr",
            Telnrs1 = "Telnrs1",
            Telnrs2 = "Telnrs2",
            Orglogicref = "Orglogicref",
            Wflowcrdref = "Wflowcrdref",
            Purchbrws = "Purchbrws",
            Salesbrws = "Salesbrws",
            Finbrws = "Finbrws",
            Wflowcrd = "Wflowcrd",
            Debit = "Debit",
            Credit = "Credit",
            DebitRd = "DebitRd",
            CreditRd = "CreditRd",
            Bakiye = "Bakiye"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace CariHesapListesiService {
        const baseUrl = "Tiger/CariHesapListesi";
        function Create(request: Serenity.SaveRequest<CariHesapListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CariHesapListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CariHesapListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CariHesapListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/CariHesapListesi/Create",
            Update = "Tiger/CariHesapListesi/Update",
            Delete = "Tiger/CariHesapListesi/Delete",
            Retrieve = "Tiger/CariHesapListesi/Retrieve",
            List = "Tiger/CariHesapListesi/List"
        }
    }
}
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
    interface TigerDonemlerForm {
        Nr: Serenity.IntegerEditor;
        Firmnr: Serenity.IntegerEditor;
        Begdate: Serenity.DateEditor;
        Enddate: Serenity.DateEditor;
        Active: Serenity.IntegerEditor;
        Key1: Serenity.IntegerEditor;
        Key2: Serenity.IntegerEditor;
        Key3: Serenity.IntegerEditor;
        Key4: Serenity.IntegerEditor;
        Perlocalctype: Serenity.IntegerEditor;
        Perrepcurr: Serenity.IntegerEditor;
    }
    class TigerDonemlerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface TigerDonemlerRow {
        Logicalref?: number;
        Nr?: number;
        Firmnr?: number;
        Begdate?: string;
        Enddate?: string;
        Active?: number;
        Key1?: number;
        Key2?: number;
        Key3?: number;
        Key4?: number;
        Perlocalctype?: number;
        Perrepcurr?: number;
        FirmaDonemStr?: string;
    }
    namespace TigerDonemlerRow {
        const idProperty = "Nr";
        const nameProperty = "FirmaDonemStr";
        const localTextPrefix = "Tiger.TigerDonemler";
        const lookupKey = "Firmnr";
        function getLookup(): Q.Lookup<TigerDonemlerRow>;
        const deletePermission = "Tiger Firmalar:Silme";
        const insertPermission = "Tiger Firmalar:Ekleme";
        const readPermission = "Tiger D\u00F6nemler:Okuma";
        const updatePermission = "Tiger Firmalar:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Nr = "Nr",
            Firmnr = "Firmnr",
            Begdate = "Begdate",
            Enddate = "Enddate",
            Active = "Active",
            Key1 = "Key1",
            Key2 = "Key2",
            Key3 = "Key3",
            Key4 = "Key4",
            Perlocalctype = "Perlocalctype",
            Perrepcurr = "Perrepcurr",
            FirmaDonemStr = "FirmaDonemStr"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace TigerDonemlerService {
        const baseUrl = "Tiger/TigerDonemler";
        function Create(request: Serenity.SaveRequest<TigerDonemlerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TigerDonemlerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TigerDonemlerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TigerDonemlerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/TigerDonemler/Create",
            Update = "Tiger/TigerDonemler/Update",
            Delete = "Tiger/TigerDonemler/Delete",
            Retrieve = "Tiger/TigerDonemler/Retrieve",
            List = "Tiger/TigerDonemler/List"
        }
    }
}
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
    interface TigerFirmalarForm {
        Nr: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        Road: Serenity.StringEditor;
        Doornr: Serenity.StringEditor;
        District: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Zipcode: Serenity.StringEditor;
        Phone1: Serenity.StringEditor;
        Phone2: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Taxoff: Serenity.StringEditor;
        Taxnr: Serenity.StringEditor;
        Securnr: Serenity.StringEditor;
        Direct: Serenity.StringEditor;
        Cpaname: Serenity.StringEditor;
        Cpastreet: Serenity.StringEditor;
        Cparoad: Serenity.StringEditor;
        Cpadoornr: Serenity.StringEditor;
        Cpadistrict: Serenity.StringEditor;
        Cpacity: Serenity.StringEditor;
        Cpaphone: Serenity.StringEditor;
        Cpataxoff: Serenity.StringEditor;
        Cpataxnr: Serenity.StringEditor;
        Cpachambnr: Serenity.StringEditor;
        Begmon: Serenity.IntegerEditor;
        Begday: Serenity.IntegerEditor;
        Userext: Serenity.IntegerEditor;
        Pernr: Serenity.IntegerEditor;
        Countofleg: Serenity.IntegerEditor;
        Ctable: Serenity.StringEditor;
        Workdayflgs1: Serenity.IntegerEditor;
        Workdayflgs2: Serenity.IntegerEditor;
        Workdayflgs3: Serenity.IntegerEditor;
        Workdayflgs4: Serenity.IntegerEditor;
        Workdayflgs5: Serenity.IntegerEditor;
        Workdayflgs6: Serenity.IntegerEditor;
        Workdayflgs7: Serenity.IntegerEditor;
        Localctyp: Serenity.IntegerEditor;
        Firmrepcurr: Serenity.IntegerEditor;
        Sepexchtable: Serenity.IntegerEditor;
        Vatroundmtd: Serenity.IntegerEditor;
        Firmeuvatnumber: Serenity.StringEditor;
        Majversnr: Serenity.IntegerEditor;
        Minversnr: Serenity.IntegerEditor;
        Relversnr: Serenity.IntegerEditor;
        Siteid: Serenity.IntegerEditor;
        Orgchart: Serenity.IntegerEditor;
        Localcaldr: Serenity.IntegerEditor;
        Firmlang: Serenity.IntegerEditor;
        Taxoffcode: Serenity.StringEditor;
        Cntrycode: Serenity.StringEditor;
        Longperiods: Serenity.IntegerEditor;
        Logoid: Serenity.StringEditor;
        Emailaddr: Serenity.StringEditor;
        Webaddr: Serenity.StringEditor;
        Moddate: Serenity.DateEditor;
        Modtime: Serenity.IntegerEditor;
        Traderegisno: Serenity.StringEditor;
        Employername: Serenity.StringEditor;
        Employersurname: Serenity.StringEditor;
        Employeridtcno: Serenity.StringEditor;
        Employeremail: Serenity.StringEditor;
        Firmytlstatus: Serenity.IntegerEditor;
        Ytlsourcefirm: Serenity.IntegerEditor;
        Zusatzno: Serenity.StringEditor;
        Taxoffstatecd: Serenity.StringEditor;
        Taxoffstatenm: Serenity.StringEditor;
        Statecode: Serenity.StringEditor;
        Statename: Serenity.StringEditor;
        Cpaoccupation: Serenity.StringEditor;
        Cpaextension: Serenity.StringEditor;
        Cpaemail: Serenity.StringEditor;
        Cpasurname: Serenity.StringEditor;
        Cpaidtcno: Serenity.StringEditor;
        Accofficecode: Serenity.StringEditor;
        Advancedproduct: Serenity.IntegerEditor;
        Bagkurnr: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Dbname: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        Actarea: Serenity.IntegerEditor;
        Sector: Serenity.IntegerEditor;
        Srccriteria: Serenity.StringEditor;
        Conscoderef: Serenity.IntegerEditor;
        Tcellappid: Serenity.StringEditor;
        Tcellapppw: Serenity.StringEditor;
        Dncnstlen: Serenity.IntegerEditor;
        Useserverdate: Serenity.IntegerEditor;
        Usechangelog: Serenity.IntegerEditor;
        Mobusername: Serenity.StringEditor;
        Mobpassword: Serenity.StringEditor;
        Mobfirmalias: Serenity.StringEditor;
        Accepteinv: Serenity.IntegerEditor;
        Einvoiceid: Serenity.StringEditor;
        Profileid: Serenity.StringEditor;
        Usecommonparam: Serenity.IntegerEditor;
        Passive: Serenity.IntegerEditor;
        Usercode: Serenity.StringEditor;
        Parole: Serenity.StringEditor;
        Passwordtaxdecl: Serenity.StringEditor;
        Firmemailaddr: Serenity.StringEditor;
        Firmtype: Serenity.IntegerEditor;
        Nacecode: Serenity.StringEditor;
        Cpacountry: Serenity.StringEditor;
        Cpazipcode: Serenity.StringEditor;
        Cpafaxnr: Serenity.StringEditor;
        Cpacntrycode: Serenity.StringEditor;
        Useebook: Serenity.IntegerEditor;
        Contractdesc: Serenity.StringEditor;
        Contracttype: Serenity.StringEditor;
        Contractdate: Serenity.DateEditor;
        Contractnumber: Serenity.StringEditor;
        Hashvers: Serenity.StringEditor;
        Timestampuser: Serenity.StringEditor;
        Timestamppass: Serenity.StringEditor;
        Timestampserver: Serenity.StringEditor;
        Useproxy: Serenity.IntegerEditor;
        Ptimestampuser: Serenity.StringEditor;
        Ptimestamppass: Serenity.StringEditor;
        Ptimestamphost: Serenity.StringEditor;
        Ptimestampport: Serenity.IntegerEditor;
        Timestampport: Serenity.IntegerEditor;
        Timestampapppth: Serenity.StringEditor;
        Jgserverurl: Serenity.StringEditor;
        Jgusername: Serenity.StringEditor;
        Jgpassword: Serenity.StringEditor;
        Jgcompanynr: Serenity.IntegerEditor;
        Jgperiodnr: Serenity.IntegerEditor;
        Jghrfirmcode: Serenity.StringEditor;
        Deductlimit: Serenity.DecimalEditor;
        Postlabelcode: Serenity.StringEditor;
        Senderlabelcode: Serenity.StringEditor;
        Einvconttype: Serenity.IntegerEditor;
        Ebookconttype: Serenity.IntegerEditor;
        Mersisno: Serenity.StringEditor;
        Officaltitle: Serenity.StringEditor;
        Useearchive: Serenity.IntegerEditor;
        Intsalesaddr: Serenity.StringEditor;
        Faxusername: Serenity.StringEditor;
        Faxuserkey: Serenity.StringEditor;
        Faxemailaddr: Serenity.StringEditor;
        Ebookstartdate: Serenity.DateEditor;
        Ebookcurrtype: Serenity.IntegerEditor;
        Earcentsend: Serenity.IntegerEditor;
        Earcentuser: Serenity.StringEditor;
        Earcentpass: Serenity.StringEditor;
        Earcentdefaddr: Serenity.StringEditor;
        Cpatitle: Serenity.IntegerEditor;
        Isebookkeptbyfirm: Serenity.IntegerEditor;
        Isymmcontractmade: Serenity.IntegerEditor;
        Ymmname: Serenity.StringEditor;
        Ymmsurname: Serenity.StringEditor;
        Ymmcontdesc: Serenity.StringEditor;
        Ymmconttype: Serenity.StringEditor;
        Ymmcontdate: Serenity.IntegerEditor;
        Ymmcontnumber: Serenity.StringEditor;
        Lastcontrolno: Serenity.IntegerEditor;
        Lastjournalno: Serenity.IntegerEditor;
        Lastgloblineno: Serenity.IntegerEditor;
        Backupebooks: Serenity.IntegerEditor;
        Einvcustom: Serenity.IntegerEditor;
        Ymmphone: Serenity.StringEditor;
        Ymmfaxnr: Serenity.StringEditor;
        Ymmemail: Serenity.StringEditor;
        Einvoicetypsgk: Serenity.IntegerEditor;
        Taxpayercode: Serenity.StringEditor;
        Taxpayername: Serenity.StringEditor;
        Ymmchambnr: Serenity.StringEditor;
        Ymmtcno: Serenity.StringEditor;
        Ymmtaxnr: Serenity.StringEditor;
        Useedespatch: Serenity.IntegerEditor;
        Postlabelcodedesp: Serenity.StringEditor;
        Senderlabelcodedesp: Serenity.StringEditor;
        Shaalgorithm: Serenity.IntegerEditor;
        Useeproducerrec: Serenity.IntegerEditor;
        Cpakdspassword: Serenity.StringEditor;
        Cpausername: Serenity.StringEditor;
        Useetradesmaninv: Serenity.IntegerEditor;
        Liquidatingdate: Serenity.IntegerEditor;
        Liquidatedfirm: Serenity.IntegerEditor;
        Getcpafromdiv: Serenity.IntegerEditor;
        Liquidationtyp: Serenity.IntegerEditor;
        Emutentsend: Serenity.IntegerEditor;
        Passwordtaxdecl2: Serenity.StringEditor;
        Emutentuser: Serenity.StringEditor;
        Emutentdefaddr: Serenity.StringEditor;
        Emutentpass: Serenity.StringEditor;
        Cpatckn: Serenity.IntegerEditor;
        Usepaperinv: Serenity.IntegerEditor;
        Shpagncod: Serenity.StringEditor;
        Parole2: Serenity.StringEditor;
        Usercode2: Serenity.StringEditor;
    }
    class TigerFirmalarForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface TigerFirmalarRow {
        Logicalref?: number;
        Nr?: number;
        Name?: string;
        Title?: string;
        Street?: string;
        Road?: string;
        Doornr?: string;
        District?: string;
        City?: string;
        Country?: string;
        Zipcode?: string;
        Phone1?: string;
        Phone2?: string;
        Fax?: string;
        Taxoff?: string;
        Taxnr?: string;
        Securnr?: string;
        Direct?: string;
        Cpaname?: string;
        Cpastreet?: string;
        Cparoad?: string;
        Cpadoornr?: string;
        Cpadistrict?: string;
        Cpacity?: string;
        Cpaphone?: string;
        Cpataxoff?: string;
        Cpataxnr?: string;
        Cpachambnr?: string;
        Begmon?: number;
        Begday?: number;
        Userext?: number;
        Pernr?: number;
        Countofleg?: number;
        Ctable?: string;
        Workdayflgs1?: number;
        Workdayflgs2?: number;
        Workdayflgs3?: number;
        Workdayflgs4?: number;
        Workdayflgs5?: number;
        Workdayflgs6?: number;
        Workdayflgs7?: number;
        Localctyp?: number;
        Firmrepcurr?: number;
        Sepexchtable?: number;
        Vatroundmtd?: number;
        Firmeuvatnumber?: string;
        Majversnr?: number;
        Minversnr?: number;
        Relversnr?: number;
        Siteid?: number;
        Orgchart?: number;
        Localcaldr?: number;
        Firmlang?: number;
        Taxoffcode?: string;
        Cntrycode?: string;
        Longperiods?: number;
        Logoid?: string;
        Emailaddr?: string;
        Webaddr?: string;
        Moddate?: string;
        Modtime?: number;
        Traderegisno?: string;
        Employername?: string;
        Employersurname?: string;
        Employeridtcno?: string;
        Employeremail?: string;
        Firmytlstatus?: number;
        Ytlsourcefirm?: number;
        Zusatzno?: string;
        Taxoffstatecd?: string;
        Taxoffstatenm?: string;
        Statecode?: string;
        Statename?: string;
        Cpaoccupation?: string;
        Cpaextension?: string;
        Cpaemail?: string;
        Cpasurname?: string;
        Cpaidtcno?: string;
        Accofficecode?: string;
        Advancedproduct?: number;
        Bagkurnr?: string;
        Username?: string;
        Dbname?: string;
        Password?: string;
        Actarea?: number;
        Sector?: number;
        Srccriteria?: string;
        Conscoderef?: number;
        Tcellappid?: string;
        Tcellapppw?: string;
        Dncnstlen?: number;
        Useserverdate?: number;
        Usechangelog?: number;
        Mobusername?: string;
        Mobpassword?: string;
        Mobfirmalias?: string;
        Accepteinv?: number;
        Einvoiceid?: string;
        Profileid?: string;
        Usecommonparam?: number;
        Passive?: number;
        Usercode?: string;
        Parole?: string;
        Passwordtaxdecl?: string;
        Firmemailaddr?: string;
        Firmtype?: number;
        Nacecode?: string;
        Cpacountry?: string;
        Cpazipcode?: string;
        Cpafaxnr?: string;
        Cpacntrycode?: string;
        Useebook?: number;
        Contractdesc?: string;
        Contracttype?: string;
        Contractdate?: string;
        Contractnumber?: string;
        Hashvers?: string;
        Timestampuser?: string;
        Timestamppass?: string;
        Timestampserver?: string;
        Useproxy?: number;
        Ptimestampuser?: string;
        Ptimestamppass?: string;
        Ptimestamphost?: string;
        Ptimestampport?: number;
        Timestampport?: number;
        Timestampapppth?: string;
        Jgserverurl?: string;
        Jgusername?: string;
        Jgpassword?: string;
        Jgcompanynr?: number;
        Jgperiodnr?: number;
        Jghrfirmcode?: string;
        Deductlimit?: number;
        Postlabelcode?: string;
        Senderlabelcode?: string;
        Einvconttype?: number;
        Ebookconttype?: number;
        Mersisno?: string;
        Officaltitle?: string;
        Useearchive?: number;
        Intsalesaddr?: string;
        Faxusername?: string;
        Faxuserkey?: string;
        Faxemailaddr?: string;
        Ebookstartdate?: string;
        Ebookcurrtype?: number;
        Earcentsend?: number;
        Earcentuser?: string;
        Earcentpass?: string;
        Earcentdefaddr?: string;
        Cpatitle?: number;
        Isebookkeptbyfirm?: number;
        Isymmcontractmade?: number;
        Ymmname?: string;
        Ymmsurname?: string;
        Ymmcontdesc?: string;
        Ymmconttype?: string;
        Ymmcontdate?: number;
        Ymmcontnumber?: string;
        Lastcontrolno?: number;
        Lastjournalno?: number;
        Lastgloblineno?: number;
        Backupebooks?: number;
        Einvcustom?: number;
        Ymmphone?: string;
        Ymmfaxnr?: string;
        Ymmemail?: string;
        Einvoicetypsgk?: number;
        Taxpayercode?: string;
        Taxpayername?: string;
        Ymmchambnr?: string;
        Ymmtcno?: string;
        Ymmtaxnr?: string;
        Useedespatch?: number;
        Postlabelcodedesp?: string;
        Senderlabelcodedesp?: string;
        Shaalgorithm?: number;
        Useeproducerrec?: number;
        Cpakdspassword?: string;
        Cpausername?: string;
        Useetradesmaninv?: number;
        Liquidatingdate?: number;
        Liquidatedfirm?: number;
        Getcpafromdiv?: number;
        Liquidationtyp?: number;
        Emutentsend?: number;
        Passwordtaxdecl2?: string;
        Emutentuser?: string;
        Emutentdefaddr?: string;
        Emutentpass?: string;
        Cpatckn?: number;
        Usepaperinv?: number;
        Shpagncod?: string;
        Parole2?: string;
        Usercode2?: string;
        NameAndNr?: string;
    }
    namespace TigerFirmalarRow {
        const idProperty = "Nr";
        const nameProperty = "NameAndNr";
        const localTextPrefix = "Tiger.TigerFirmalar";
        const lookupKey = "Tiger.TigerFirmalar";
        function getLookup(): Q.Lookup<TigerFirmalarRow>;
        const deletePermission = "Tiger Firmalar:Silme";
        const insertPermission = "Tiger Firmalar:Ekleme";
        const readPermission = "Tiger Firmalar:Okuma";
        const updatePermission = "Tiger Firmalar:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Nr = "Nr",
            Name = "Name",
            Title = "Title",
            Street = "Street",
            Road = "Road",
            Doornr = "Doornr",
            District = "District",
            City = "City",
            Country = "Country",
            Zipcode = "Zipcode",
            Phone1 = "Phone1",
            Phone2 = "Phone2",
            Fax = "Fax",
            Taxoff = "Taxoff",
            Taxnr = "Taxnr",
            Securnr = "Securnr",
            Direct = "Direct",
            Cpaname = "Cpaname",
            Cpastreet = "Cpastreet",
            Cparoad = "Cparoad",
            Cpadoornr = "Cpadoornr",
            Cpadistrict = "Cpadistrict",
            Cpacity = "Cpacity",
            Cpaphone = "Cpaphone",
            Cpataxoff = "Cpataxoff",
            Cpataxnr = "Cpataxnr",
            Cpachambnr = "Cpachambnr",
            Begmon = "Begmon",
            Begday = "Begday",
            Userext = "Userext",
            Pernr = "Pernr",
            Countofleg = "Countofleg",
            Ctable = "Ctable",
            Workdayflgs1 = "Workdayflgs1",
            Workdayflgs2 = "Workdayflgs2",
            Workdayflgs3 = "Workdayflgs3",
            Workdayflgs4 = "Workdayflgs4",
            Workdayflgs5 = "Workdayflgs5",
            Workdayflgs6 = "Workdayflgs6",
            Workdayflgs7 = "Workdayflgs7",
            Localctyp = "Localctyp",
            Firmrepcurr = "Firmrepcurr",
            Sepexchtable = "Sepexchtable",
            Vatroundmtd = "Vatroundmtd",
            Firmeuvatnumber = "Firmeuvatnumber",
            Majversnr = "Majversnr",
            Minversnr = "Minversnr",
            Relversnr = "Relversnr",
            Siteid = "Siteid",
            Orgchart = "Orgchart",
            Localcaldr = "Localcaldr",
            Firmlang = "Firmlang",
            Taxoffcode = "Taxoffcode",
            Cntrycode = "Cntrycode",
            Longperiods = "Longperiods",
            Logoid = "Logoid",
            Emailaddr = "Emailaddr",
            Webaddr = "Webaddr",
            Moddate = "Moddate",
            Modtime = "Modtime",
            Traderegisno = "Traderegisno",
            Employername = "Employername",
            Employersurname = "Employersurname",
            Employeridtcno = "Employeridtcno",
            Employeremail = "Employeremail",
            Firmytlstatus = "Firmytlstatus",
            Ytlsourcefirm = "Ytlsourcefirm",
            Zusatzno = "Zusatzno",
            Taxoffstatecd = "Taxoffstatecd",
            Taxoffstatenm = "Taxoffstatenm",
            Statecode = "Statecode",
            Statename = "Statename",
            Cpaoccupation = "Cpaoccupation",
            Cpaextension = "Cpaextension",
            Cpaemail = "Cpaemail",
            Cpasurname = "Cpasurname",
            Cpaidtcno = "Cpaidtcno",
            Accofficecode = "Accofficecode",
            Advancedproduct = "Advancedproduct",
            Bagkurnr = "Bagkurnr",
            Username = "Username",
            Dbname = "Dbname",
            Password = "Password",
            Actarea = "Actarea",
            Sector = "Sector",
            Srccriteria = "Srccriteria",
            Conscoderef = "Conscoderef",
            Tcellappid = "Tcellappid",
            Tcellapppw = "Tcellapppw",
            Dncnstlen = "Dncnstlen",
            Useserverdate = "Useserverdate",
            Usechangelog = "Usechangelog",
            Mobusername = "Mobusername",
            Mobpassword = "Mobpassword",
            Mobfirmalias = "Mobfirmalias",
            Accepteinv = "Accepteinv",
            Einvoiceid = "Einvoiceid",
            Profileid = "Profileid",
            Usecommonparam = "Usecommonparam",
            Passive = "Passive",
            Usercode = "Usercode",
            Parole = "Parole",
            Passwordtaxdecl = "Passwordtaxdecl",
            Firmemailaddr = "Firmemailaddr",
            Firmtype = "Firmtype",
            Nacecode = "Nacecode",
            Cpacountry = "Cpacountry",
            Cpazipcode = "Cpazipcode",
            Cpafaxnr = "Cpafaxnr",
            Cpacntrycode = "Cpacntrycode",
            Useebook = "Useebook",
            Contractdesc = "Contractdesc",
            Contracttype = "Contracttype",
            Contractdate = "Contractdate",
            Contractnumber = "Contractnumber",
            Hashvers = "Hashvers",
            Timestampuser = "Timestampuser",
            Timestamppass = "Timestamppass",
            Timestampserver = "Timestampserver",
            Useproxy = "Useproxy",
            Ptimestampuser = "Ptimestampuser",
            Ptimestamppass = "Ptimestamppass",
            Ptimestamphost = "Ptimestamphost",
            Ptimestampport = "Ptimestampport",
            Timestampport = "Timestampport",
            Timestampapppth = "Timestampapppth",
            Jgserverurl = "Jgserverurl",
            Jgusername = "Jgusername",
            Jgpassword = "Jgpassword",
            Jgcompanynr = "Jgcompanynr",
            Jgperiodnr = "Jgperiodnr",
            Jghrfirmcode = "Jghrfirmcode",
            Deductlimit = "Deductlimit",
            Postlabelcode = "Postlabelcode",
            Senderlabelcode = "Senderlabelcode",
            Einvconttype = "Einvconttype",
            Ebookconttype = "Ebookconttype",
            Mersisno = "Mersisno",
            Officaltitle = "Officaltitle",
            Useearchive = "Useearchive",
            Intsalesaddr = "Intsalesaddr",
            Faxusername = "Faxusername",
            Faxuserkey = "Faxuserkey",
            Faxemailaddr = "Faxemailaddr",
            Ebookstartdate = "Ebookstartdate",
            Ebookcurrtype = "Ebookcurrtype",
            Earcentsend = "Earcentsend",
            Earcentuser = "Earcentuser",
            Earcentpass = "Earcentpass",
            Earcentdefaddr = "Earcentdefaddr",
            Cpatitle = "Cpatitle",
            Isebookkeptbyfirm = "Isebookkeptbyfirm",
            Isymmcontractmade = "Isymmcontractmade",
            Ymmname = "Ymmname",
            Ymmsurname = "Ymmsurname",
            Ymmcontdesc = "Ymmcontdesc",
            Ymmconttype = "Ymmconttype",
            Ymmcontdate = "Ymmcontdate",
            Ymmcontnumber = "Ymmcontnumber",
            Lastcontrolno = "Lastcontrolno",
            Lastjournalno = "Lastjournalno",
            Lastgloblineno = "Lastgloblineno",
            Backupebooks = "Backupebooks",
            Einvcustom = "Einvcustom",
            Ymmphone = "Ymmphone",
            Ymmfaxnr = "Ymmfaxnr",
            Ymmemail = "Ymmemail",
            Einvoicetypsgk = "Einvoicetypsgk",
            Taxpayercode = "Taxpayercode",
            Taxpayername = "Taxpayername",
            Ymmchambnr = "Ymmchambnr",
            Ymmtcno = "Ymmtcno",
            Ymmtaxnr = "Ymmtaxnr",
            Useedespatch = "Useedespatch",
            Postlabelcodedesp = "Postlabelcodedesp",
            Senderlabelcodedesp = "Senderlabelcodedesp",
            Shaalgorithm = "Shaalgorithm",
            Useeproducerrec = "Useeproducerrec",
            Cpakdspassword = "Cpakdspassword",
            Cpausername = "Cpausername",
            Useetradesmaninv = "Useetradesmaninv",
            Liquidatingdate = "Liquidatingdate",
            Liquidatedfirm = "Liquidatedfirm",
            Getcpafromdiv = "Getcpafromdiv",
            Liquidationtyp = "Liquidationtyp",
            Emutentsend = "Emutentsend",
            Passwordtaxdecl2 = "Passwordtaxdecl2",
            Emutentuser = "Emutentuser",
            Emutentdefaddr = "Emutentdefaddr",
            Emutentpass = "Emutentpass",
            Cpatckn = "Cpatckn",
            Usepaperinv = "Usepaperinv",
            Shpagncod = "Shpagncod",
            Parole2 = "Parole2",
            Usercode2 = "Usercode2",
            NameAndNr = "NameAndNr"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace TigerFirmalarService {
        const baseUrl = "Tiger/TigerFirmalar";
        function Create(request: Serenity.SaveRequest<TigerFirmalarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TigerFirmalarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TigerFirmalarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TigerFirmalarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/TigerFirmalar/Create",
            Update = "Tiger/TigerFirmalar/Update",
            Delete = "Tiger/TigerFirmalar/Delete",
            Retrieve = "Tiger/TigerFirmalar/Retrieve",
            List = "Tiger/TigerFirmalar/List"
        }
    }
}
declare namespace E_Maliyet.VeriGirisleri {
}
declare namespace E_Maliyet.VeriGirisleri {
    interface CariGorusmelerForm {
        CariRef: Serenity.LookupEditor;
        Tarih: Serenity.DateEditor;
        Gorusen: Serenity.LookupEditor;
        Gorusulen: Serenity.StringEditor;
        GorusulenUnvan: Serenity.StringEditor;
        Bakiye: Serenity.DecimalEditor;
        Tutar: Serenity.DecimalEditor;
        OdemeBaslangic: Serenity.DateEditor;
        OdemeBitis: Serenity.DateEditor;
        Aciklama: Serenity.TextAreaEditor;
    }
    class CariGorusmelerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.VeriGirisleri {
    interface CariGorusmelerRow {
        Logicalref?: number;
        Firma?: number;
        CariRef?: number;
        Tarih?: string;
        Gorusen?: number;
        Gorusulen?: string;
        GorusulenUnvan?: string;
        Tutar?: number;
        OdemeBaslangic?: string;
        OdemeBitis?: string;
        Aciklama?: string;
        Bakiye?: number;
        CariAdi?: string;
        GorusenAdi?: string;
        Specode2?: string;
        CariAdiKodu?: string;
    }
    namespace CariGorusmelerRow {
        const idProperty = "Logicalref";
        const nameProperty = "Gorusulen";
        const localTextPrefix = "VeriGirisleri.CariGorusmeler";
        const deletePermission = "Cari G\u00F6r\u00FC\u015Fmeler:Silme";
        const insertPermission = "Cari G\u00F6r\u00FC\u015Fmeler:Ekleme";
        const readPermission = "Cari G\u00F6r\u00FC\u015Fmeler:Okuma";
        const updatePermission = "Cari G\u00F6r\u00FC\u015Fmeler:G\u00FCncelleme";
        const enum Fields {
            Logicalref = "Logicalref",
            Firma = "Firma",
            CariRef = "CariRef",
            Tarih = "Tarih",
            Gorusen = "Gorusen",
            Gorusulen = "Gorusulen",
            GorusulenUnvan = "GorusulenUnvan",
            Tutar = "Tutar",
            OdemeBaslangic = "OdemeBaslangic",
            OdemeBitis = "OdemeBitis",
            Aciklama = "Aciklama",
            Bakiye = "Bakiye",
            CariAdi = "CariAdi",
            GorusenAdi = "GorusenAdi",
            Specode2 = "Specode2",
            CariAdiKodu = "CariAdiKodu"
        }
    }
}
declare namespace E_Maliyet.VeriGirisleri {
    namespace CariGorusmelerService {
        const baseUrl = "VeriGirisleri/CariGorusmeler";
        function Create(request: Serenity.SaveRequest<CariGorusmelerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CariGorusmelerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CariGorusmelerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CariGorusmelerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "VeriGirisleri/CariGorusmeler/Create",
            Update = "VeriGirisleri/CariGorusmeler/Update",
            Delete = "VeriGirisleri/CariGorusmeler/Delete",
            Retrieve = "VeriGirisleri/CariGorusmeler/Retrieve",
            List = "VeriGirisleri/CariGorusmeler/List"
        }
    }
}
declare namespace E_Maliyet.VeriGirisleri {
}
declare namespace E_Maliyet.Web.Modules.Raporlar {
    interface BorcluVadeAnaliziRequest extends Serenity.ListRequest {
        RaporTarihi?: string;
        CariHesapKodu?: string;
        Bakiye?: number;
    }
}
declare namespace E_Maliyet.Web.Modules.Raporlar.HareketsizCariListesi {
    interface HareketsizCariListesiRequest extends Serenity.ListRequest {
        BaslangicTarihi?: string;
        BitisTarihi?: string;
    }
}
declare namespace E_Maliyet.Administration {
    class DataAuditLogDialog extends Serenity.EntityDialog<DataAuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: DataAuditLogForm;
        protected getToolbarButtons(): any[];
        protected updateInterface(): void;
    }
}
declare namespace E_Maliyet.Administration {
    class DataAuditLogGrid extends Serenity.EntityGrid<DataAuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataAuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace E_Maliyet.Administration {
    class KullaniciRaporFiltreleriDialog extends Serenity.EntityDialog<KullaniciRaporFiltreleriRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KullaniciRaporFiltreleriForm;
    }
}
declare namespace E_Maliyet.Administration {
    class KullaniciRaporFiltreleriGrid extends Serenity.EntityGrid<KullaniciRaporFiltreleriRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KullaniciRaporFiltreleriDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace E_Maliyet.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace E_Maliyet.Administration {
    class RaporlarDialog extends Serenity.EntityDialog<RaporlarRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RaporlarForm;
    }
}
declare namespace E_Maliyet.Administration {
    class RaporlarGrid extends Serenity.EntityGrid<RaporlarRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RaporlarDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace E_Maliyet.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace E_Maliyet.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace E_Maliyet.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace E_Maliyet.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace E_Maliyet.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace E_Maliyet.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace E_Maliyet.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace E_Maliyet.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogButtons(): {
            text: string;
            click: (e: any) => void;
        }[];
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace E_Maliyet.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace E_Maliyet.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace E_Maliyet.LanguageList {
    function getValue(): string[][];
}
declare namespace E_Maliyet.ScriptInitialization {
}
declare namespace E_Maliyet {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace E_Maliyet.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace E_Maliyet.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace E_Maliyet.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace E_Maliyet.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace E_Maliyet.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace E_Maliyet.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace E_Maliyet.Membership {
    interface PromptDialogOptions {
        cssClass?: string;
        editorType?: string;
        editorOptions?: any;
        title?: string;
        message?: string;
        isHtml?: boolean;
        value?: any;
        required?: boolean;
        validateValue: (v: any) => boolean;
    }
    class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {
        constructor(opt: PromptDialogOptions);
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        protected loadInitialEntity(): void;
        protected getPropertyItems(): {
            name: string;
            editorType: string;
            required: any;
            editorParams: any;
        }[];
        get value(): any;
        set value(v: any);
        static prompt(title: string, message: string, value: string, validateValue: (string: any) => boolean): void;
    }
}
declare namespace E_Maliyet {
    interface ServiceEditorOptions {
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
    }
    class ServiceEditorBase<TOptions extends ServiceEditorOptions, TRow> extends Serenity.Select2AjaxEditor<TOptions, TRow> {
        private cascadeLink;
        constructor(hidden: JQuery, options: TOptions);
        private setCascadeFrom;
        get cascadeValue(): any;
        set cascadeValue(value: any);
        get cascadeField(): any;
        set cascadeField(value: any);
        get cascadeFrom(): any;
        set cascadeFrom(value: any);
        private getCascadeFromValue;
        protected getIncludeColumns(): string[];
        protected getSort(): string[];
        getTypeDelay(): number;
        private lastRequest;
        executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TRow>>): void;
        executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<TRow>>): void;
    }
}
declare namespace E_Maliyet {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace E_Maliyet.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace E_Maliyet.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace E_Maliyet.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace E_Maliyet.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace E_Maliyet.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): ({
            title: string;
            cssClass: string;
            onClick: () => void;
            icon?: undefined;
        } | {
            title: string;
            cssClass: string;
            icon: string;
            onClick: () => void;
        })[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace E_Maliyet.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace E_Maliyet.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace E_Maliyet.Common {
    class UserLocalStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, value: string): void;
    }
}
interface GridPersistanceFlags {
    columnWidths?: boolean;
    columnVisibility?: boolean;
    sortColumns?: boolean;
    filterItems?: boolean;
    quickFilters?: boolean;
    includeDeleted?: boolean;
}
declare namespace E_Maliyet.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace E_Maliyet.Finans {
    class BankaBakiyeDialog extends Serenity.EntityDialog<BankaBakiyeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankaBakiyeForm;
    }
}
declare namespace E_Maliyet.Finans {
    class BankaBakiyeGrid extends Serenity.EntityGrid<BankaBakiyeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankaBakiyeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getPersistanceFlags(): GridPersistanceFlags;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<E_Maliyet.Finans.BankaBakiyeRow>): Serenity.ListResponse<BankaBakiyeRow>;
        protected getButtons(): Serenity.ToolButton[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace E_Maliyet.Finans {
    class BankaHareketleriDialog extends Serenity.EntityDialog<BankaHareketleriRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankaHareketleriForm;
    }
}
declare namespace E_Maliyet.Finans {
    class BankaHareketleriGrid extends Serenity.EntityGrid<BankaHareketleriRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankaHareketleriDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcVadeAnaliziDialog extends Serenity.EntityDialog<BorcVadeAnaliziRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BorcVadeAnaliziForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcVadeAnaliziGrid extends Serenity.EntityGrid<BorcVadeAnaliziRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorcVadeAnaliziDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace E_Maliyet.Raporlar {
    class CariBakiyeRaporuDialog extends Serenity.EntityDialog<CariBakiyeRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CariBakiyeRaporuForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class CariBakiyeRaporuGrid extends Serenity.EntityGrid<CariBakiyeRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CariBakiyeRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class CekSenetRaporuDialog extends Serenity.EntityDialog<CekSenetRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CekSenetRaporuForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class CekSenetRaporuGrid extends Serenity.EntityGrid<CekSenetRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CekSenetRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Finans {
    class KasaHareketDialog extends Serenity.EntityDialog<KasaHareketRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KasaHareketForm;
    }
}
declare namespace E_Maliyet.Finans {
    class KasaHareketGrid extends Serenity.EntityGrid<KasaHareketRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KasaHareketDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class TahsilatRaporuDialog extends Serenity.EntityDialog<TahsilatRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TahsilatRaporuForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class TahsilatRaporuGrid extends Serenity.EntityGrid<TahsilatRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TahsilatRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace E_Maliyet.Administration {
    class TigerDonemlerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, E_Maliyet.Tiger.TigerDonemlerRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<E_Maliyet.Tiger.TigerDonemlerRow>): Tiger.TigerDonemlerRow[];
    }
}
declare namespace E_Maliyet.Administration {
    class TigerFirmalarEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, E_Maliyet.Tiger.TigerFirmalarRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<E_Maliyet.Tiger.TigerFirmalarRow>): Tiger.TigerFirmalarRow[];
    }
}
declare namespace E_Maliyet.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Muhasebe {
    class BilancoDialog extends Serenity.EntityDialog<BilancoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BilancoForm;
    }
}
declare namespace E_Maliyet.Muhasebe {
    class BilancoGrid extends Serenity.EntityGrid<BilancoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BilancoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Muhasebe {
    class GelirTablosuDialog extends Serenity.EntityDialog<GelirTablosuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GelirTablosuForm;
    }
}
declare namespace E_Maliyet.Muhasebe {
    class GelirTablosuGrid extends Serenity.EntityGrid<GelirTablosuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GelirTablosuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class MizanRaporuDialog extends Serenity.EntityDialog<MizanRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MizanRaporuForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class MizanRaporuGrid extends Serenity.EntityGrid<MizanRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MizanRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Satinalma {
    class SatinalmaAnalizRaporuDialog extends Serenity.EntityDialog<SatinalmaAnalizRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SatinalmaAnalizRaporuForm;
    }
}
declare namespace E_Maliyet.Satinalma {
    class SatinalmaAnalizRaporuGrid extends Serenity.EntityGrid<SatinalmaAnalizRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SatinalmaAnalizRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcluVadeAnaliziDialog extends Serenity.EntityDialog<BorcluVadeAnaliziRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BorcluVadeAnaliziForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcluVadeAnaliziGrid extends Serenity.EntityGrid<BorcluVadeAnaliziRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorcluVadeAnaliziDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcluVadeAnaliziYeniDialog extends Serenity.EntityDialog<BorcluVadeAnaliziYeniRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BorcluVadeAnaliziYeniForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class BorcluVadeAnaliziYeniGrid extends Serenity.EntityGrid<BorcluVadeAnaliziYeniRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BorcluVadeAnaliziYeniDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class HareketsizCariListesiDialog extends Serenity.EntityDialog<HareketsizCariListesiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: HareketsizCariListesiForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class HareketsizCariListesiGrid extends Serenity.EntityGrid<HareketsizCariListesiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HareketsizCariListesiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<E_Maliyet.Raporlar.HareketsizCariListesiRow>): Serenity.ListResponse<HareketsizCariListesiRow>;
        protected getButtons(): any[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace E_Maliyet.Raporlar {
    class SatisAnalizRaporuDialog extends Serenity.EntityDialog<SatisAnalizRaporuRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SatisAnalizRaporuForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class SatisAnalizRaporuGrid extends Serenity.EntityGrid<SatisAnalizRaporuRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SatisAnalizRaporuDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Raporlar {
    class TigerBorcluVadeAnaliziDialog extends Serenity.EntityDialog<TigerBorcluVadeAnaliziRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TigerBorcluVadeAnaliziForm;
    }
}
declare namespace E_Maliyet.Raporlar {
    class TigerBorcluVadeAnaliziGrid extends Serenity.EntityGrid<TigerBorcluVadeAnaliziRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TigerBorcluVadeAnaliziDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Tiger {
    class BankaHareketleriDialog extends Serenity.EntityDialog<BankaHareketleriRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankaHareketleriForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class BankaHareketleriGrid extends Serenity.EntityGrid<BankaHareketleriRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankaHareketleriDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Tiger {
    class CariHesapListesiDialog extends Serenity.EntityDialog<CariHesapListesiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CariHesapListesiForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class CariHesapListesiGrid extends Serenity.EntityGrid<CariHesapListesiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CariHesapListesiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace E_Maliyet.Tiger {
    class TigerDonemlerDialog extends Serenity.EntityDialog<TigerDonemlerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TigerDonemlerForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class TigerDonemlerGrid extends Serenity.EntityGrid<TigerDonemlerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TigerDonemlerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Tiger {
    class TigerFirmalarDialog extends Serenity.EntityDialog<TigerFirmalarRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TigerFirmalarForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class TigerFirmalarGrid extends Serenity.EntityGrid<TigerFirmalarRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TigerFirmalarDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.VeriGirisleri {
    class CariGorusmelerDialog extends Serenity.EntityDialog<CariGorusmelerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CariGorusmelerForm;
        protected updateInterface(): void;
    }
}
declare namespace E_Maliyet.VeriGirisleri {
    class CariGorusmelerGrid extends Serenity.EntityGrid<CariGorusmelerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CariGorusmelerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getPersistanceStorage(): Serenity.SettingStorage;
        protected getPersistanceFlags(): GridPersistanceFlags;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        getButtons(): Serenity.ToolButton[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
