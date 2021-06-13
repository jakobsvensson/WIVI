
import m from "mithril";

let splash = {
    view: function() {
        return [
            m("div.diagonal", [
                m("div.content", [
                    m("div.splashlogo"),
                    m("div.splashtitle", "Staring at a blank page?"),
                    m("div.splashtext", `WIVI helps you break creative block
                    by using randomized, creative prompts. Instead of endless 
                    feed scrolling, you will get two images, a title and a 'Strategy'. 
                    Use this to make a quick sketch, take a photo, write a poem or 
                    maybe a LEGO sculpture.`),
                    m("a.finishedBtn", { href: "#!/frontpage"}, "LET'S GO!")
                ])
            ])

        ];
    }

};

export default splash;
