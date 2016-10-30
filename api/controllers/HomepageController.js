/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function(request, response) {
        Release.find().exec(function(err, releases) {
            console.log(releases);

            return response.view('homepage', {
            currentDate: (new Date()).toString(),
            releases: releases,
        });
        });
        // var releases = [{'name': 'XXX'}, {'name': 'ZZZ'}];
    },
};
