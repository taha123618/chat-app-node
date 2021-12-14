const router = require("express").Router();
const Conversation = require("../dbConnection/converstaion");

//new conv

router.post("/conversation", async (req, res) => {
    const {receiverId,senderId} = req.body
  const newConversation = new Conversation({
    members: [senderId, receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/conversation/:userId", async (req, res) => {
    console.log("req.params",req.params)
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
