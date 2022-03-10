    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    Tawk_API.onLoad = function () {
        $(".tawk-icon-close").click()
        Tawk_API.setAttributes({
            name: 'name' in user ? user.name : 'NA',
            email: 'email' in user ? user.email : 'tawk@nodered.cloud'
        }, function (error) {
            if (error) console.log(error)
        });
    }
