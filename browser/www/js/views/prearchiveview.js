"use strict";

import m from "mithril";

var newImgurUrl;

let prearchiveview = {
    oninit: function(vnode) {
        // console.log(vnode);
        newImgurUrl = vnode.attrs.url;
    },
    view: function() {
        return [
            m("div.title", "PUBLISHED"),
            m("div.intro", "Thank you! This image is now saved to the WIVI Archive."),
            m('img.artObj', {
                src: newImgurUrl,

                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                onload(e) {
                    e.target.style.cssText += `
                        opacity: 1;
                    `;
                    e.redraw = false;
                },

                // ontransitionend(e) {
                //     e.target.style.height = 'auto'
                // },
            }),
            m("a.nextBtn", { href: "#!/archiveview" }, "VIEW ARCHIVE")

        ];
    }
};

export default prearchiveview;
