"use strict";

import m from "mithril";
import savemodel from "../models/savemodel";

let login = {
    view: function () {
        return [
            m("div.title", "Login"),
            m("form.form.new", {
                onsubmit: function (event) {
                    event.preventDefault();
                    savemodel.loginUser();
                }
            }, [
                m("label.input-label", "Email"),
                m("input[type=email].input", {
                    oninput: function (event) {
                        savemodel.email = event.target.value;
                    },
                    value: savemodel.email
                }),
                m("label.input-label", "Password"),
                m("input[type=password].input", {
                    oninput: function (event) {
                        savemodel.password = event.target.value;
                    },
                    value: savemodel.password
                }),
                m("input[type=submit][value=Login].button", "Login")
            ])
        ];
    }
};

export default login;
