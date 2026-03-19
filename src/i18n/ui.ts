export const languages = {
  id: 'Bahasa Indonesia',
  en: 'English',
} as const;

export const defaultLang = 'id' as const;

export type Lang = keyof typeof languages;

export const ui = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.activities': 'Kegiatan Kami',
    'nav.blog': 'Blog',
    'nav.contact': 'Hubungi Kami',
    'nav.cta': 'Kolaborasi',

    // Hero
    'hero.title': 'Transformasi Peternakan Domba dengan Inovasi & Keberlanjutan',
    'hero.subtitle': 'Memberdayakan petani kecil, menurunkan emisi, dan menciptakan nilai dari hulu ke hilir.',
    'hero.cta.primary': 'Kolaborasi',
    'hero.cta.secondary': 'Pelajari Lebih Lanjut',
    'hero.scroll': 'Gulir ke bawah',

    // Impact Numbers
    'impact.title': 'Dampak Kami di 2030',
    'impact.subtitle': 'Komitmen nyata untuk peternakan berkelanjutan',
    'impact.methane': 'Penurunan Emisi Metana',
    'impact.productivity': 'Peningkatan Produktivitas',
    'impact.feedcost': 'Pengurangan Biaya Pakan',
    'impact.farmers': 'Peternak Kecil',

    // About
    'about.title': 'Tentang Kami',
    'about.subtitle': 'Membangun ekosistem peternakan domba berkelanjutan',
    'about.description': 'Didirikan pada tahun 2024, PT Mitra Ternak Berkelanjutan adalah perusahaan agribisnis yang berorientasi pada misi membangun ekosistem peternakan domba yang modern, inklusif, dan berkelanjutan di Indonesia.',
    'about.mission': 'Misi kami adalah memberdayakan petani kecil dan generasi muda melalui inovasi, teknologi, dan kemitraan di seluruh rantai nilai peternakan mulai dari pembibitan, pakan, pengelolaan limbah, hingga hilirisasi produk.',
    'about.readmore': 'Selengkapnya',

    // Value Chain
    'valuechain.title': 'Apa yang Kami Lakukan',
    'valuechain.subtitle': 'Ekosistem bisnis terintegrasi dari hulu ke hilir',
    'valuechain.hulu.title': 'Hulu: Pembibitan & Kemitraan',
    'valuechain.hulu.desc': 'Kami menyediakan akses ke bibit domba unggul, menerapkan model kemitraan ternak yang transparan, dan memberikan pendampingan teknis kepada mitra peternak.',
    'valuechain.penghubung.title': 'Penghubung: Pakan & Kesejahteraan Hewan',
    'valuechain.penghubung.desc': 'Program inovasi pakan kami memanfaatkan limbah pertanian lokal seperti batang jagung dan hijauan untuk memproduksi silase, dengan penurunan emisi metana sebesar 27%.',
    'valuechain.hilir.title': 'Hilir: Pemasaran & Inovasi Produk',
    'valuechain.hilir.desc': 'Pemasaran domba melalui timbangan digital dan sistem harga transparan, serta layanan Mitra Bhakti Aqiqah dan Bisa Qurban.',
    'valuechain.nilaitambah.title': 'Nilai Tambah: Pengelolaan Limbah',
    'valuechain.nilaitambah.desc': 'Kami mengolah limbah kotoran domba menjadi dua produk bernilai tinggi: pupuk organik dan briket kotoran untuk mendukung ekonomi sirkular.',

    // Products
    'products.title': 'Produk Kami',
    'products.subtitle': 'Solusi lengkap untuk kebutuhan peternakan Anda',
    'products.viewmore': 'Lihat Detail',

    // SDGs
    'sdgs.title': 'Inovasi & Keberlanjutan',
    'sdgs.subtitle': 'Menyelaraskan bisnis dengan Tujuan Pembangunan Berkelanjutan (SDGs) PBB',
    'sdgs.1.title': 'Tanpa Kemiskinan',
    'sdgs.1.desc': 'Membantu peternak lokal mendapatkan harga jual yang adil melalui sistem timbangan digital, meningkatkan pendapatan hingga 30% di atas harga pasar.',
    'sdgs.8.title': 'Pekerjaan Layak & Pertumbuhan Ekonomi',
    'sdgs.8.desc': 'Menciptakan lapangan kerja di sektor peternakan, memberdayakan generasi muda, dan mendorong pertumbuhan ekonomi pedesaan.',
    'sdgs.12.title': 'Konsumsi & Produksi Bertanggung Jawab',
    'sdgs.12.desc': 'Mengolah limbah peternakan menjadi pupuk organik dan briket, menerapkan praktik peternakan berkelanjutan dari hulu ke hilir.',
    'sdgs.13.title': 'Penanganan Perubahan Iklim',
    'sdgs.13.desc': 'Menurunkan emisi metana 27% melalui inovasi pakan silase dan pengelolaan limbah yang bertanggung jawab.',

    // Media
    'media.title': 'Liputan Media',
    'media.subtitle': 'Mitra Ternak di mata publik',
    'media.readmore': 'Selengkapnya',

    // CTA
    'cta.title': 'Mari Bermitra Bersama Kami',
    'cta.subtitle': 'Bergabunglah dalam membangun masa depan peternakan yang berkelanjutan dan inklusif.',
    'cta.whatsapp': 'Hubungi via WhatsApp',
    'cta.contact': 'Halaman Kontak',

    // Footer
    'footer.description': 'PT Mitra Ternak Berkelanjutan — Solusi bisnis peternakan domba yang berkelanjutan, dari hulu ke hilir.',
    'footer.quicklinks': 'Tautan Cepat',
    'footer.contact': 'Kontak',
    'footer.social': 'Media Sosial',
    'footer.copyright': '© 2025 PT Mitra Ternak Berkelanjutan. Hak cipta dilindungi.',
    'footer.location': 'Tuban, Jawa Timur, Indonesia, 62382',

    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Mari bersama membangun masa depan peternakan yang berkelanjutan dan inklusif.',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Nomor Telepon',
    'contact.form.message': 'Pesan',
    'contact.form.submit': 'Kirim Pesan',

    // About Page
    'aboutpage.title': 'Tentang Mitra Ternak',
    'aboutpage.subtitle': 'Membangun ekosistem peternakan domba berkelanjutan sejak 2024',
    'aboutpage.vision.title': 'Visi',
    'aboutpage.vision.desc': 'Menjadi perusahaan agribisnis peternakan domba terdepan yang berkelanjutan di Indonesia.',
    'aboutpage.mission.title': 'Misi',
    'aboutpage.mission.desc': 'Membangun ekosistem peternakan domba terintegrasi yang memberdayakan petani kecil, menurunkan emisi, dan menciptakan nilai dari hulu ke hilir.',
    'aboutpage.team.title': 'Tim Kami',
    'aboutpage.team.subtitle': 'Orang-orang di balik Mitra Ternak',

    // Activities Page
    'activities.title': 'Kegiatan Kami',
    'activities.subtitle': 'Detail lini bisnis Mitra Ternak',

    // Media Page
    'mediapage.title': 'Media',
    'mediapage.subtitle': 'Galeri foto, video, dan liputan berita',
    'mediapage.tab.photos': 'Foto',
    'mediapage.tab.videos': 'Video',
    'mediapage.tab.news': 'Berita',

    // 404
    '404.title': 'Halaman Tidak Ditemukan',
    '404.description': 'Maaf, halaman yang Anda cari tidak ada.',
    '404.home': 'Kembali ke Beranda',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.activities': 'Our Activities',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    'nav.cta': 'Partner With Us',

    // Hero
    'hero.title': 'Transforming Sheep Farming with Innovation & Sustainability',
    'hero.subtitle': 'Empowering smallholder farmers, reducing emissions, and creating value from upstream to downstream.',
    'hero.cta.primary': 'Collaborate',
    'hero.cta.secondary': 'Learn More',
    'hero.scroll': 'Scroll down',

    // Impact Numbers
    'impact.title': 'Our Impact by 2030',
    'impact.subtitle': 'Real commitment to sustainable farming',
    'impact.methane': 'Methane Emission Reduction',
    'impact.productivity': 'Productivity Increase',
    'impact.feedcost': 'Feed Cost Reduction',
    'impact.farmers': 'Smallholder Farmers',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'Building a sustainable sheep farming ecosystem',
    'about.description': 'Founded in 2024, PT Mitra Ternak Berkelanjutan is an agribusiness company oriented on the mission of building a modern, inclusive, and sustainable sheep farming ecosystem in Indonesia.',
    'about.mission': 'Our mission is to empower smallholder farmers and the younger generation through innovation, technology, and partnerships across the entire farming value chain from breeding, feed, waste management, to product downstream.',
    'about.readmore': 'Read More',

    // Value Chain
    'valuechain.title': 'What We Do',
    'valuechain.subtitle': 'An integrated business ecosystem from upstream to downstream',
    'valuechain.hulu.title': 'Upstream: Breeding & Partnership',
    'valuechain.hulu.desc': 'We provide access to superior sheep breeds, implement transparent farming partnership models, and provide technical assistance to partner farmers.',
    'valuechain.penghubung.title': 'Connector: Feed & Animal Welfare',
    'valuechain.penghubung.desc': 'Our feed innovation program utilizes local agricultural waste such as corn stalks and greens to produce silage, with a 27% reduction in methane emissions.',
    'valuechain.hilir.title': 'Downstream: Marketing & Product Innovation',
    'valuechain.hilir.desc': 'Sheep marketing through digital scales and transparent pricing, plus Mitra Bhakti Aqiqah and Bisa Qurban services.',
    'valuechain.nilaitambah.title': 'Added Value: Waste Management',
    'valuechain.nilaitambah.desc': 'We process sheep manure into two high-value products: organic fertilizer and manure briquettes to support the circular economy.',

    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Complete solutions for your farming needs',
    'products.viewmore': 'View Details',

    // SDGs
    'sdgs.title': 'Innovation & Sustainability',
    'sdgs.subtitle': 'Aligning our business with the UN Sustainable Development Goals (SDGs)',
    'sdgs.1.title': 'No Poverty',
    'sdgs.1.desc': 'Helping local farmers get fair prices through digital weighing systems, increasing income by up to 30% above market price.',
    'sdgs.8.title': 'Decent Work & Economic Growth',
    'sdgs.8.desc': 'Creating jobs in the livestock sector, empowering the younger generation, and driving rural economic growth.',
    'sdgs.12.title': 'Responsible Consumption & Production',
    'sdgs.12.desc': 'Processing farm waste into organic fertilizer and briquettes, implementing sustainable farming practices from upstream to downstream.',
    'sdgs.13.title': 'Climate Action',
    'sdgs.13.desc': 'Reducing methane emissions by 27% through silage feed innovation and responsible waste management.',

    // Media
    'media.title': 'Media Coverage',
    'media.subtitle': 'Mitra Ternak in the public eye',
    'media.readmore': 'Read More',

    // CTA
    'cta.title': 'Partner With Us',
    'cta.subtitle': 'Join us in building a sustainable and inclusive future for farming.',
    'cta.whatsapp': 'Contact via WhatsApp',
    'cta.contact': 'Contact Page',

    // Footer
    'footer.description': 'PT Mitra Ternak Berkelanjutan — Sustainable sheep farming business solutions, from upstream to downstream.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.copyright': '© 2025 PT Mitra Ternak Berkelanjutan. All rights reserved.',
    'footer.location': 'Tuban, East Java, Indonesia, 62382',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s build a sustainable and inclusive future for farming together.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // About Page
    'aboutpage.title': 'About Mitra Ternak',
    'aboutpage.subtitle': 'Building a sustainable sheep farming ecosystem since 2024',
    'aboutpage.vision.title': 'Vision',
    'aboutpage.vision.desc': 'To become the leading sustainable sheep farming agribusiness company in Indonesia.',
    'aboutpage.mission.title': 'Mission',
    'aboutpage.mission.desc': 'Building an integrated sheep farming ecosystem that empowers smallholder farmers, reduces emissions, and creates value from upstream to downstream.',
    'aboutpage.team.title': 'Our Team',
    'aboutpage.team.subtitle': 'The people behind Mitra Ternak',

    // Activities Page
    'activities.title': 'Our Activities',
    'activities.subtitle': 'Mitra Ternak business lines in detail',

    // Media Page
    'mediapage.title': 'Media',
    'mediapage.subtitle': 'Photo gallery, videos, and news coverage',
    'mediapage.tab.photos': 'Photos',
    'mediapage.tab.videos': 'Videos',
    'mediapage.tab.news': 'News',

    // 404
    '404.title': 'Page Not Found',
    '404.description': 'Sorry, the page you are looking for does not exist.',
    '404.home': 'Back to Home',
  },
} as const;

export type UIKey = keyof typeof ui.id;
