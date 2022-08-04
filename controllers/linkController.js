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

/* realizando busca no banco de dados */
const allLinks = async (req, res) => {
  try {
    let docs = await Link.find({});
    res.render("all", { links: docs });
  } catch (error) {
    res.send(error);
  }
};


module.exports = {
  redirect,
  addLink,
  allLinks,
};
