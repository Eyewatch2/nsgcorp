export type ClientSliderItem = {
  src: string;
  name: string;
  height: number;
  width: number;
};

interface ImageSize {
  sourceUrl: string;
  width: string;
  height: string;
}

interface MediaDetails {
  file: string;
  sizes: ImageSize[];
}

interface FeaturedImageNode {
  mediaDetails: MediaDetails;
}

interface FeaturedImage {
  node: FeaturedImageNode;
}

interface CategoryNode {
  slug: string;
  name: string;
}

interface Categories {
  nodes: CategoryNode[];
}

export interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Categories;
  content?: string | TrustedHTML;
}

export interface PostList {
  nodes: Post[];
}

export interface TeamList {
  nodes: Team[];
}

export interface TeamImage {
  node: {
    altText: string;
    mediaDetails: MediaDetails;
  };
}

export interface Team {
  categories: Categories;
  equipo: {
    cargo: string;
    fieldGroupName: string;
    prioridad: number | 0;
    nombre: string;
    imagen: TeamImage;
  };
}

export interface Empresa {
  empresas: {
    thumbnail: FeaturedImage;
    description: string;
    title: string;
  };
  slug: string;
}
