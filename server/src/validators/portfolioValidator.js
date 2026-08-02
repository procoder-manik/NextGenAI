const { z } = require('zod');

exports.createPortfolioSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    slug: z.string().min(1, 'Slug is required'),
    description: z.string().min(1, 'Description is required'),
    shortDescription: z.string().optional(),
    images: z.array(z.string()).optional(),
    category: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    client: z.string().optional(),
    results: z.string().optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});

exports.updatePortfolioSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    description: z.string().optional(),
    shortDescription: z.string().optional(),
    images: z.array(z.string()).optional(),
    category: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    client: z.string().optional(),
    results: z.string().optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});
