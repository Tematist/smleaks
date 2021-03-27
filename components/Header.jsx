/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import Logo from '../public/images/logfiles/image.png?width=32';
import LogoFull from '../public/images/logfiles/image.png?url';

export default function Header(opts) {
  const image = opts.image || {};
  const title = `SMLeaks | ${opts.title}`;
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        content="width=device-width, initial-scale=1.0"
        name="viewport"
      />
      <meta name="keywords" content="Scrap Mechanic, Video Game Leaks" />
      <meta property="og:type" content={opts.type || 'website'} />
      <meta property="og:url" content="https://smleaks.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={opts.description || 'Community run leaking website for Scrap Mechanic'} />
      <meta name="description" content={opts.description || 'Community run leaking website for Scrap Mechanic'} />
      {image.enabled === false ? <></> : <meta property="og:image" content={image.url || LogoFull.toString()} />}
      {image.enabled === false || !image.large ? <></> : <meta name="twitter:card" content="summary_large_image" />}
      <meta name="theme-color" content="#E67E22" />
      <meta name="msapplication-navbutton-color" content="#E67E22" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#E67E22" />
      <link rel="icon" href={Logo} />
      <title>{title}</title>
      <script async src="https://arc.io/widget.min.js#iB6CnyLz" />
      <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "155227d43a2043889cc5c9b87ecba9d3", "spa": true}' />
      <script dangerouslySetInnerHTML={{
        __html: 'if(![\'127.0.0.1\',\'localhost\',\'smleaks.com\'].includes(location.hostname)&&location.search!=="?d=b") location.href = \'https://smleaks.com\'+location.pathname',
      }}
      />
      <link rel="preconnect" href="https://i.imgur.com" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://static.cloudflareinsights.com" />
      <link rel="preconnect" href="https://arc.io" />
      <link rel="preconnect" href="https://core.arc.io" />
      <link rel="preconnect" href="https://static.arc.io" />
    </Head>
  );
}
