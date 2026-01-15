import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      // find user in db by clerk ID
      let user = await User.findOne({ clerkId });

      // If user not found, create them in database (auto-sync from Clerk)
      if (!user) {
        try {
          // Fetch user details from Clerk
          const clerkUser = await clerkClient.users.getUser(clerkId);
          
          const newUserData = {
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0]?.emailAddress,
            name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
            profileImage: clerkUser.imageUrl || "",
          };

          // Create user in database
          user = await User.create(newUserData);

          // Also upsert to Stream for video/chat functionality
          await upsertStreamUser({
            id: user.clerkId.toString(),
            name: user.name,
            image: user.profileImage,
          });

          console.log("Auto-created user in database:", user.email);
        } catch (createError) {
          console.error("Error auto-creating user:", createError);
          return res.status(500).json({ message: "Failed to sync user data" });
        }
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
