import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Lumina",
  tagline: "An alternative for VFX creation",
  favicon: "img/favicon.ico",

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/LuminaDocs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mqxsyy.github.io/LuminaDocs", // Usually your GitHub org/user name.
  projectName: "Lumina", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Mqxsyy/LuminaDocs/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Lumina",
      logo: {
        alt: "Lumina Logo",
        src: "img/LuminaLogoLight.png",
        srcDark: "img/LuminaLogoDark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "gettingStartedSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "docSidebar",
          sidebarId: "nodesSidebar",
          position: "left",
          label: "Nodes",
        },
        {
          href: "https://trello.com/b/HdIHbE2Q/main",
          label: "Trello",
          position: "right",
        },
        {
          href: "https://discord.gg/RwkrWuh6Bd",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/Mqxsyy/Lumina",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} Lumina, Inc. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
