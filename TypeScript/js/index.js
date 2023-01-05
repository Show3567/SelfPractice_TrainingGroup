var Auth;
(function (Auth) {
    Auth["SuperUser"] = "superUser";
    Auth[Auth["Admin"] = 5] = "Admin";
    Auth[Auth["User"] = 6] = "User";
})(Auth || (Auth = {}));
console.log(Auth.User);
var role = Auth.SuperUser;
//# sourceMappingURL=index.js.map