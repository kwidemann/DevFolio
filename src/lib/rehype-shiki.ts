import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Element } from 'hast';
import { bundledLanguages, createHighlighter } from 'shiki';

interface ShikiOptions {
  theme?: string;
  themes?: { light: string; dark: string };
  defaultLang?: string;
}

let highlighterPromise: Promise<Awaited<ReturnType<typeof createHighlighter>>> | null = null;

function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: Object.keys(bundledLanguages) as Array<keyof typeof bundledLanguages>,
    });
  }
  return highlighterPromise;
}

const rehypeShiki: Plugin<any[], any, any> = function (options = {}) {
  const { theme = 'github-dark', themes, defaultLang = 'text' } = options as ShikiOptions;

  return async function (tree) {
    const highlighter = await getHighlighterInstance();
    const codeBlocks: Array<{
      index: number;
      parent: any;
      lang: string;
      codeContent: string;
    }> = [];

    visit(tree, 'element', (node: Element, index, parent) => {
      if (
        node.tagName === 'pre' &&
        node.children.length === 1 &&
        node.children[0].type === 'element' &&
        node.children[0].tagName === 'code' &&
        typeof index === 'number' &&
        parent &&
        Array.isArray(parent.children)
      ) {
        const codeNode = node.children[0];
        const className = codeNode.properties?.className as string[] | undefined;
        const lang = className?.[0]?.replace('language-', '') || defaultLang;

        const codeContent = codeNode.children
          .filter((child): child is { type: 'text'; value: string } => child.type === 'text')
          .map((child) => child.value)
          .join('');

        codeBlocks.push({ index, parent, lang, codeContent });
      }
    });

    await Promise.all(
      codeBlocks.map(async ({ index, parent, lang, codeContent }) => {
        try {
          const hast = await highlighter.codeToHast(codeContent, {
            lang,
            ...(themes
              ? { themes: { light: themes.light, dark: themes.dark } }
              : { theme }),
          });

          if (hast.children.length === 1) {
            parent.children[index] = hast.children[0];
          } else if (hast.children.length > 1) {
            parent.children.splice(index, 1, ...hast.children);
          }
        } catch (error) {
          console.warn(`Failed to highlight code block with language "${lang}":`, error);
        }
      })
    );
  };
};

export default rehypeShiki;
