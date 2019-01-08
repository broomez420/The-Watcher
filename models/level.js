const mongoose = require("mongoose");

const levelSchema = mongoose.Schema({
    userID: String,
    serverID: String,
    level: Number
    xp: Number

})

module.exports = mongoose.model("Level", levelSchema);
module.exports = mongoose.model("XP", xpSchema);
