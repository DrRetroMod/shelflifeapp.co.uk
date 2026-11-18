// Sign-in relay: services like Facebook only send people back to an https address, but Shelf Life runs on
// your own computer (http://localhost). This page passes the sign-in result straight back to it.
// Nothing is stored or sent anywhere else; the code it carries is useless without the app secret,
// which stays on your computer.
(function () {
  var provider = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  if (!/^[a-z]+$/.test(provider)) provider = "";
  var port = "8000";
  var target = "http://localhost:" + port + "/api/oauth/" + provider + "/callback" + location.search;
  var link = document.getElementById("go");
  if (link) link.href = target;
  if (provider && location.search) location.replace(target);
})();
