const { z } = require('zod');

exports.createCareerSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    department: z.string().min(1, 'Department is required'),
    type: z.enum(['full-time', 'part-time', 'contract', 'remote']).optional(),
    location: z.string().optional(),
    description: z.string().min(1, 'Description is required'),
    requirements: z.array(z.string()).optional(),
    responsibilities: z.array(z.string()).optional(),
    salary: z.string().optional(),
    status: z.enum(['open', 'closed']).optional()
  })
});

exports.updateCareerSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    department: z.string().optional(),
    type: z.enum(['full-time', 'part-time', 'contract', 'remote']).optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    requirements: z.array(z.string()).optional(),
    responsibilities: z.array(z.string()).optional(),
    salary: z.string().optional(),
    status: z.enum(['open', 'closed']).optional()
  })
});
