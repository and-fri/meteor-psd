Package.describe({
  summary: 'PSD.js + PNG.js packed for Meteor.'
});
Npm.depends({
  'psd':'0.0.4',
  'png':'3.0.3'
});
Package.on_use(function(api) {
  api.add_files('psd_png.js', ['server']);
  api.export(['Parser','Png'], server);
});
