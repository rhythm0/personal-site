export interface NavItem {
  title: string;
  description: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string;
}

export interface GalleryItem {
  title: string;
  subtitle: string;
}

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface NavCardProps {
  title: string;
  description: string;
  href: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}