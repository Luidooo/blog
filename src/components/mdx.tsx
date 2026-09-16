import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { PostsTree } from '@/components/posts-tree';
import { DitheringBackground } from '@/components/dithering-background';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    PostsTree,
    DitheringBackground,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
