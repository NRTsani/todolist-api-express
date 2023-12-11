const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        registered_at: {
            type: Date,
            default: Date.now,
        },
    },
    {timestamps: true}
);

// index filter
userSchema.index({email: 1}, {name: "user_email_idx"});

exports.User = mongoose.model("User", userSchema);
