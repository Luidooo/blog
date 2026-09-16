import Link from 'next/link';
import { source } from '@/lib/source';
import { docsRoute } from '@/lib/shared';
import type { Node } from 'fumadocs-core/page-tree';

function renderNodes(nodes: Node[]) {
  return (
    <ul>
      {nodes.map((node, i) => {
        if (node.type === 'separator') {
          return (
            <li key={i}>
              <strong>{node.name}</strong>
            </li>
          );
        }

        if (node.type === 'folder') {
          const label = node.index ? (
            <Link href={node.index.url}>{node.name}</Link>
          ) : (
            <span>{node.name}</span>
          );
          return (
            <li key={i}>
              {label}
              {node.children.length > 0 && renderNodes(node.children)}
            </li>
          );
        }

        return (
          <li key={i}>
            <Link href={node.url}>{node.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export function PostsTree() {
  const tree = source.getPageTree();
  const children = tree.children.filter(
    (node) => !(node.type === 'page' && node.url === docsRoute),
  );
  return renderNodes(children);
}
