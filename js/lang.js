const lang = {
    "en": {
        "disclaimer": "All names, logos, images, and brands are property of their respective owners. <a href='/disclaimer.html' target='_blank' class='text-muted text-decoration-underline'>Notice of Non-Affiliation and Disclaimer</a>",
        "disclaimer-full": "<p>We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the openjs foundation and nodered, or any of its subsidiaries or its affiliates.</p><p>The official Node-Red website can be found at <a href='https://nodered.org'>https://nodered.org</a></p><p>The name Nodered marks, emblems and images are registered trademarks of their respective owners.</p>"
    },
    "fr": {
    },
    "de": {
    }
}

function findLang(myid) {
    if (!user) return lang['en'][myid]
    if ('lang' in user && myid in lang[user.lang]) return lang[user.lang][myid]
    if ('locale' in user && myid in lang[user.locale]) return lang[user.locale][myid]
    if (myid in lang['en']) return lang['en'][myid]
    return ''
}

function updateLang() {
   for (let t in lang['en']) {
       if (["buy"].includes(t)) continue
       $('#'+t).html(findLang(t))
   }
}
