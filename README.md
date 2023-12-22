waldyrious.github.io
====================

This repository holds the source code of my website.  

Available at: http://waldirpimenta.com | https://waldyrious.net | https://waldyrious.github.io

![GitHub followers](https://img.shields.io/github/followers/waldyrious?label=GitHub&style=social)
![Twitter followers](https://img.shields.io/twitter/follow/waldyrious?label=Twitter&style=social)
![Keybase followers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fkeybase.io%2F_%2Fapi%2F1.0%2Fuser%2Fcard.json%3Fusername%3Dwaldyrious&query=%24.follow_summary.followers&label=Keybase&logo=keybase&style=social)
![Reddit link karma](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.reddit.com%2Fuser%2Fwaldyrious%2Fabout&query=%24.data.link_karma&label=reddit&logo=reddit&style=social)
![Wikimedia edits](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.mediawiki.org%2Fw%2Fapi.php%3Faction%3Dquery%26meta%3Dglobaluserinfo%26guiuser%3DWaldyrious%26guiprop%3Deditcount%26format%3Djson&query=%24.query.globaluserinfo.editcount&label=Wikimedia&logo=wikipedia&style=social)
![StackOverflow reputation](https://img.shields.io/badge/dynamic/json?query=%24.items%5B0%5D.reputation&url=https%3A%2F%2Fapi.stackexchange.com%2F2.2%2Fusers%2F266309%3Fsite%3Dstackoverflow&logo=stackoverflow&label=StackOverflow&style=social&link=https%3A%2F%2Fstackoverflow.com%2Fusers%2F266309%2Fwaldyrious)

### Implementation notes

- **Fully [client-side](https://en.wikipedia.org/wiki/Client-side_scripting)**:
  no server logic → can be hosted / run from anywhere, without requiring a web server
- **[DRY code](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)**:
  common elements (navigation menu and footer) are defined once and instantiated multiple times
    - [Declarative](http://tutorials.jenkov.com/angularjs/critique.html#the-declarative-imperative-paradigm-mismatch)
      (static, javascript-free) [inclusion](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
      of common header and footer through seamless iframes
    - Declarative inclusion of multiple resources (CSS/JS)
      using an [intermediate document](resources.html)
      through [HTML imports](http://webcomponents.org/articles/introduction-to-html-imports/#using-html-imports)
      is [not yet](http://caniuse.com/#feat=imports) [possible](http://jonrimmer.github.io/are-we-componentized-yet/),
      so the header isn't fully DRY for now.
- **[Progressively enhanced](https://en.wikipedia.org/wiki/Progressive_enhancement)**:
  functional without js and even css
  (except iframes' seamlessness, which currently relies in css
  [while waiting for browsers to catch up](http://caniuse.com/#feat=iframe-seamless))
- **[Valid](http://validator.w3.org/check?uri=http://waldyrious.github.io),
  [polyglot xhtml5](https://en.wikipedia.org/wiki/Polyglot_markup)**:
  well-formed, valid as both html5 and xml;
  machine readable with any xml parser;
  errors are immediately denounced by the browser, so they don't creep up over time.
- **[Mobile-friendly](https://www.google.com/webmasters/tools/mobile-friendly/?url=http://waldyrious.github.io)**


### Todo:

- [x] home
- [ ] works
- [ ] updates
    - Automatic feed -- need to think how to do it.
      Perhaps emulate friendfeed using Zapier, IFTTT or Yahoo Pipes.
      Or maybe build an app for it with Firebase.
      Sources: check out "from me" collection in feedly, my current friendfeed, github
    - Since this will provide dynamic content, have the link be added dynamically to the navbar
- [ ] blog
    - Need to think what platform to use.
      Something simple, with RSS/Atom and Disqus comments
- [x] cv
- [x] timeline
- [x] profiles


### License:

* [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)
