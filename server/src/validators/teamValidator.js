const { z } = require('zod');

exports.createTeamSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    position: z.string().min(1, 'Position is required'),
    bio: z.string().optional(),
    image: z.string().optional(),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional()
    }).optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional()
  })
});

exports.updateTeamSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    position: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional()
    }).optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional()
  })
});
