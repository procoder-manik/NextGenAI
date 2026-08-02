const { z } = require('zod');

exports.createFaqSchema = z.object({
  body: z.object({
    question: z.string().min(1, 'Question is required'),
    answer: z.string().min(1, 'Answer is required'),
    category: z.string().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});

exports.updateFaqSchema = z.object({
  body: z.object({
    question: z.string().optional(),
    answer: z.string().optional(),
    category: z.string().optional(),
    published: z.boolean().optional(),
    order: z.number().optional()
  })
});
