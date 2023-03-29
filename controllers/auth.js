const crypto = require("crypto");
const connect = require("getstream");
const StreamChat = require("stream-chat");
const bcrypt = require("bcrypt");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_SECRET;
const app_id = process.env.STREAM_APP_ID;

const login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};
const signup = async () => {
  try {
    const { fullName, username, password, phoneNumber, avatarURL } = req.body;
    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);
    res.status(200).json({
      token,
      username,
      fullName,
      phoneNumber,
      avatarURL,
      userId,
      hashedPassword,
      f,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};

module.exports = {
  login,
  signup,
};
