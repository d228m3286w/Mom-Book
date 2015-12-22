var React = require("react");
var BlogList = require("./blogList");
var BlogBox = require("./blogBox");


React.render(<BlogBox url="/api/blog/"/>, document.getElementById('blog-list'));

