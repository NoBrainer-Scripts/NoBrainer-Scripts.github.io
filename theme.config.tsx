import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://project-penguins.itsanobrainer.dev/${asPath}`;
  const description = frontMatter.description || "Documentation for Project Penguins' resources for FiveM/RedM";

  return (
    <>
      <meta name="testshit" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/favicon/favicon.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Project Penguins';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
      }`,
  };
}

const config: DocsThemeConfig = {
  logo: <>
    <img src="/static/images/penguin.png" alt="Project Penguins Logo" style={{height: '32px', width: '32px'}}/>
      <span style={{ paddingLeft: '10px' }}>Project Penguin</span>
    </>,
    project: {
      link: 'https://github.com/Project-Penguins',
    },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/Project-Penguins/project-penguins.github.io/tree/main',
  footer: {
    text: 'Project Penguins',
  },
  head: useHead,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  // gitTimestamp React.ReactNode | React.FC<{ timestamp: Date }>
  gitTimestamp: ({ timestamp }) => {
    return (
      <div >
        Last updated at{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}
        </time>
      </div>
    )
  },

  useNextSeoProps: useNextSeoProps,
}

export default config
