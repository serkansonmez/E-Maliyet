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
declare namespace E_Maliyet.Maliyet {
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetDetayForm {
        MaliyetTalepId: Serenity.IntegerEditor;
        Seviye: Serenity.IntegerEditor;
        SatirTipi: Serenity.StringEditor;
        Turu: Serenity.StringEditor;
        Kodu: Serenity.StringEditor;
        Aciklamasi: Serenity.StringEditor;
        VaryantKodu: Serenity.StringEditor;
        VaryantAciklamasi: Serenity.StringEditor;
        Miktar: Serenity.IntegerEditor;
        Birim: Serenity.StringEditor;
        VariantRef: Serenity.IntegerEditor;
        Adet: Serenity.IntegerEditor;
        BirimFiyat: Serenity.DecimalEditor;
        Tutar: Serenity.DecimalEditor;
    }
    class MaliyetDetayForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetDetayRow {
        MaliyetDetayId?: number;
        MaliyetTalepId?: number;
        Seviye?: number;
        SatirTipi?: string;
        Turu?: string;
        Kodu?: string;
        Aciklamasi?: string;
        VaryantKodu?: string;
        VaryantAciklamasi?: string;
        Miktar?: number;
        Birim?: string;
        VariantRef?: number;
        Adet?: number;
        BirimFiyat?: number;
        Tutar?: number;
        FisTuru?: string;
        FisNo?: string;
        FisTarih?: string;
        ParentRef?: number;
        MaliyetTalepUserId?: number;
        MaliyetTalepInsertDate?: string;
        MaliyetTalepTigerFirma?: string;
        MaliyetTalepTigerDonem?: string;
        MaliyetTalepItemRef?: number;
        MaliyetTalepVariantRef?: number;
        MaliyetTalepAdet?: number;
    }
    namespace MaliyetDetayRow {
        const idProperty = "VariantRef";
        const nameProperty = "Aciklamasi";
        const localTextPrefix = "Maliyet.MaliyetDetay";
        const lookupKey = "Maliyet.MaliyetDetay";
        function getLookup(): Q.Lookup<MaliyetDetayRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MaliyetDetayId = "MaliyetDetayId",
            MaliyetTalepId = "MaliyetTalepId",
            Seviye = "Seviye",
            SatirTipi = "SatirTipi",
            Turu = "Turu",
            Kodu = "Kodu",
            Aciklamasi = "Aciklamasi",
            VaryantKodu = "VaryantKodu",
            VaryantAciklamasi = "VaryantAciklamasi",
            Miktar = "Miktar",
            Birim = "Birim",
            VariantRef = "VariantRef",
            Adet = "Adet",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar",
            FisTuru = "FisTuru",
            FisNo = "FisNo",
            FisTarih = "FisTarih",
            ParentRef = "ParentRef",
            MaliyetTalepUserId = "MaliyetTalepUserId",
            MaliyetTalepInsertDate = "MaliyetTalepInsertDate",
            MaliyetTalepTigerFirma = "MaliyetTalepTigerFirma",
            MaliyetTalepTigerDonem = "MaliyetTalepTigerDonem",
            MaliyetTalepItemRef = "MaliyetTalepItemRef",
            MaliyetTalepVariantRef = "MaliyetTalepVariantRef",
            MaliyetTalepAdet = "MaliyetTalepAdet"
        }
    }
}
declare namespace E_Maliyet.Maliyet {
    namespace MaliyetDetayService {
        const baseUrl = "Maliyet/MaliyetDetay";
        function Create(request: Serenity.SaveRequest<MaliyetDetayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaliyetDetayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetDetayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetDetayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Maliyet/MaliyetDetay/Create",
            Update = "Maliyet/MaliyetDetay/Update",
            Delete = "Maliyet/MaliyetDetay/Delete",
            Retrieve = "Maliyet/MaliyetDetay/Retrieve",
            List = "Maliyet/MaliyetDetay/List"
        }
    }
}
declare namespace E_Maliyet.Maliyet {
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetDetayToplamForm {
        BirimFiyat: Serenity.DecimalEditor;
        Tutar: Serenity.DecimalEditor;
    }
    class MaliyetDetayToplamForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetDetayToplamRow {
        MaliyetTalepId?: number;
        BirimFiyat?: number;
        Tutar?: number;
    }
    namespace MaliyetDetayToplamRow {
        const idProperty = "MaliyetTalepId";
        const localTextPrefix = "Maliyet.MaliyetDetayToplam";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MaliyetTalepId = "MaliyetTalepId",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar"
        }
    }
}
declare namespace E_Maliyet.Maliyet {
    namespace MaliyetDetayToplamService {
        const baseUrl = "Maliyet/MaliyetDetayToplam";
        function Create(request: Serenity.SaveRequest<MaliyetDetayToplamRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaliyetDetayToplamRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetDetayToplamRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetDetayToplamRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Maliyet/MaliyetDetayToplam/Create",
            Update = "Maliyet/MaliyetDetayToplam/Update",
            Delete = "Maliyet/MaliyetDetayToplam/Delete",
            Retrieve = "Maliyet/MaliyetDetayToplam/Retrieve",
            List = "Maliyet/MaliyetDetayToplam/List"
        }
    }
}
declare namespace E_Maliyet.Maliyet {
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetTalepForm {
        ItemRef: Serenity.LookupEditor;
        VariantRef: Serenity.LookupEditor;
        Adet: Serenity.IntegerEditor;
    }
    class MaliyetTalepForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Maliyet {
    interface MaliyetTalepRow {
        MaliyetTalepId?: number;
        UserId?: number;
        InsertDate?: string;
        TigerFirma?: string;
        TigerDonem?: string;
        ItemRef?: number;
        VariantRef?: number;
        Adet?: number;
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
        ItemName?: string;
        VariantName?: string;
        BirimFiyat?: number;
        Tutar?: number;
        MaliyetDetaylari?: number[];
    }
    namespace MaliyetTalepRow {
        const idProperty = "MaliyetTalepId";
        const nameProperty = "TigerFirma";
        const localTextPrefix = "Maliyet.MaliyetTalep";
        const lookupKey = "Maliyet.MaliyetTalep";
        function getLookup(): Q.Lookup<MaliyetTalepRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MaliyetTalepId = "MaliyetTalepId",
            UserId = "UserId",
            InsertDate = "InsertDate",
            TigerFirma = "TigerFirma",
            TigerDonem = "TigerDonem",
            ItemRef = "ItemRef",
            VariantRef = "VariantRef",
            Adet = "Adet",
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
            ItemName = "ItemName",
            VariantName = "VariantName",
            BirimFiyat = "BirimFiyat",
            Tutar = "Tutar",
            MaliyetDetaylari = "MaliyetDetaylari"
        }
    }
}
declare namespace E_Maliyet.Maliyet {
    namespace MaliyetTalepService {
        const baseUrl = "Maliyet/MaliyetTalep";
        function Create(request: Serenity.SaveRequest<MaliyetTalepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaliyetTalepRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaliyetTalepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaliyetTalepRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Maliyet/MaliyetTalep/Create",
            Update = "Maliyet/MaliyetTalep/Update",
            Delete = "Maliyet/MaliyetTalep/Delete",
            Retrieve = "Maliyet/MaliyetTalep/Retrieve",
            List = "Maliyet/MaliyetTalep/List"
        }
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
    interface MalzemeListesiForm {
        ItemsActive: Serenity.IntegerEditor;
        ItemsCardtype: Serenity.IntegerEditor;
        ItemsCardtypeTipi: Serenity.StringEditor;
        ItemsCode: Serenity.StringEditor;
        ItemsName: Serenity.StringEditor;
        ItemsStgrpcode: Serenity.StringEditor;
        ItemsProducercode: Serenity.StringEditor;
        ItemsSpecode: Serenity.StringEditor;
        UnitsetfCode: Serenity.StringEditor;
        UnitsetfName: Serenity.StringEditor;
        UnitsetlCode: Serenity.StringEditor;
        UnitsetlName: Serenity.StringEditor;
        Itmunita2Katsayi: Serenity.DecimalEditor;
        Itmunita3Katsayi: Serenity.DecimalEditor;
    }
    class MalzemeListesiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface MalzemeListesiRow {
        Logicalref?: number;
        ItemsActive?: number;
        ItemsCardtype?: number;
        ItemsCardtypeTipi?: string;
        ItemsCode?: string;
        ItemsName?: string;
        ItemsStgrpcode?: string;
        ItemsProducercode?: string;
        ItemsSpecode?: string;
        UnitsetfCode?: string;
        UnitsetfName?: string;
        UnitsetlCode?: string;
        UnitsetlName?: string;
        Itmunita2Katsayi?: number;
        Itmunita3Katsayi?: number;
    }
    namespace MalzemeListesiRow {
        const idProperty = "Logicalref";
        const nameProperty = "ItemsName";
        const localTextPrefix = "Tiger.MalzemeListesi";
        const lookupKey = "Tiger.MalzemeListesi";
        function getLookup(): Q.Lookup<MalzemeListesiRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Logicalref = "Logicalref",
            ItemsActive = "ItemsActive",
            ItemsCardtype = "ItemsCardtype",
            ItemsCardtypeTipi = "ItemsCardtypeTipi",
            ItemsCode = "ItemsCode",
            ItemsName = "ItemsName",
            ItemsStgrpcode = "ItemsStgrpcode",
            ItemsProducercode = "ItemsProducercode",
            ItemsSpecode = "ItemsSpecode",
            UnitsetfCode = "UnitsetfCode",
            UnitsetfName = "UnitsetfName",
            UnitsetlCode = "UnitsetlCode",
            UnitsetlName = "UnitsetlName",
            Itmunita2Katsayi = "Itmunita2Katsayi",
            Itmunita3Katsayi = "Itmunita3Katsayi"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace MalzemeListesiService {
        const baseUrl = "Tiger/MalzemeListesi";
        function Create(request: Serenity.SaveRequest<MalzemeListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MalzemeListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MalzemeListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MalzemeListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/MalzemeListesi/Create",
            Update = "Tiger/MalzemeListesi/Update",
            Delete = "Tiger/MalzemeListesi/Delete",
            Retrieve = "Tiger/MalzemeListesi/Retrieve",
            List = "Tiger/MalzemeListesi/List"
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
declare namespace E_Maliyet.Tiger {
}
declare namespace E_Maliyet.Tiger {
    interface VaryantListesiForm {
        Itemref: Serenity.IntegerEditor;
        Cardtype: Serenity.IntegerEditor;
        VariantCardtype: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Active: Serenity.IntegerEditor;
        Unitsetref: Serenity.IntegerEditor;
        Specode: Serenity.StringEditor;
        Specode2: Serenity.StringEditor;
        Specode3: Serenity.StringEditor;
        Specode4: Serenity.StringEditor;
        Specode5: Serenity.StringEditor;
        Stgrpcode: Serenity.StringEditor;
        Producercode: Serenity.StringEditor;
    }
    class VaryantListesiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace E_Maliyet.Tiger {
    interface VaryantListesiRow {
        Logicalref?: number;
        Itemref?: number;
        Cardtype?: number;
        VariantCardtype?: string;
        Code?: string;
        Name?: string;
        Active?: number;
        Unitsetref?: number;
        Specode?: string;
        Specode2?: string;
        Specode3?: string;
        Specode4?: string;
        Specode5?: string;
        Stgrpcode?: string;
        Producercode?: string;
    }
    namespace VaryantListesiRow {
        const idProperty = "Logicalref";
        const nameProperty = "Name";
        const localTextPrefix = "Tiger.VaryantListesi";
        const lookupKey = "Tiger.VaryantListesi";
        function getLookup(): Q.Lookup<VaryantListesiRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Logicalref = "Logicalref",
            Itemref = "Itemref",
            Cardtype = "Cardtype",
            VariantCardtype = "VariantCardtype",
            Code = "Code",
            Name = "Name",
            Active = "Active",
            Unitsetref = "Unitsetref",
            Specode = "Specode",
            Specode2 = "Specode2",
            Specode3 = "Specode3",
            Specode4 = "Specode4",
            Specode5 = "Specode5",
            Stgrpcode = "Stgrpcode",
            Producercode = "Producercode"
        }
    }
}
declare namespace E_Maliyet.Tiger {
    namespace VaryantListesiService {
        const baseUrl = "Tiger/VaryantListesi";
        function Create(request: Serenity.SaveRequest<VaryantListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VaryantListesiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VaryantListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VaryantListesiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tiger/VaryantListesi/Create",
            Update = "Tiger/VaryantListesi/Update",
            Delete = "Tiger/VaryantListesi/Delete",
            Retrieve = "Tiger/VaryantListesi/Retrieve",
            List = "Tiger/VaryantListesi/List"
        }
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
declare namespace E_Maliyet.Maliyet {
    class MaliyetDetayDialog extends Serenity.EntityDialog<MaliyetDetayRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaliyetDetayForm;
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetDetayGrid extends Serenity.EntityGrid<MaliyetDetayRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaliyetDetayDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetDetayToplamDialog extends Serenity.EntityDialog<MaliyetDetayToplamRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaliyetDetayToplamForm;
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetDetayToplamGrid extends Serenity.EntityGrid<MaliyetDetayToplamRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaliyetDetayToplamDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetMaliyetDetayDialog extends MaliyetDetayDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetMaliyetDetayGrid extends MaliyetDetayGrid {
        protected getDialogType(): typeof MaliyetMaliyetDetayDialog;
        private treeMixin;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        get customerID(): number;
        set customerID(value: number);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetTalepDialog extends Serenity.EntityDialog<MaliyetTalepRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        private loadedState;
        private odemeBilgileriGrid;
        protected form: MaliyetTalepForm;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: MaliyetDetayRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace E_Maliyet.Maliyet {
    class MaliyetTalepGrid extends Serenity.EntityGrid<MaliyetTalepRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaliyetTalepDialog;
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
declare namespace E_Maliyet.Tiger {
    class MalzemeListesiDialog extends Serenity.EntityDialog<MalzemeListesiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MalzemeListesiForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class MalzemeListesiGrid extends Serenity.EntityGrid<MalzemeListesiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MalzemeListesiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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
declare namespace E_Maliyet.Tiger {
    class VaryantListesiDialog extends Serenity.EntityDialog<VaryantListesiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VaryantListesiForm;
    }
}
declare namespace E_Maliyet.Tiger {
    class VaryantListesiGrid extends Serenity.EntityGrid<VaryantListesiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VaryantListesiDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
