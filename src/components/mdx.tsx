import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

function BlockQuote(props: any) {
    return <blockquote className="bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote" {...props} />
}

function Code ({ children, ...props}: any) {
    const code = highlight(children)

    return <code dangerouslySetInnerHTML={{ __html: code }} {...props} />
}

function CustomLink(props: any)  {
    const href = props.href

    if (href.startsWith("/")) {
        return (
            <Link href={href}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith("#")) {
        return (
            <a href={href} className="anchor">
                {props.children}
            </a>
        )
    }

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            {props.children}
        </a>
    )
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement(`a`, {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function Table ({data, ...props}: any) {
    const headers = data.headers.map((header: any, index: any) => (
        <th key={index}>{header}</th>
    ))

    const rows = data.rows.map((row: any, index: any) => (
        <tr key={index}>
            {row.map((cell: any, index: any) => (
                <td key={index}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table {...props}>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: BlockQuote,
  Table
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
