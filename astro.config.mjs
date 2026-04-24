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
			favicon: "/kinderly-favicon.png",
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
				{ label: "Billing & Subscriptions", autogenerate: { directory: "billing" } },
				{ label: "Kinderly Manage", autogenerate: { directory: "manage" } },
				{ label: "Integrations", autogenerate: { directory: "integrations" } },
				{ label: "Mobile Apps", autogenerate: { directory: "mobile" } },
				{ label: "Reference", autogenerate: { directory: "reference" } },
			],
		}),
	],
});
