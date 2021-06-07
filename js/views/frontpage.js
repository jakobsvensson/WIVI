
import m from "mithril";

let frontpage = {
    view: function() {
        return [
            // m("div.title", "WIVI"),
            m("div.frontBtnContainer", [
                
                m("div.btnContainer", [
                    m("div.roundBtn"),
                    m("div.textBG"),
                    m("a.roundText", { href: "#!/wordview" }, "START"),
                ]),
                m("div.btnContainer", [
                    m("div.roundBtn"),
                    m("div.textBG"),
                    m("a.roundText", { href: "#!/archiveview" }, "ARCHIVE"),
                ]),
            ]),
            m("div.intro", `Word-Inspired-Visual-Interpretation will help you
            kick-start your visual brainstorming session. Grab your art supplies and let's go!`),
            m("h1", "How does it work?"),
            m("div.introstep", [
                m("div.stepTitle", "✍️"),
                m("div.stepDesc", "Choose 1 out 5 random words.")
            ]),
            m("div.introstep", [
                m("div.stepTitle", "📚"),
                m("div.stepDesc", `Choose a second word from the 
                book titles.`)
            ]),
            m("div.introstep", [
                m("div.stepTitle", "🎨"),
                m("div.stepDesc", `You will be presented with 2 images and 
                a 'Strategy'. Interpret and create.`)
            ]),
            m("div.introstep", [
                m("div.stepTitle", "🚀"),
                m("div.stepDesc", "If you want, anonymously share your work.")
            ]),

        ];
    }

};

export default frontpage;
