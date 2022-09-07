// MIT © 2017 azu
"use strict";
function BugReporter(issueURL) {
    this.github_issue_point = issueURL;
    this.github_issue_title = "";
    this.github_issue_body = "";
    this.github_issue_labels = "BugReport";
}
BugReporter.prototype.getSelectedText = function() {
    var sel, text = "";
    if (window.getSelection) {
        text = "" + window.getSelection();
    } else if ((sel = document.selection) && sel.type === "Text") {
        text = sel.createRange().text;
    }
    return text;
};
BugReporter.prototype.setTitle = function(title) {
    this.github_issue_title = title;
};
BugReporter.prototype.setBody = function(body) {
    this.github_issue_body = body;
};

/**
 * @description report jump
 * @param target _blank: Load the URL into a new window
 *               _parent: URL loaded into parent frame
 *               _self: URL replaces current page (default target)
 *               _top: URL replaces any loadable frameset
 * */
BugReporter.prototype.report = function(target = '_self') {
    var url = this.github_issue_point
        + "?title=" + encodeURIComponent(this.github_issue_title)
        + "&body=" + encodeURIComponent(this.github_issue_body);
    window.open(url, target)
};
module.exports = BugReporter;