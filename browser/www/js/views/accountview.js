
import m from "mithril";

let account = {
    view: function() {
        return [
            m("div.title", "Account"),
            m("div.intro", "Login or create a new account."),
            m("a.newBtn", { href: "#!/login" }, "Login"),
            m("a.newBtn", { href: "#!/newuser" }, "Create account"),
        ];
    }

};

export default account;
