import { defineConfig } from "tinacms";
import nextConfig from "../next.config";

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";

const config = defineConfig({
  //   token: process.env.TINA_TOKEN!,
  //   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  // branch: "main",
  token: null,
  clientId: null,
  branch: null,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
    basePath: nextConfig.basePath?.replace(/^\//, "") || "", // The base path of the app (could be /blog)
  },
  schema: {
    collections: [Page, Post, Author, Global],
  },
  // contentApiUrlOverride: "/api/tina/gql",
  contentApiUrlOverride: process.env.API_URL || "http://localhost:4001/graphql",

});

export default config;
