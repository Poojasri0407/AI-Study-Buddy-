const mongoose = require("mongoose");

const studyMaterialSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        },

        content: {
            type: String,
            required: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "StudyMaterial",
    studyMaterialSchema
);