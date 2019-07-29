const bcrypt = require("bcryptjs");

const registerUser = async (req, res, next) => {
  const { firstname, lastname, username, password, email, isadmin } = req.body;
  const db = req.app.get("db");

  const checkedUser = await db.get_user([username]);
  if (checkedUser.length === 0) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await db.create_user([
      firstname,
      lastname,
      username,
      hashedPassword,
      email,
      isadmin
    ]);

    req.session.user = {
      firstname,
      lastname,
      username,
      hashedPassword,
      email,
      isadmin
    };
    res.json(user);
  } else {
    res.status(409).json({ error: "Username taken, stupid." });
  }
};

const getUsers = async (req, res, next) => {
  const db = req.app.get("db");
  db.get_users()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
};

const loginUser = async (req, res, next) => {
  const db = req.app.get("db");
  const { username, password } = req.body;

  const checkedUser = await db.get_user([username]);
  if (checkedUser.length === 0) {
    res.status(401).json({ error: "Wrong username and password, stupid." });
  }

  const isMatching = await bcrypt.compare(password, checkedUser[0].password);

  if (isMatching) {
    req.session.user = {
      username: username,
      password: password,
      isAdmin: checkedUser[0].isAdmin
    };
    return res.json(req.session.user);
  } else {
    return res
      .status(403)
      .json({ error: "Wrong username and password, stupid" });
  }
};

module.exports = {
  registerUser,
  getUsers,
  loginUser
};
