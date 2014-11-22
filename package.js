Package.describe({
  name: 'erasaur:session-helper',
  summary: 'Template Helper for Sessions',
  version: '1.0.0',
  git: 'https://github.com/erasaur/session-helper'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('erasaur:session-helper.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('erasaur:session-helper');
  api.addFiles('erasaur:session-helper-tests.js');
});
