const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"],
        unique: [true, "Token already exists"]
    }
}, { timestamps: true });

blackListSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const blackListModel = mongoose.model("BlackList", blackListSchema);

module.exports = blackListModel;