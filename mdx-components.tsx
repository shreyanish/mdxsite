import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type ImgProps = ComponentPropsWithoutRef<'img'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="font-medium text-[#0B1215] text-[23px] mb-[32px] leading-none"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="font-medium text-[#0B1215] text-[17px] mt-[28px] mb-[24px] leading-none clear-both"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="font-normal text-[#404040] text-[16px] mb-[24px] leading-normal"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-[#A2A2A2] hover:text-[#1C45FF] underline underline-offset-4 decoration-1 transition-colors';

    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="tabular-nums font-normal text-[#404040] text-[16px] leading-normal" {...props} />
  ),
  img: (props: ImgProps) => {
    const isPortrait = props.src === '/meditheredportrait.png';
    return (
      <Image
        src={props.src as string}
        alt={props.alt || ''}
        width={400}
        height={400}
        priority={isPortrait}
        unoptimized={true}
        className="pixelated-image w-1/2 md:w-[calc((100%-72px)/4)] mb-[24px] md:mb-[24px] md:mr-[24px] md:float-left block"
        style={{ height: 'auto' }}
      />
    );
  },
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
