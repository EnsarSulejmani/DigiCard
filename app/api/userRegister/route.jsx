import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/User";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { username, password } = await req.json();

    const newUser = new User({
      Username: username,
      Password: password,
      Board: [
        {
          imageName: "DigiCard",
          boardName: "Default Board",
          professionalLinks: [
            {
              linkTitle: "Default Title",
              linkText: "Default Text",
              Link: "http://default.link",
              textAlign: "left",
            },
          ],
          socialMedia: [
            {
              socialMediaIcon: "default-icon.png",
              socialMediaLink: "http://default.social",
            },
          ],
          globalPreferences: {
            backgroundColor: "#ffffff",
            primaryColor: "#000000",
            secondaryColor: "#cccccc",
          },
        },
      ],
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}
