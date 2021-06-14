
import m from "mithril";

let splash = {
    view: function() {
        return [
            m("div.content", [
                m("div.splashlogo"),
                m("div.splashtitle", "Staring at a blank page?"),
                m("div.bgtext", `WIVI helps you break creative block
                            by using randomized, creative prompts.`),
                m("div.bgtext", `Instead of endless 
                            feed scrolling, you will get two images, a title and a 'Strategy'. 
                            Use this to make a quick sketch, take a photo, write a poem or 
                            maybe a LEGO sculpture.`),
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
