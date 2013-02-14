var app = require("../app");


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gitignore.io' });
};

/*
 * GET API page.
 */

exports.apiIgnore = function(req, res){
//  console.log(req.params.ignore);
  var ignoreFileList = req.params.ignore.split(",");
  var output = "# Generated by http://gitignore.io\n";
  for (var file in ignoreFileList){
    output += "\n### " + app.gitIgnoreJSONObject[ignoreFileList[file]].name + " ###\n"
    output += app.gitIgnoreJSONObject[ignoreFileList[file]].contents;
  }

//  var text = app.gitIgnore[req.params.ignore];
  res.setHeader('Content-Type', 'text/plain');
  res.send(output);
};
/*
 * GET List of all ignore types
 */
exports.apiListTypes = function(req, res){
  res.setHeader('Content-Type', 'application/json');
  console.log(app.gitIgnoreJSONString);
//  res.setHeader('Expires', '0');
//  console.log('[{id: "CA", text: "Califoria"},{id: "WY", text: "Wyoming"}]');
  res.send(app.gitIgnoreJSONString);
};
