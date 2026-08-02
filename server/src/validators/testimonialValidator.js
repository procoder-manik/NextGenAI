const { z } = require('zod');

exports.createTestimonialSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    role: z.string().optional(),
    company: z.string().optional(),
    content: z.string().min(1, 'Content is required'),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});

exports.updateTestimonialSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    content: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});
