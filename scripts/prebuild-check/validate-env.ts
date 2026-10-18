import fs from "fs";
import path from "path";
import dotenv from "dotenv";
const envFilePath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
  console.log("✅ Loaded .env file");
} else {
  console.warn("⚠️ No .env file found");
}

// Check each required env variable

const requiredEnvs = [
  "SENDER_EMAIL",
  "SENDER_EMAIL_PASSWORD",
  "SMTP_HOST",
  "EMAIL_SERVICE",
  "SMTP_PORT",
  "ADMIN_RECEIVER_MAIL",
  "enviroment",
  "production_url",
  "local_url",
  "TOKEN_SECRET_KEY",
  "SECRET_KEY",
  "MONGODB_URI",
  "MONGODB_DB",
  "REFRESH_SECRET_KEY",
  "GENERAL_SECRET_KEY",
  "INTERNAL_SECRET",
  "NEXT_PUBLIC_SERVICE_SECRET",
  "NEXT_PUBLIC_SERVICE_SECRET",
] as const;
let missing = false;
for (const key of requiredEnvs) {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    missing = true;
  }
}

const contentfulEnvs = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_ENVIRONMENT",
  "CONTENTFUL_DELIVERY_ACCESS_TOKEN",
  "CONTENTFUL_PREVIEW_ACCESS_TOKEN",
  "CONTENTFUL_PREVIEW_SECRET",
] as const;

const hasAnyContentfulEnv = contentfulEnvs.some((key) => !!process.env[key]);
if (hasAnyContentfulEnv) {
  for (const key of contentfulEnvs) {
    if (!process.env[key]) {
      console.error(
        `❌ Missing Contentful variable for partial setup: ${key}`
      );
      missing = true;
    }
  }
} else {
  console.warn(
    "ℹ️ Contentful env not set. CMS integration will stay disabled until configured."
  );
}

// Fail the build if any env is missing
if (missing) {
  throw new Error(
    "Build failed: one or more required environment variables are missing."
  );
}

console.log("✅ All required environment variables are set");
