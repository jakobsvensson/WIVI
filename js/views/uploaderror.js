"use strict";

import m from "mithril";

let uploaderror = {

    view: function() {
        return [
            m("div.title", "ERROR"),
            m("div.intro", "Something went wrong in the upload. Sorry about that. Try again?"),
            m("a.nextBtn", { href: "#!/saveview" }, "BACK")

        ];
    }
};

export default uploaderror;
