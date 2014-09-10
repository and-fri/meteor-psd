Package.describe({
  summary: "PSD.js- a psd parser, packed for Meteor.",
  version: "0.0.3",
  git: "https://github.com/andruschka/meteor-psd.git"
});

Npm.depends({
  "psd":"0.0.4"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.export("PSD", 'server');
  api.add_files("include-psd.js", "server");
});
