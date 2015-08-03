var security = [
	'common/security/index.md',
	'common/security/filtered-keys.md',
	'common/security/generating-filtered-key.md'
];
var modeling = [
	'common/modeling-events.md',
	'common/event-restrictions.md'
];
var common = [
	'common/projects-keys.md',
	security,
	modeling
];

var languages = [
	{ 
		env: 'js', 
		title: 'JavaScript',
		allowedLanguages: ['js'], 
		structure: [
			'common/intro.md',
			'js/installation.md',
			'js/pushing/index.md',
			'http/pushing/responses.md',
			'js/pushing/multiple.md',
			'js/pushing/batches.md',
			'http/pushing/batches-response.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'js/pushing/reliable.md',
			'http/pushing/timestamp.md',
			'js/querying/index.md',
			'common/querying/metadata.md',
			'common/querying/aggregations.md',
			'common/querying/aggregations-list.md',
			'common/querying/aggregations-limits.md',
			'common/querying/filters.md',
			'common/querying/filters-list.md',
			'common/querying/filters-exists.md',
			'common/querying/filters-in.md',
			'common/querying/filters-combining.md',
			'common/querying/filters-or.md',
			'common/querying/timeframes.md',
			'common/querying/timeframes-relative.md',
			'js/querying/timeframes-absolute.md',
			'common/querying/groupby.md',
			'common/querying/intervals.md',
			'common/querying/timezones.md',
			'js/querying/error-handling.md',
			'http/querying/error-handling-body.md',
			'js/querying/cloning-results.md',
			'common/exporting-events.md',
			'js/viz/index.md',
			'js/viz/visualizations.md',
			'js/viz/codepen.md',
			'common/delete-collection.md',
			common
		] 
	},
	{ 
		env: 'http', 
		title: 'HTTP API', 
		allowedLanguages: ['bash', 'dos', 'json'],
		structure: [
			'common/intro.md',
			'http/authentication.md',
			'http/pushing/index.md',
			'http/pushing/responses.md',
			'http/pushing/batches.md',
			'http/pushing/batches-response.md',
			'http/pushing/import.md',
			'common/pushing/restrictions.md',
			'http/pushing/reliable.md',
			'http/pushing/timestamp.md',
			'http/querying/index.md',
			'common/querying/metadata.md',
			'common/querying/aggregations.md',
			'common/querying/aggregations-list.md',
			'common/querying/aggregations-limits.md',
			'common/querying/filters.md',
			'common/querying/filters-list.md',
			'common/querying/filters-exists.md',
			'common/querying/filters-in.md',
			'common/querying/filters-combining.md',
			'common/querying/filters-or.md',
			'common/querying/timeframes.md',
			'common/querying/timeframes-relative.md',
			'common/querying/timeframes-absolute.md',
			'common/querying/groupby.md',
			'common/querying/intervals.md',
			'common/querying/timezones.md',
			'http/querying/error-handling-title.md',
			'http/querying/error-handling-body.md',
			'http/exporting-events.md',
			'http/delete-collection.md',
			common
		] 
	},
	{ 
		env: 'ios', 
		title: 'iOS', 
		allowedLanguages: ['objc', 'swift'],
		structure: [
			'common/intro.md',
			'ios/installation.md',
			'ios/pushing/index.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'ios/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'common/querying/unsupported.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			common
		] 
	},
	{ 
		env: 'ruby', 
		title: 'Ruby', 
		allowedLanguages: ['ruby'],
		structure: [
			'common/intro.md',
			'ruby/installation.md',
			'ruby/pushing/index.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'ruby/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'common/querying/unsupported.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			'common/projects-keys.md',
			'common/security/index.md',
			'common/security/filtered-keys.md',
			'ruby/security/generating-filtered-key.md',
			modeling
		] 
	},
	{ 
		env: 'php', 
		title: 'PHP',
		allowedLanguages: ['php'],
		structure: [
			'common/intro.md',
			'php/installation.md',
			'php/pushing/index.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'php/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'common/querying/unsupported.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			'common/projects-keys.md',
			'common/security/index.md',
			'common/security/filtered-keys.md',
			'php/security/generating-filtered-key.md',
			modeling
		] 
	},
	{ 
		env: 'net',
		title: '.NET',
		allowedLanguages: ['csharp'],
		structure: [
			'common/intro.md',
			'net/installation.md',
			'net/pushing/index.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'net/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'net/querying/index.md',
			'net/querying/metadata.md',
			'common/querying/aggregations.md',
			'net/querying/aggregations-more.md',
			'net/querying/aggregations-list.md',
			'common/querying/aggregations-limits.md',
			'common/querying/filters.md',
			'net/querying/filters-list.md',
			'common/querying/filters-exists.md',
			'net/querying/filters-in.md',
			'common/querying/filters-combining.md',
			'net/querying/filters-more.md',
			'common/querying/filters-or.md',
			'common/querying/timeframes.md',
			'net/querying/timeframes-relative.md',
			'net/querying/timeframes-absolute.md',
			'common/querying/groupby.md',
			'common/querying/intervals.md',
			'common/querying/timezones.md',
			'net/querying/error-handling.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			'common/projects-keys.md',
			'common/security/index.md',
			'common/security/filtered-keys.md',
			'net/security/generating-filtered-key.md',
			modeling
		] 
	},
	{ 
		env: 'java', 
		title: 'Java', 
		allowedLanguages: ['java', 'java-vanilla', 'groovy-java', 'xml-java'],
		structure: [
			'common/intro.md',
			'java/installation.md',
			'java/usage.md',
			'java/pushing/index.md',
			'java/event-stores.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'java/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'common/querying/unsupported.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			common
		] 
	},
	{ 
		env: 'android', 
		title: 'Android', 
		allowedLanguages: ['java', 'java-android', 'groovy-android', 'xml-android'],
		structure: [
			'common/intro.md',
			'java/installation.md',
			'android/permissions.md',
			'java/usage.md',
			'java/pushing/index.md',
			'android/event-stores.md',
			'common/pushing/import-unsupported.md',
			'common/pushing/restrictions.md',
			'java/pushing/reliable.md',
			'common/pushing/timestamp.md',
			'common/querying/unsupported.md',
			'common/exporting-events.md',
			'common/delete-collection.md',
			common
		] 
	}
];

module.exports = languages;