"use client";

import Script from "next/script";

export default function Head() {
  const path = "/";
  const url = path;
  const title = `Yanal Shoubaki`;
  const description = "Software engineer";
  return (
    <>
      <title>{title}</title>
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || ""} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta name="description" content={description || ""} />
      <meta content={url} property="og:url" />
      <link href={url} rel="canonical" />
      <meta name="application-name" content="Yanal Shoubaki" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Yanal Shoubaki" />
      <meta name="description" content="Software engineer" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#D4ECDD" />
      <meta name="msapplication-tap-highlight" content="no" />

      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/images/touch-icon-ipad-retina.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#D4ECDD"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#D4ECDD" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="msapplication-TileImage"
        content="/images/ms-icon-144x144.png"
      />
      <meta
        name="google-site-verification"
        content="wCh4RCga0pdrxa4ctZ1U4mGJnjCDUYFfO_3ttkMUP2E"
      />

      <meta name="theme-color" content="#214F50" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/images/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/images/apple-icon-60x60.png"
      />
      <link
        rel="search"
        href="https://www.yanalshoubaki.com/rss.xml"
        type="application/opensearchdescription+xml"
        title="Yanal Shoubaki"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      ></link>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W82MWK6EGC"
      ></script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-W82MWK6EGC');
            `}
      </Script>
    </>
  );
}
