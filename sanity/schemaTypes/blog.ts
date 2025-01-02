
import { Rule } from "@sanity/types"

export const blog = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the blog post.',
      validation: (Rule:Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for the blog post.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule:Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post.',
      validation: (Rule:Rule) => Rule.required().max(5000),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent', // Requires blockContent schema
      description: 'The main content of the blog post.',
      validation: (Rule:Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Name of the blog post author.',
      validation: (Rule:Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When the blog post was published.',
      validation: (Rule:Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      description: 'An image to represent the blog post.',
      options: {
        hotspot: true, // Allows cropping
      },
    },
  ],
};
