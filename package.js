Package.describe({
  name: 'erasaur:session-helper',
  summary: 'Template Helper for Sessions',
  version: '0.0.2',
  git: 'https://github.com/erasaur/session-helper'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('templating', 'client');
  api.addFiles('lib/erasaur:session-helper.js', 'client');
});
