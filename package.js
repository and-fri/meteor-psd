Package.describe({
  summary: 'PSD.js- a psd parser, packed for Meteor.'
});
Npm.depends({
  'psd':'0.0.4'
});
Package.on_use(function(api) {
  api.add_files('include-psd.js', ['server']);
  api.export(['Parser'], 'server');
});
