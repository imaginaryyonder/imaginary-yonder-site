import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const fragments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fragments' }),
  schema: z.object({
    title:       z.string(),
    type:        z.string(),
    date:        z.string(),
    update: z.string().optional(),
    excerpt:     z.string().optional(),
    region:      z.string().optional(),
    period:      z.string().optional(),
    composed:    z.string().optional(),
    tags:        z.array(z.string()).default([]),
    related:     z.array(z.string()).default([]),
    journalPost: z.object({ slug: z.string(), title: z.string() }).optional(),
    image:       z.string().optional(),
  }),
})

const world = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/world' }),
  schema: z.object({
    title:        z.string(),
    type:         z.string(),
    date:         z.string(),
    update: z.string().optional(),
    excerpt:      z.string().optional(),
    image:        z.string().optional(),
    icon:         z.string().optional(),
    parentRegion: z.string().optional(),
    tags:         z.array(z.string()).default([]),
    compendium:   z.string().optional(),
  }),
})

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title:            z.string(),
    date:             z.string(),
    update: z.string().optional(),
    excerpt:          z.string().optional(),
    tags:             z.array(z.string()).default([]),
    relatedFragments: z.array(z.string()).default([]),
  }),
})

const compendium = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compendium' }),
  schema: z.object({
    title:        z.string(),
    type:         z.string(),
    region:       z.string().optional(),
    parentRegion: z.string().optional(),
    climate:      z.string().optional(),
    area:         z.string().optional(),
    elevation:    z.string().optional(),
    excerpt:      z.string().optional(),
    update:       z.string().optional(),
    date:         z.string(),
    tags:         z.array(z.string()).default([]),
    relatedWorld: z.string().optional(),
  }),
})
export const collections = { fragments, world, journal, compendium }