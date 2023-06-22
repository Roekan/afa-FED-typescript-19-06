"use strict";
//Ejemplo de tipado simple con TS ES6
//Enumerables
var Roles;
(function (Roles) {
    Roles["user"] = "Us789";
    Roles["admin"] = "df45";
    Roles["gestor"] = "gs456";
})(Roles || (Roles = {}));
console.log(Roles.gestor);
