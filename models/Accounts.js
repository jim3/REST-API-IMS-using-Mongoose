const mongoose = require("mongoose");
const { Schema } = mongoose;

// (*) requires one or more characters that are not whitespace or '@' symbol for user/domain/tld
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Create an Accounts schema
const accountsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            // custom validator  returns `true` if valid, `false` if invalid
            validator: function (v) {
                return emailRegex.test(v);
            },
            // custom error message
            message: function (props) {
                return `${props.value} is not a valid email address!`;
            },
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
    },
    // add createdAt and updatedAt fields to schema
    timestamps: true,
});

// Create Accounts model
const Accounts = db.model("Accounts", accountsSchema);

// Export Accounts model
module.exports = { Accounts };
