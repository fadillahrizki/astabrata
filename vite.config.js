import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Automatically updates the service worker
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Astabrata",
        short_name: "Astabrata",
        description:
          "Dashboard Pemantauan & PengendalianPenanganan PPKS Kabupaten Asahan",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // Allows you to test PWA features locally in dev mode
      },
    }),
  ],
});
