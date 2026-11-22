import Admin from "../models/Admin.js";
import User from "../models/User.js";

export const autoSeedDefaults = async () => {
  try {
    // 1. Ensure Default Admin
    const adminExists = await Admin.findOne({ email: "admin@fixmyward.gov.in" });
    if (!adminExists) {
      await Admin.create({
        name: "Admin Commander",
        email: "admin@fixmyward.gov.in",
        password: "adminpassword123",
        role: "admin",
        department: "Municipal Operations Command",
        designation: "Chief Administrative Officer",
        isActive: true,
      });
      console.log("🌱 Auto-seeded Default Admin (admin@fixmyward.gov.in)");
    }

    // 2. Ensure Default Citizen
    const citizenExists = await User.findOne({ email: "citizen@fixmyward.gov.in" });
    if (!citizenExists) {
      await User.create({
        name: "Senthil Kumar",
        email: "citizen@fixmyward.gov.in",
        password: "password123",
        role: "citizen",
        ward: "Ward 12 - Coimbatore",
      });
      console.log("🌱 Auto-seeded Default Citizen (citizen@fixmyward.gov.in)");
    }
  } catch (error) {
    console.error("⚠️ AutoSeed Notice:", error.message);
  }
};

export default autoSeedDefaults;
