import { urlFor } from "@/lib/sanity.client";
import { Image } from "@nextui-org/react";
import Link from "next/link";

export const RichTextAbout = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="py-5 w-full">
          <Image src={urlFor(value).url()} alt="Post image" width={500} height={420} className="object-cover w-[500px] aspect-video rounded-xl select-none" />
        </div>
      );
    },
  },
  prop: {
    span: ({ children }: any) => <span>{children}</span>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-5 py-5 list-disc space-y-5">{children}</ul>,
  },
  number: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,
  block: {
    h1: ({ children }: any) => <div className="text-4xl my-16 font-bold">{children}</div>,
    h2: ({ children }: any) => <div className="text-3xl my-16 font-bold">{children}</div>,
    h3: ({ children }: any) => <div className="text-2xl my-8 font-bold">{children}</div>,
    h4: ({ children }: any) => <div className="text-2xl my-8 font-bold">{children}</div>,
    h5: ({ children }: any) => <div className="text-xl my-4 font-bold">{children}</div>,
    h6: ({ children }: any) => <div className="text-lg my-4 font-bold">{children}</div>,
    blockquote: ({ children }: any) => <blockquote className="border-l-orange-500 border-l-3 pl-5 py-2 my-5">{children}</blockquote>,
    span: ({ children }: any) => <span>{children}</span>,
  },
  marks: {
    bold: ({ children }: any) => <span className="font-bold">{children}</span>,
    italic: ({ children }: any) => <span className="italic">{children}</span>,
    underline: ({ children }: any) => <span className="underline decoration-primary">{children}</span>,
    link: ({ children, value }: any) => {
      let rel = undefined;
      if (value.href.startsWith("http://") || value.href.startsWith("https://")) {
        rel = "noopener noreferrer";
      }
      return (
        <Link href={value.href} rel={rel} target={rel ? "_blank" : undefined} className="underline text-primary decoraration-primary">
          {children}
        </Link>
      );
    },
  },
};
