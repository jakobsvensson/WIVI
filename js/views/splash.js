
import m from "mithril";

let splash = {
    view: function() {
        return [
            m("div.content", [
                m("div.splashlogo"),
                m("div.splashtitle", "Need inspiration?"),
                m("div.bgtext", `WIVI helps you break creative block
                            by using randomized, creative prompts.`),
                m("div.bgtext", `No endless feed scrolling. You will get: `),
                m("ul.list", [
                    m("li.entry", "A title"),
                    m("li.entry", "Two images"), 
                    m("li.entry", "A 'Strategy'"), 
                ]),
                m("div.bgtext", `Use this to make a quick sketch, take a photo, write a poem or
                                maybe build a LEGO sculpture. Hopefully it will get you ready to brainstorm!`),
                m("a.diagBtn", { href: "#!/frontpage" }, "START WIVI"),
                m("div.diagBG", [
    
                    m("div.diagonal", [
    
                    ])
                ]),
            ])


        ];
    }

};

export default splash;
