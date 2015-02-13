// Code from: http://benvinegar.github.io/seamless-talk/#/24
// Should be called "referer", but I refuse to obey a spec term
// that is based on a misspelling: https://en.wiktionary.org/wiki/referer#Usage_notes

var footer = document.getElementById('footer');
footer.onload = function() {
  console.log(window.location.href);
  footer.contentWindow.postMessage( ['referrer', window.location.href], '*' );
}
