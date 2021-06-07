"use strict";

import m from "mithril";
import savemodel from "../models/savemodel";

let saveview = {
    view: function() {
        let showFav = savemodel.token && !savemodel.favorited;
        console.log(savemodel.saveData.length);
        return [
            m("div.artcontainer", [
                m("div.title", savemodel.saveData[0]),
                m("div.linebreak"),
                m("div.obst", [
                    m("div.strategy", "STRATEGY"),
                ], savemodel.saveData[3]), //ObStrat
                showFav ? m("div.favcontainer", [
                    m("div.starIcon", {
                        onclick: function (e) {  //Click favorite!
                            console.log(e);
                            // e.redraw = false;
                            savemodel.favorited = true;
                            savemodel.addToFav(savemodel.saveData);
                        }
                    }, savemodel.favorited ? "REMOVE" : "ADD TO FAV"),
                ]): null,
                m("a.cameraBtn", { href: "#!/cameraview" }, "UPLOAD YOUR WIVI"),
                m("div.tablecontainer", [
                    m("img.imgThumb", { src: savemodel.saveData[1] } ), //smithURL
                    m("table",
                        m("tbody",
                            [
                                m("tr",
                                    [
                                        m("td",
                                            "Title:",
                                        ),
                                        m("td",
                                            savemodel.saveData[6], //smithTitle
                                        )
                                    ]
                                ),
                                m("tr",
                                    [
                                        m("td",
                                            "Author: ",
                                        ),
                                        m("td",
                                            savemodel.saveData[4], //smithAuthor
                                        )
                                    ]
                                ),
                                m("tr",
                                    [
                                        m("td",
                                            "Date: ",
                                        ),
                                        m("td",
                                            savemodel.saveData[5], //smithYear
                                        )
                                    ]
                                )
                            ]
                        )
                    )
                ]),
                m("div.tablecontainer", [
                    m("img.imgThumb", { src: savemodel.saveData[2] } ), //metURL
                    m("table",
                        m("tbody",
                            [
                                m("tr",
                                    [
                                        m("td",
                                            "Title:",
                                        ),
                                        m("td",
                                            savemodel.saveData[9], //metTitle
                                        )
                                    ]
                                ),
                                m("tr",
                                    [
                                        m("td",
                                            "Author: ",
                                        ),
                                        m("td",
                                            savemodel.saveData[7], //metAuth
                                        )
                                    ]
                                ),
                                m("tr",
                                    [
                                        m("td",
                                            "Date: ",
                                        ),
                                        m("td",
                                            savemodel.saveData[8], //metYear
                                        )
                                    ]
                                )
                            ]
                        )
                    )
                ]),
                (savemodel.saveData.length == 11) ? m("artcontainer", [
                    m("div.title", "Your WIVI"),
                    m("img.imgThumb", { src: savemodel.saveData[10] })
                ]): null
            ])
        ];
    }
};

export default saveview;
