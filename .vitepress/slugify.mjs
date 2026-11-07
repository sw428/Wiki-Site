// Preserve composed Japanese characters so existing Wiki fragments keep working.
export const slugify = (text) => text.normalize('NFC').trim().toLowerCase()
  .replace(/[^\p{L}\p{N}_\s-]/gu, '')
  .replace(/[-\s]+/g, '-')
