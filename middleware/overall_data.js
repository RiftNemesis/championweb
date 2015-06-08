var WebOverallStats = require('../models/web_overall_stats.js');
var produceError = require('../logic/produce_error.js');
var webOverallCache;
// Example Cached Data:
// gamesAnalyzed:"3,549,640",
// patch:"5.10",
// patchHistory: ["5.6","5.7","5.8","5.9","5.10"],
module.exports = function(req, res, next){

    res.locals.core = {
		ddPatch: require('../api_data/dd_patch.json').ddPatch,
		resetCache: Math.random().toFixed(5),
		masteryOrder: ['Offense','Defense','Utility'],
		headline: require('../headline.js')
	};

	if (typeof webOverallCache !== 'object'){
		WebOverallStats.findOne({}, function(err, data) {
		    if (err) {
		        return next(produceError('serverMaintenance', 503));
		    } else if (!data) {
		        return next(produceError('serverMaintenance', 503));
		    } else {
		        webOverallCache = data;
		        attachDbData();
		    }
		});
	} else {	
		attachDbData();
	}

	function attachDbData(){
		res.locals.core.gamesAnalyzed = webOverallCache.gamesAnalyzed;
		res.locals.core.patch = webOverallCache.patch;
		res.locals.core.patchHistory = webOverallCache.patchHistory;
		next();
	}
};