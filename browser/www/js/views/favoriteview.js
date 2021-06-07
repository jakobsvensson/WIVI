import m from "mithril";
import savemodel from "../models/savemodel";


let wordview = {
    oninit: function() {
        savemodel.getFavs();
    },
    view: function () {
        if (savemodel.allData) {
            let parsedData = [];

            for (let i = 0; i < savemodel.allData.data.length; i++) {
                parsedData.push(JSON.parse(savemodel.allData.data[i].artefact));
            }

            return [
                m("div.title", "Favorites"),
                m("div.favchoice", [
                    parsedData.map(function (data, index) {
                        return m("div.favBtn", {
                            onclick: function() {
                                savemodel.currentSaveID = savemodel.allData.data[index].id
                                savemodel.saveData = Object.values(data);
                                savemodel.favorited = true;
                                // console.log(savemodel.favorited);
                                m.route.set("/saveview");
                            }
                        }, data.searchWordDisp);
                    })
                ])
            ];
        }
    }
};

export default wordview;
