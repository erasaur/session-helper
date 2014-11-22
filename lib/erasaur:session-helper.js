Template.registerHelper('Session', function (key, options) {
  var opts = options && _.pick(options.hash, 'eq', 's', 'f');
  var val = Session.get(key);

  if (typeof opts === 'undefined' || _.isEmpty(opts))
    return val;

  var val = _.has(opts, 'eq') ? Session.equals(key, opts.eq) : val;
  // _.defaults(opts, { 's': true, 'f': false });

  var success = _.result(opts, 's') || true;
  var failure = _.result(opts, 'f') || false;

  // if either of success or failure cases
  // is a string, default to empty strings
  if (typeof success === 'string' || typeof failure === 'string') {
    success = success || '';
    failure = failure || '';
  }

  return val ? success : failure;
});