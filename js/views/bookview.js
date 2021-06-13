import m from "mithril";
import bookmodel from "../models/bookmodel";

let wordsWithLinks = [];
let randomWord;

function titleToLinks(title) {
    let words = title.split(" ");
    let wordsWithLinks = [];

    words.map(function (word) {
        wordsWithLinks.push(m("a.wordBtn", { href: "#!/artview" + word + "-"
        + randomWord }, word));
    });
    return wordsWithLinks;
}

let bookview = {
    oninit: function(vnode) {
        // console.log(vnode);
        randomWord = vnode.attrs.word;
        bookmodel.getBookshelf(vnode.attrs.word);
    },
    view: function () {
        return [
            m("div.prompt", `You chose the word ${randomWord.toUpperCase()}. I used that word to find book titles. 
            pick one more word here!`),
            m("div.title", "One more word"),
            m("div.wordcontainer", [
                bookmodel.currentBookList.map(function (book) {
                    wordsWithLinks = titleToLinks(book);
                    return [
                        m("div.titlecontainer", wordsWithLinks),
                        m("div.linebreak")
                    ];
                })
            ])
        ];
    }
};

export default bookview;
