Template.registerHelper('Session', function (key, options) {
  var opts = options && _.pick(options.hash, 'eq', 's', 'f');
  
  if (!_.has(opts, 'eq')) {
    return Session.get(key);
  }

  var val = Session.equals(key, opts.eq);
  var success = _.result(opts, 's');
  var failure = _.result(opts, 'f');

  // if either of success or failure cases
  // is a string, default to empty strings
  if (typeof success === 'string' || typeof failure === 'string') {
    success = success || '';
    failure = failure || '';
  } else {
    success = success || true;
    failure = failure || false;
  }

  return val ? success : failure;
});
