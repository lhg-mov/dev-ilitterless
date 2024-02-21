type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author[];
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
  editorPost: EditorPosts[];
}

export interface Product extends Base {
  author: Author[];
  body: Block[];
  mainImage: Image;
  slug: Slug;
  title: string;
  secondaryTitle: string;
}

interface EditorPosts extends Base {
  categories: Category[];
  title: string;
  slug: Slug;
  description: string;
  image: Image;
}

interface Author extends Base {
  description: string;
  image: Image;
  name: string;
  slug: Slug;
  position: string;
}

interface Image extends Base {
  _type: "image";
  asset: Reference;
  alt: string;
}

interface Reference {
  _type: "slug";
  current: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}
