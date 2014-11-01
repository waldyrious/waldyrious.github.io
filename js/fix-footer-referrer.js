// Code from: http://benvinegar.github.io/seamless-talk/#/24
// Should be called "referer", but I refuse to obey a spec term
// that is based on a misspelling: https://en.wiktionary.org/wiki/referer#Usage_notes

function fixReferrer(footer){
	footer.contentWindow.postMessage( ['referrer', window.location.href], '*' );
	console.log(footer.src);
}
