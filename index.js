module.exports = function (template, cb) {
  var partialPattern = /\{\{>( )?[A-z0-9._-]*( )?\}\}/g,
    unBodyPattern = /^(?!.*body)/;

  var matched = template.match(partialPattern);

  if (!matched) {

    if (typeof cb === 'function') {
      cb(null, []);
    }

    return [];
  }

  matched = matched.filter(function (partial) {
    return unBodyPattern.test(partial);
  });

  var partials = matched.map(function (partial) {
    var splited = partial.split('{{>')[1];

    splited = splited.split('}}');

    return splited[0].trim();
  });

  if (typeof cb === 'function') {
    cb(null, partials);
  }

  return partials;
};
