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
    // you all/you-all
    v = v.replace(/\b(Y|y)ou( |-)(A|a)ll\b/g, "$1'$3ll");
    v = v.replace(/\bYOU ALL\b/g, "Y'ALL");
    v = v.replace(/\bYOU-ALL\b/g, "Y'ALL");          

    // u all
    v = v.replace(/\bu all\b/g, "y'all");
    v = v.replace(/\bU all\b/g, "Y'all");
    v = v.replace(/\bU All\b/g, "Y'All");
    v = v.replace(/\bU ALL\b/g, "Y'ALL");

    // you guys/you guyz
    v = v.replace(/\b(Y|y)ou guy(s|z)\b/g, "$1'all");
    v = v.replace(/\bYou Guy(s|z)\b/g, "Y'All");
    v = v.replace(/\bYOU GUY(S|Z)\b/g, "Y'ALL");

    // u guys/u guyz
    v = v.replace(/\bu guy(s|z)\b/g, "y'all");
    v = v.replace(/\bU guy(s|z)\b/g, "Y'all");
    v = v.replace(/\bU Guy(s|z)\b/g, "Y'All");
    v = v.replace(/\bU GUY(S|Z)\b/g, "Y'ALL");

    // you two
    v = v.replace(/\b(Y|y)ou two\b/g, "$1'all");
    v = v.replace(/\bYou Two\b/g, "Y'All");
    v = v.replace(/\bYOU TWO\b/g, "Y'ALL");

    // the two of you
    v = v.replace(/\bthe two of you\b/g, "y'all");
    v = v.replace(/\bThe two of you\b/g, "Y'all");
    v = v.replace(/\bThe Two of You\b/g, "Y'All");
    v = v.replace(/\bThe Two Of You\b/g, "Y'All");
    v = v.replace(/\bTHE TWO OF YOU\b/g, "Y'ALL");

    // the three of you
    v = v.replace(/\bthe three of you\b/g, "y'all");
    v = v.replace(/\bThe three of you\b/g, "Y'all");
    v = v.replace(/\bThe Three of You\b/g, "Y'All");
    v = v.replace(/\bThe Three Of You\b/g, "Y'All");
    v = v.replace(/\bTHE THREE OF YOU\b/g, "Y'ALL");

    // the lot of you
    v = v.replace(/\bthe lot of you\b/g, "y'all");
    v = v.replace(/\bThe lot of you\b/g, "Y'all");
    v = v.replace(/\bThe Lot of You\b/g, "Y'All");
    v = v.replace(/\bThe Lot Of You\b/g, "Y'All");
    v = v.replace(/\bTHE LOT OF YOU\b/g, "Y'ALL");

    // all of you
    v = v.replace(/\bAll of you\b/g, "Y'all");
    v = v.replace(/\ball of you\b/g, "y'all");
    v = v.replace(/\bALL OF YOU\b/g, "Y'ALL");
    v = v.replace(/\bAll of You\b/g, "Y'All");
    v = v.replace(/\bAll Of You\b/g, "Y'All");

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
