import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Mitra Ternak CMS' } },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        heroTitleId: fields.text({ label: 'Hero Title (ID)' }),
        heroTitleEn: fields.text({ label: 'Hero Title (EN)' }),
        heroSubtitleId: fields.text({ label: 'Hero Subtitle (ID)', multiline: true }),
        heroSubtitleEn: fields.text({ label: 'Hero Subtitle (EN)', multiline: true }),
        impactNumbers: fields.array(
          fields.object({
            value: fields.number({ label: 'Value' }),
            suffix: fields.text({ label: 'Suffix (%, +, etc.)' }),
            labelId: fields.text({ label: 'Label (ID)' }),
            labelEn: fields.text({ label: 'Label (EN)' }),
          }),
          { label: 'Impact Numbers', itemLabel: (props) => props.fields.labelId.value }
        ),
        aboutTeaserId: fields.text({ label: 'About Teaser (ID)', multiline: true }),
        aboutTeaserEn: fields.text({ label: 'About Teaser (EN)', multiline: true }),
      },
    }),

    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings',
      schema: {
        companyName: fields.text({ label: 'Company Name' }),
        phone: fields.text({ label: 'WhatsApp Number' }),
        email: fields.text({ label: 'Email' }),
        address: fields.text({ label: 'Address', multiline: true }),
        instagram: fields.text({ label: 'Instagram URL' }),
        youtube: fields.text({ label: 'YouTube URL' }),
        tiktok: fields.text({ label: 'TikTok URL' }),
        facebook: fields.text({ label: 'Facebook URL' }),
        mapsEmbed: fields.text({ label: 'Google Maps Embed URL' }),
      },
    }),
  },

  collections: {
    products: collection({
      label: 'Products',
      slugField: 'slug',
      path: 'src/content/products/*',
      schema: {
        slug: fields.text({ label: 'Slug' }),
        nameId: fields.text({ label: 'Name (ID)' }),
        nameEn: fields.text({ label: 'Name (EN)' }),
        taglineId: fields.text({ label: 'Tagline (ID)' }),
        taglineEn: fields.text({ label: 'Tagline (EN)' }),
        descriptionId: fields.markdoc({ label: 'Description (ID)' }),
        descriptionEn: fields.markdoc({ label: 'Description (EN)' }),
        image: fields.text({ label: 'Image Path' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Hulu', value: 'hulu' },
            { label: 'Penghubung', value: 'penghubung' },
            { label: 'Hilir', value: 'hilir' },
            { label: 'Nilai Tambah', value: 'nilaitambah' },
          ],
          defaultValue: 'hulu',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),

    activities: collection({
      label: 'Activities',
      slugField: 'slug',
      path: 'src/content/activities/*',
      schema: {
        slug: fields.text({ label: 'Slug' }),
        titleId: fields.text({ label: 'Title (ID)' }),
        titleEn: fields.text({ label: 'Title (EN)' }),
        summaryId: fields.text({ label: 'Summary (ID)', multiline: true }),
        summaryEn: fields.text({ label: 'Summary (EN)', multiline: true }),
        contentId: fields.markdoc({ label: 'Content (ID)' }),
        contentEn: fields.markdoc({ label: 'Content (EN)' }),
        image: fields.text({ label: 'Image Path' }),
        icon: fields.text({ label: 'Lucide Icon Name' }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),

    team: collection({
      label: 'Team Members',
      slugField: 'slug',
      path: 'src/content/team/*',
      schema: {
        slug: fields.text({ label: 'Slug' }),
        name: fields.text({ label: 'Full Name' }),
        roleId: fields.text({ label: 'Role (ID)' }),
        roleEn: fields.text({ label: 'Role (EN)' }),
        bioId: fields.text({ label: 'Bio (ID)', multiline: true }),
        bioEn: fields.text({ label: 'Bio (EN)', multiline: true }),
        photo: fields.text({ label: 'Photo Path' }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),

    media: collection({
      label: 'Media Coverage',
      slugField: 'slug',
      path: 'src/content/media/*',
      schema: {
        slug: fields.text({ label: 'Slug' }),
        titleId: fields.text({ label: 'Title (ID)' }),
        titleEn: fields.text({ label: 'Title (EN)' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Photo', value: 'photo' },
            { label: 'Video', value: 'video' },
            { label: 'News', value: 'news' },
          ],
          defaultValue: 'news',
        }),
        date: fields.date({ label: 'Date' }),
        source: fields.text({ label: 'Source' }),
        url: fields.text({ label: 'External URL' }),
        thumbnail: fields.text({ label: 'Thumbnail Path' }),
        summaryId: fields.text({ label: 'Summary (ID)', multiline: true }),
        summaryEn: fields.text({ label: 'Summary (EN)', multiline: true }),
      },
    }),

    testimonials: collection({
      label: 'Testimonials',
      slugField: 'slug',
      path: 'src/content/testimonials/*',
      schema: {
        slug: fields.text({ label: 'Slug' }),
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role / Company' }),
        quoteId: fields.text({ label: 'Quote (ID)', multiline: true }),
        quoteEn: fields.text({ label: 'Quote (EN)', multiline: true }),
        avatar: fields.text({ label: 'Avatar Path' }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
  },
});
