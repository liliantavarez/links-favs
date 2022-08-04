const Link = require("../models/Link");

const redirect = async (req, res) => {
  let title = req.params.title;
  try {
    let doc = await Link.findOne({ title });
    if (doc != null) {
      res.redirect(doc.url);
    } else {
      res.redirect("/");
    }
  } catch (err) {
    res.send(err);
  }
};

/* cadastrando no banco de dados */
const addLink = async (req, res) => {
  let link = new Link(req.body);
  try {
    let doc = await link.save();
    res.redirect("/");
  } catch (erro) {
    res.render("index", { erro, body: req.body });
  }
};

module.exports = {
  redirect,
  addLink,
};
