function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    // y'all -> y’all (it just looks nicer)
    v = v.replace(/\b(Y|y)'(A|a)ll\b/g, "$1’$2ll");
    v = v.replace(/\bY'ALL\b/g, "Y’ALL");

    // you all/you-all
    v = v.replace(/\b(Y|y)ou( |-)(A|a)ll\b/g, "$1’$3ll");
    v = v.replace(/\bYOU ALL\b/g, "Y’ALL");
    v = v.replace(/\bYOU-ALL\b/g, "Y’ALL");          

    // u all
    v = v.replace(/\bu all\b/g, "y’all");
    v = v.replace(/\bU all\b/g, "Y’all");
    v = v.replace(/\bU All\b/g, "Y’All");
    v = v.replace(/\bU ALL\b/g, "Y’ALL");

    // yall
    v = v.replace(/\b(Y|y)all\b/g, "$1’all");
    v = v.replace(/\bYALL\b/g, "Y’ALL");

    // ya'll/ya-ll/ya’ll
    v = v.replace(/\b(Y|y)a('|-|’)ll\b/g, "$1’all");
    v = v.replace(/\bYa('|-|’)Ll\b/g, "Y’All");
    v = v.replace(/\bYA('|-|’)LL\b/g, "Y’ALL");

    // you guys/you guyz/you-guys/you-guyz
    v = v.replace(/\b(Y|y)ou( |-)guy(s|z)\b/g, "$1’all");
    v = v.replace(/\bYou( |-)Guy(s|z)\b/g, "Y’All");
    v = v.replace(/\bYOU( |-)GUY(S|Z)\b/g, "Y’ALL");

    // u guys/u guyz
    v = v.replace(/\bu guy(s|z)\b/g, "y’all");
    v = v.replace(/\bU guy(s|z)\b/g, "Y’all");
    v = v.replace(/\bU Guy(s|z)\b/g, "Y’All");
    v = v.replace(/\bU GUY(S|Z)\b/g, "Y’ALL");

    // you two
    v = v.replace(/\b(Y|y)ou two\b/g, "$1’all");
    v = v.replace(/\bYou Two\b/g, "Y’All");
    v = v.replace(/\bYOU TWO\b/g, "Y’ALL");

    // the two of you
    v = v.replace(/\bthe two of you\b/g, "y’all");
    v = v.replace(/\bThe two of you\b/g, "Y’all");
    v = v.replace(/\bThe Two of You\b/g, "Y’All");
    v = v.replace(/\bThe Two Of You\b/g, "Y’All");
    v = v.replace(/\bTHE TWO OF YOU\b/g, "Y’ALL");

    // the three of you
    v = v.replace(/\bthe three of you\b/g, "y’all");
    v = v.replace(/\bThe three of you\b/g, "Y’all");
    v = v.replace(/\bThe Three of You\b/g, "Y’All");
    v = v.replace(/\bThe Three Of You\b/g, "Y’All");
    v = v.replace(/\bTHE THREE OF YOU\b/g, "Y’ALL");

    // you lot
    v = v.replace(/\b(Y|y)ou lot\b/g, "$1’all");
    v = v.replace(/\bYou Lot\b/g, "Y’All");
    v = v.replace(/\bYOU LOT\b/g, "Y’ALL");

    // the lot of you
    v = v.replace(/\bthe lot of you\b/g, "y’all");
    v = v.replace(/\bThe lot of you\b/g, "Y’all");
    v = v.replace(/\bThe Lot of You\b/g, "Y’All");
    v = v.replace(/\bThe Lot Of You\b/g, "Y’All");
    v = v.replace(/\bTHE LOT OF YOU\b/g, "Y’ALL");

    // all of you
    v = v.replace(/\bAll of you\b/g, "Y’all");
    v = v.replace(/\ball of you\b/g, "y’all");
    v = v.replace(/\bALL OF YOU\b/g, "Y’ALL");
    v = v.replace(/\bAll of You\b/g, "Y’All");
    v = v.replace(/\bAll Of You\b/g, "Y’All");
    
    // yous guys
    v = v.replace(/\b(Y|y)ous guys\b/g, "$1’all");
    v = v.replace(/\bYous Guys\b/g, "Y’All");
    v = v.replace(/\bYOUS GUYS\b/g, "Y’ALL");

    // yous
    v = v.replace(/\b(Y|y)ous\b/g, "$1’all");
    v = v.replace(/\bYOUS\b/g, "Y’ALL");

    // youse guys
    v = v.replace(/\b(Y|y)ouse guys\b/g, "$1’all");
    v = v.replace(/\bYouse Guys\b/g, "Y’All");
    v = v.replace(/\bYOUSE GUYS\b/g, "Y’ALL");

    // you guyses (for Sarabeth)
    v = v.replace(/\b(Y|y)ou guyses\b/g, "$1’all");
    v = v.replace(/\bYou Guyses\b/g, "Y’All");
    v = v.replace(/\bYOU GUYSES\b/g, "Y’ALL");

    // youse
    v = v.replace(/\b(Y|y)ouse\b/g, "$1’all");
    v = v.replace(/\bYOUSE\b/g, "Y’ALL");

    // yins
    v = v.replace(/\b(Y|y)ins\b/g, "$1’all");
    v = v.replace(/\bYINS\b/g, "Y’ALL");

    // yinz
    v = v.replace(/\b(Y|y)inz\b/g, "$1’all");
    v = v.replace(/\bYINZ\b/g, "Y’ALL");

    // youins
    v = v.replace(/\b(Y|y)ouins\b/g, "$1’all");
    v = v.replace(/\bYOUINS\b/g, "Y’ALL");    
    
    // you ins/you'ins/you-ins/you’ins
    v = v.replace(/\b(Y|y)ou( |'|-|’)ins\b/g, "$1’all");
    v = v.replace(/\bYou( |'|-|’)Ins\b/g, "Y’All");
    v = v.replace(/\bYOU( |'|-|’)INS\b/g, "Y’ALL");

    // you'uns/you-uns/you’uns
    v = v.replace(/\b(Y|y)ou('|-|’)uns\b/g, "$1’all");
    v = v.replace(/\bYou('|-|’)Uns\b/g, "Y’All");
    v = v.replace(/\bYOU('|-|’)UNS\b/g, "Y’ALL");

    // ye
    v = v.replace(/\b(Y|y)e\b/g, "$1’all");
    v = v.replace(/\bYE\b/g, "Y’ALL");

    // vous (French)
    v = v.replace(/\bvous\b/g, "y’all");
    v = v.replace(/\bVous\b/g, "Y’all");
    v = v.replace(/\bVOUS\b/g, "Y’ALL");

    // voi (Italian)
    v = v.replace(/\bvoi\b/g, "y’all");
    v = v.replace(/\bVoi\b/g, "Y’all");
    v = v.replace(/\bVOI\b/g, "Y’ALL");

    // ustedes (Spanish)
    v = v.replace(/\bustedes\b/g, "y’all");
    v = v.replace(/\bUstedes\b/g, "Y’all");
    v = v.replace(/\bUSTEDES\b/g, "Y’ALL");

    // ihr (German)
    v = v.replace(/\bihr\b/g, "y’all");
    v = v.replace(/\bIhr\b/g, "Y’all");
    v = v.replace(/\bIHR\b/g, "Y’ALL");

    // "every one of you", "everyone here" don't work because it's
    // like singular present tense or something

    // over there -> over yonder
    v = v.replace(/\bover there\b/g, "over yonder");
    v = v.replace(/\bOver there\b/g, "Over yonder");
    v = v.replace(/\bOver There\b/g, "Over Yonder");
    v = v.replace(/\bOVER THERE\b/g, "OVER YONDER");

    return v;
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                // Replace the text for text nodes
                handleText(mutation.addedNodes[i]);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(mutation.addedNodes[i]);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
