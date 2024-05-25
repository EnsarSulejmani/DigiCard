import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Board: [
      {
        imageName: {
          type: String,
          default: "DigiCard",
        },
        boardName: {
          type: String,
          default: "Default Board",
        },
        professionalLinks: [
          {
            linkTitle: {
              type: String,
              default: "Default Title",
            },
            linkText: {
              type: String,
              default: "Default Text",
            },
            Link: {
              type: String,
              default: "http://default.link",
            },
            textAlign: {
              type: String,
              default: "left",
            },
          },
        ],
        socialMedia: [
          {
            socialMediaIcon: {
              type: String,
              default: "default-icon.png",
            },
            socialMediaLink: {
              type: String,
              default: "http://default.social",
            },
          },
        ],
        globalPreferences: {
          backgroundColor: {
            type: String,
            default: "#ffffff",
          },
          primaryColor: {
            type: String,
            default: "#000000",
          },
          secondaryColor: {
            type: String,
            default: "#cccccc",
          },
        },
      },
    ],
  },
  { timestamps: true }
);

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
