Package.describe({
  summary: 'Collection helpers'
});
Npm.depends( function(){

});
Package.on_use(function(api) {
  api.use('underscore');
  api.add_files('collection-helpers.js', ['client', 'server']);
});
