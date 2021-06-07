
import m from "mithril";

let frontpage = {
    view: function() {
        return [
            // m("div.title", "WIVI"),
            m("div.intro", `Welcome to the app. It will help you to get warmed up 
            for creative work. Grab some art supplies and let's go.`),
            m("div.btnContainer", [
                m("div.roundBtn"),
                m("div.textBG"),
                m("a.roundText", { href: "#!/wordview" }, "START"),
            ]),
            m("div.introstep", [
                m("div.stepTitle", "Step 1"),
                m("div.stepDesc", "Choose a random word. Pick the one that speaks to you.")
            ]),
            m("div.introstep", [
                m("div.stepTitle", "Step 2"),
                m("div.stepDesc", `Choose a second word from the 
                book titles. You are already making creative decisions`)
            ]),
            m("div.introstep", [
                m("div.stepTitle", "Step 3"),
                m("div.stepDesc", `You will be presented with 2 images and 
                a prompt. Interpret and create.`)
            ]),
            m("div.introstep", [
                m("div.stepTitle", "Step 4"),
                m("div.stepDesc", "If you want, anonymously share your work.")
            ]),
            m("div.btnContainer", [
                m("div.roundBtn"),
                m("div.textBG"),
                m("a.roundText", { href: "#!/archiveview" }, "ARCHIVE"),
            ]),
        ];
    }

};

export default frontpage;
