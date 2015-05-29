(function() {
    var register = function(Handlebars) {

        /************* BEGIN HELPERS *************/
        var helpers = {
            json: function (context, obj) {
                var object = context || obj;
                return JSON.stringify(object);
            },
            equal: function(left, right, options) {
                if (left == right) {
                    return options.fn(this);
                }
                else {
                    return options.inverse(this);
                }
            }
        };
        /************* END HELPERS *************/

        if (Handlebars && typeof Handlebars.registerHelper === "function") {
            // register helpers
            for (var prop in helpers) {
                Handlebars.registerHelper(prop, helpers[prop]);
            }
        } else {
            // just return helpers object if we can't register helpers here
            return helpers;
        }
    };

    // client (is there a better env check?)
    if (typeof window !== "undefined") {
        Handlebars.partials = Handlebars.templates;
        register(Handlebars);
    }
    // server
    else {
        module.exports.register = register;
        module.exports.helpers = register(null);
    }
})();