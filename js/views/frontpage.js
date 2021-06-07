
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
            m("div.intro", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 500);
                }
            }, `WIVI will help you
            kick-start your brainstorming session. Grab your art supplies and let's go!`),
            m("h1", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 2000);
                }
            }, "How does it work?"),
            m("div.introstep", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 3000);
                }
            }, [
                m("div.stepTitle", "✍️"),
                m("div.stepDesc", "Pick a random word.")
            ]),
            m("div.introstep", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 4000);
                }
            }, [
                m("div.stepTitle", "📚"),
                m("div.stepDesc", `Choose a second word from the 
                book titles.`)
            ]),
            m("div.introstep", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 5000);
                }
            }, [
                m("div.stepTitle", "🎨"),
                m("div.stepDesc", `You will be presented with 2 images and 
                a 'Strategy'. Interpret and create!`)
            ]),
            m("div.introstep", {
                style: `
                    opacity: 0;
                    transition: 1s ease-in-out;
                `,

                oncreate(e) {
                    setTimeout(() => {
                        e.dom.style.opacity = 1;
                    }, 6000);
                }
            }, [
                m("div.stepTitle", "🚀"),
                m("div.stepDesc", "If you want, share your work to the Archive.")
            ]),

        ];
    }

};

export default frontpage;
