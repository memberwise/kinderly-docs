// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://docs.mykinderly.com",
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
	integrations: [
		starlight({
			title: "Kinderly Docs",
			logo: {
				src: "./src/assets/kinderly.png",
				replacesTitle: true,
			},
			favicon: "/favicon.ico",
			head: [
				{ tag: "link", attrs: { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48" } },
				{ tag: "link", attrs: { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" } },
				{ tag: "link", attrs: { rel: "icon", type: "image/png", href: "/favicon-192x192.png", sizes: "192x192" } },
				{ tag: "link", attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" } },
				{ tag: "link", attrs: { rel: "manifest", href: "/site.webmanifest" } },
				{ tag: "meta", attrs: { name: "theme-color", content: "#7c3aed" } },
			],
			customCss: ["./src/styles/kinderly.css"],
			social: [
				{
					icon: "external",
					label: "Kinderly",
					href: "https://mykinderly.com",
				},
			],
			sidebar: [
				{ label: "Getting Started", autogenerate: { directory: "getting-started" } },
				{ label: "Forms", autogenerate: { directory: "forms" } },
				{ label: "Documents", autogenerate: { directory: "documents" } },
				{ label: "Packets", autogenerate: { directory: "packets" } },
				{ label: "Actions", autogenerate: { directory: "actions" } },
				{ label: "Shares", autogenerate: { directory: "shares" } },
				{ label: "Kinderly Grow", autogenerate: { directory: "grow" } },
				{ label: "Funding Center", autogenerate: { directory: "funding" } },
				{ label: "Billing & Subscriptions", autogenerate: { directory: "billing" } },
				{ label: "Kinderly Manage", autogenerate: { directory: "manage" } },
				{ label: "Integrations", autogenerate: { directory: "integrations" } },
				{ label: "Mobile Apps", autogenerate: { directory: "mobile" } },
				{ label: "Reference", autogenerate: { directory: "reference" } },
			],
		}),
	],
});
