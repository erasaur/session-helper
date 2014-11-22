Package.describe({
  name: 'erasaur:session-helper',
  summary: 'Template Helper for Sessions',
  version: '0.0.1',
  git: 'https://github.com/erasaur/session-helper'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('templating', 'client');
  api.addFiles('erasaur:session-helper.js', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('erasaur:session-helper');
  api.addFiles('erasaur:session-helper-tests.js');
});
