function isAuthorizedHasSessionForAPI(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ error: "No session, must log in to continue" });
    }
  }
  
  function isAuthorizedHasSessionForWebsite(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect("/login");
    }
  }

  module.exports = {
    isAuthorizedHasSessionForAPI,
    isAuthorizedHasSessionForWebsite,
  };
  