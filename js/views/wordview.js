import m from "mithril";
import bookmodel from "../models/bookmodel";

let wordview = {
    oninit: function() {
        bookmodel.getRandomWord();
    },
    view: function () {
        return [
            m("div.prompt", "Here are some random words. Choose one that seems interesting."),
            m("div.title", "Pick one"),
            m("div.wordcontainer", [
                bookmodel.currentWords.map(function (word) {
                    return m("a.wordBtn", { href: "#!/bookview" + word }, word);
                })
            ])
        ];
    }
};

export default wordview;
