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
    'nav.cta': 'Mulai Bermitra',

    // Hero
    'hero.title': 'Transformasi Peternakan Domba dengan Inovasi & Keberlanjutan',
    'hero.subtitle': 'Memberdayakan petani kecil, menurunkan emisi, dan menciptakan nilai dari hulu ke hilir.',
    'hero.cta.primary': 'Mulai Bermitra',
    'hero.cta.secondary': 'Pelajari Lebih Lanjut',
    'hero.scroll': 'Gulir ke bawah',

    // Impact Numbers
    'impact.title': 'Dampak Kami',
    'impact.subtitle': 'Komitmen nyata untuk peternakan berkelanjutan',
    'impact.methane': 'Penurunan Emisi Metana',
    'impact.productivity': 'Peningkatan Produktivitas',
    'impact.feedcost': 'Pengurangan Biaya Pakan',
    'impact.farmers': 'Peternak Mitra',

    // About
    'about.title': 'Tentang Kami',
    'about.subtitle': 'Membangun ekosistem peternakan domba berkelanjutan',
    'about.description': 'Didirikan pada tahun 2024, PT Mitra Ternak Berkelanjutan adalah perusahaan agribisnis yang berorientasi pada misi membangun ekosistem peternakan domba yang terintegrasi. Dengan menggabungkan kearifan lokal dan praktik modern, kami bertujuan meningkatkan kesejahteraan petani, menjamin kesejahteraan hewan, dan mengurangi dampak lingkungan.',
    'about.readmore': 'Selengkapnya',

    // Value Chain
    'valuechain.title': 'Apa yang Kami Lakukan',
    'valuechain.subtitle': 'Ekosistem bisnis terintegrasi dari hulu ke hilir',
    'valuechain.hulu.title': 'Hulu: Pembibitan & Kemitraan',
    'valuechain.hulu.desc': 'Akses ke bibit domba unggul, model kemitraan ternak transparan, dan pendampingan teknis untuk mitra peternak.',
    'valuechain.penghubung.title': 'Penghubung: Pakan & Kesehatan',
    'valuechain.penghubung.desc': 'Inovasi pakan silase dari limbah pertanian dan perlakuan probiotik alami untuk kesehatan ternak optimal.',
    'valuechain.hilir.title': 'Hilir: Pemasaran & Produk',
    'valuechain.hilir.desc': 'Pemasaran domba melalui timbangan digital, sistem harga transparan, dan inovasi produk bernilai tinggi.',
    'valuechain.nilaitambah.title': 'Nilai Tambah: Pengelolaan Limbah',
    'valuechain.nilaitambah.desc': 'Pengolahan limbah peternakan menjadi pupuk organik dan biogas untuk mendukung ekonomi sirkular.',

    // Products
    'products.title': 'Produk Kami',
    'products.subtitle': 'Solusi lengkap untuk kebutuhan peternakan Anda',
    'products.viewmore': 'Lihat Detail',

    // SDGs
    'sdgs.title': 'Inovasi & Keberlanjutan',
    'sdgs.subtitle': 'Menyelaraskan bisnis dengan Tujuan Pembangunan Berkelanjutan (SDGs) PBB',
    'sdgs.1.title': 'Tanpa Kemiskinan',
    'sdgs.1.desc': 'Membantu peternak lokal mendapatkan harga jual yang adil melalui sistem timbangan digital, meningkatkan pendapatan hingga 30% di atas harga pasar.',
    'sdgs.9.title': 'Industri, Inovasi & Infrastruktur',
    'sdgs.9.desc': 'Membangun sistem peternakan berbasis data dan digital, memperkenalkan perdagangan domba berbasis timbangan digital.',
    'sdgs.17.title': 'Kemitraan untuk Tujuan',
    'sdgs.17.desc': 'Berkolaborasi dengan universitas, vokasi, koperasi, dan mitra swasta untuk memperluas dampak sosial.',

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
    'hero.cta.primary': 'Partner With Us',
    'hero.cta.secondary': 'Learn More',
    'hero.scroll': 'Scroll down',

    // Impact Numbers
    'impact.title': 'Our Impact',
    'impact.subtitle': 'Real commitment to sustainable farming',
    'impact.methane': 'Methane Emission Reduction',
    'impact.productivity': 'Productivity Increase',
    'impact.feedcost': 'Feed Cost Reduction',
    'impact.farmers': 'Partner Farmers',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'Building a sustainable sheep farming ecosystem',
    'about.description': 'Founded in 2024, PT Mitra Ternak Berkelanjutan is an agribusiness company focused on building an integrated sheep farming ecosystem. By combining local wisdom with modern practices, we aim to improve farmer welfare, ensure animal wellbeing, and reduce environmental impact.',
    'about.readmore': 'Read More',

    // Value Chain
    'valuechain.title': 'What We Do',
    'valuechain.subtitle': 'An integrated business ecosystem from upstream to downstream',
    'valuechain.hulu.title': 'Upstream: Breeding & Partnership',
    'valuechain.hulu.desc': 'Access to superior sheep breeds, transparent farming partnerships, and technical assistance for partner farmers.',
    'valuechain.penghubung.title': 'Connector: Feed & Health',
    'valuechain.penghubung.desc': 'Silage feed innovation from agricultural waste and natural probiotic treatments for optimal livestock health.',
    'valuechain.hilir.title': 'Downstream: Marketing & Products',
    'valuechain.hilir.desc': 'Sheep marketing through digital scales, transparent pricing systems, and high-value product innovations.',
    'valuechain.nilaitambah.title': 'Added Value: Waste Management',
    'valuechain.nilaitambah.desc': 'Processing farm waste into organic fertilizer and biogas to support the circular economy.',

    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Complete solutions for your farming needs',
    'products.viewmore': 'View Details',

    // SDGs
    'sdgs.title': 'Innovation & Sustainability',
    'sdgs.subtitle': 'Aligning our business with the UN Sustainable Development Goals (SDGs)',
    'sdgs.1.title': 'No Poverty',
    'sdgs.1.desc': 'Helping local farmers get fair prices through digital weighing systems, increasing income by up to 30% above market price.',
    'sdgs.9.title': 'Industry, Innovation & Infrastructure',
    'sdgs.9.desc': 'Building data-driven and digital farming systems, introducing digital scale-based sheep trading.',
    'sdgs.17.title': 'Partnerships for the Goals',
    'sdgs.17.desc': 'Collaborating with universities, vocational schools, cooperatives, and private partners to expand social impact.',

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
