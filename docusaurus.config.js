import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
(
  module.exports = {
    title: "綿飴屋のドキュメント",
    tagline: "wataameya",
    url: "https://wataame89.github.io",
    baseUrl: "/documents-wataameya/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/wataameya.png",
    organizationName: "wataame89", // Usually your GitHub org/user name.
    projectName: "documents-wataameya", // Usually your repo name.

    i18n: {
      defaultLocale: "ja",
      locales: ["ja", "en", "ko", "zh"],
    },

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
          },
          blog: false,
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "綿飴屋 Wataameya",
          // logo: {
          //   alt: "My Site Logo",
          //   src: "img/wataameya.png",
          // },
          items: [
            {
              type: "doc",
              docId: "marshmallowPB/intro",
              position: "left",
              label: "ましゅまろPB",
            },
            {
              type: "doc",
              docId: "motchiriShader/intro",
              position: "left",
              label: "もっちりシェーダー",
            },
            {
              type: "doc",
              docId: "blackoutShader/intro",
              position: "left",
              label: "ブラックアウトシェーダー",
            },
            {
              type: "doc",
              docId: "blackbodyShader/intro",
              position: "left",
              label: "ブラックボディシェーダー",
            },
            {
              type: "doc",
              docId: "shadowdepthShader/intro",
              position: "left",
              label: "なでなでシェーダー",
            },
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://x.com/wataameya_vr",
              label: "X(Twitter)",
              position: "right",
            },
            {
              href: "https://wataame89.booth.pm/",
              label: "Booth",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Links",
              items: [
                {
                  label: "Booth",
                  href: "https://wataame89.booth.pm/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/wataameya_vr",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
  }
);
