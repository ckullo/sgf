// PT Sano Gratia Farma Company Profile Content
// Informasi resmi perusahaan berdasarkan dokumentasi korporat

export const companyInfo = {
  name: "PT Sano Gratia Farma",
  tagline: "Mitra Terpercaya Anda dalam Solusi Kesehatan",
  description: "PT Sano Gratia Farma memulai pendistribusian produk perdana di bulan September 2017 dengan produk Salep Krim Pi Kang Shuang 5gr, sampai saat ini kami telah memasarkan produk TKS dan Solvopain di Indonesia.",
  established: "2017",
  certifications: [
    "Tersertifikasi BPOM",
    "Tersertifikasi Halal MUI",
    "Tersertifikasi Halal BPJPH",
    "Tersertifikasi TKDN",
    "Tersertifikasi CPOB"
  ],
  
  contact: {
    address: {
      street: "Jalan East Boulevard Blok E no.3 Kawasan JABABEKA VI",
      area: "Desa Jatireja Kec. Cikarang Timur",
      city: "Bekasi",
      province: "Jawa Barat",
      postalCode: "17530",
      country: "Indonesia"
    },
    phone: "+62-21-8932-3051",
    fax: "+62-21-8932-3052",
    email: "Sales@sanogratiafarma.com",
    businessHours: {
      weekdays: "08:00 - 17:00",
      saturday: "08:00 - 12:00",
      sunday: "Tutup"
    }
  },
  
  socialMedia: {
    facebook: "https://facebook.com/sanogratiafarma",
    instagram: "https://instagram.com/sanogratiafarma",
    linkedin: "https://linkedin.com/company/sanogratiafarma"
  }
}

export const aboutContent = {
  vision: "Menjadi Perusahaan Farmasi terbaik yang mampu memberikan kontribusi positif bagi masyarakat dalam penyediaan produk kesehatan.",
  
  mission: "Menghasilkan produk kesehatan yang efektif, terjangkau agar masyarakat mendapat kemudahan untuk hidup yang lebih sehat dan berkualitas.",
  
  story: {
    paragraph1: "PT Sano Gratia Farma memulai perjalanannya dengan distribusi produk perdana di bulan September 2017. Dengan komitmen kuat terhadap kualitas dan kesehatan masyarakat, kami telah berkembang menjadi perusahaan farmasi terpercaya di Indonesia.",
    paragraph2: "Kami bangga telah mendapatkan berbagai sertifikasi termasuk Halal MUI, BPOM, dan CPOB, yang menunjukkan dedikasi kami terhadap standar kualitas tertinggi dalam industri farmasi."
  },
  
  values: [
    {
      title: "Kualitas",
      description: "Komitmen terhadap standar kualitas tertinggi dalam setiap produk"
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi untuk menghadirkan solusi kesehatan terbaik"
    },
    {
      title: "Integritas",
      description: "Menjalankan bisnis dengan etika dan transparansi penuh"
    },
    {
      title: "Peduli",
      description: "Mengutamakan kesehatan dan kesejahteraan masyarakat"
    }
  ],
  
  achievements: [
    "Sertifikasi Halal MUI Grade A (Sangat Baik)",
    "Terdaftar BPOM untuk semua produk",
    "37+ karyawan profesional",
    "22+ distributor nasional",
    "Fasilitas produksi berstandar CPOB",
    "Sertifikasi TKDN"
  ]
}

export const milestones = [
  {
    year: "2013",
    title: "Pendirian Perusahaan",
    description: "Perusahaan berdiri, dimulai dengan 2 karyawan"
  },
  {
    year: "2013-2017",
    title: "Pembangunan Pabrik",
    description: "Pembangunan Pabrik & implementasi CPOB"
  },
  {
    year: "2017",
    title: "Distribusi Perdana",
    description: "Pertama kali distribusi produk Pi Kang Shuang"
  },
  {
    year: "2019",
    title: "Peluncuran TKS",
    description: "Peluncuran produk Tong Kang Shuang"
  },
  {
    year: "2020",
    title: "Peluncuran Solvopain",
    description: "Memperkenalkan produk Solvopain ke pasar"
  },
  {
    year: "2021",
    title: "Sertifikasi Halal",
    description: "Mendapatkan Sertifikasi Halal MUI dengan Grade A"
  },
  {
    year: "2022",
    title: "Ekspansi Bisnis",
    description: "Total Karyawan: 37, Total Distributor: 22"
  },
  {
    year: "2023",
    title: "Perubahan Merek TKS",
    description: "Perubahan nama produk Tong Kang Shuang menjadi TKS"
  }
]

export const products = [
  {
    id: 1,
    name: "Krim Pi Kang Shuang",
    category: "Obat Keras",
    size: "5 gram",
    regNumber: "DKL1842200229A1",
    price: "Rp 16.900",
    image: "/images/pikang.jpg",
    description: "Krim untuk kesehatan kulit dengan formula original",
    composition: [
      "Triamcinolone Acetonide Acetate 1 mg",
      "Miconazole Nitrate 10 mg",
      "Neomycin Sulfate 4.6 mg"
    ],
    packaging: "Dus, Tube @ 5 gram",
    boxContent: "1 karton (40 Pak @30 tube, 1200 tube)",
    features: [
      "Produk original PT Sano Gratia Farma",
      "Terdaftar BPOM sejak 30 Mei 2019",
      "Halal MUI Grade A (Sangat Baik/Excellent)",
      "Ketetapan Halal MUI Nomor LPPOM-00140130691021"
    ]
  },
  {
    id: 2,
    name: "TKS Krim Anti Jamur",
    category: "Obat Bebas Terbatas",
    size: "10 gram",
    regNumber: "DTL1842200129A1",
    price: "Rp 17.500",
    image: "/images/tks.jpg",
    description: "Krim anti jamur dengan Ketoconazole untuk berbagai infeksi kulit",
    composition: [
      "Ketoconazole 20mg/g (2%)"
    ],
    packaging: "Dus, Tube @ 10 gram",
    boxContent: "1 karton (40 Pak @20 tube, 800 tube)",
    indications: [
      "Tinea corporis",
      "Tinea cruris",
      "Tinea manus",
      "Tinea pedis",
      "Kandidosis kutis",
      "Tinea (pityriasis) versicolor"
    ],
    pharmacology: "Ketoconazole adalah derivat imidazole-dioxolan sintetis dengan aktivitas antimikotik poten terhadap dermatofit dan ragi. Bekerja dengan menghambat cytochrome P450 jamur, mengganggu sintesa ergosterol yang merupakan komponen penting membran sel jamur."
  },
  {
    id: 3,
    name: "Solvopain Krim",
    category: "Obat Bebas",
    size: "10 gram",
    regNumber: "QD171715591",
    price: "Rp 17.900",
    image: "/images/solvopain.jpg",
    description: "Krim pereda nyeri untuk nyeri sendi dan otot",
    composition: [
      "Methyl Salicylate 102 mg",
      "Menthol 54.4 mg",
      "Eugenol 13.6 mg"
    ],
    packaging: "Dus, Tube @ 10 gram",
    boxContent: "1 karton (20 Pak @20 tube, 400 tube)",
    indications: [
      "Nyeri sendi",
      "Keseleo",
      "Reumatik",
      "Pegal linu",
      "Nyeri otot punggung, leher, dan kaki"
    ],
    sideEffects: "Urtikaria, reaksi hipersensitif, rasa panas dan kemerahan"
  }
]

export const certifications = [
  {
    name: "BPOM Registration",
    description: "Semua produk terdaftar resmi di BPOM",
    verifyUrl: "https://cekbpom.pom.go.id",
    icon: "🏥"
  },
  {
    name: "Halal MUI",
    description: "Sertifikasi Halal MUI dengan Grade A (Sangat Baik/Excellent)",
    certificateNumber: "LPPOM-00140130691021",
    date: "12 November 2021",
    verifyUrl: "https://halalmui.org/search-product",
    icon: "🕌"
  },
  {
    name: "BPJPH Halal",
    description: "Sertifikasi Halal dari BPJPH",
    icon: "✅"
  },
  {
    name: "CPOB",
    description: "Cara Pembuatan Obat yang Baik",
    icon: "🏭"
  },
  {
    name: "TKDN",
    description: "Tingkat Komponen Dalam Negeri",
    icon: "🇮🇩"
  }
]

export const manufacturingFacility = {
  title: "Fasilitas Produksi Modern",
  description: "Pabrik kami berlokasi di kawasan industri JABABEKA VI dengan standar CPOB",
  features: [
    "Fasilitas produksi berstandar CPOB",
    "Teknologi modern untuk produksi krim farmasi",
    "Quality control ketat di setiap tahap produksi",
    "Laboratorium in-house untuk pengujian kualitas",
    "Sistem manajemen kualitas terintegrasi",
    "Area produksi steril dan terkontrol"
  ],
  images: [
    "/images/facility1.jpg",
    "/images/facility2.jpg",
    "/images/facility3.jpg"
  ],
  location: "Kawasan Industri JABABEKA VI, Cikarang Timur, Bekasi"
}

export const distributors = {
  total: 22,
  coverage: "Seluruh Indonesia",
  description: "Dengan jaringan 22+ distributor di seluruh Indonesia, kami memastikan produk-produk berkualitas kami dapat dijangkau oleh masyarakat di berbagai daerah."
}

export const teamInfo = {
  totalEmployees: 37,
  departments: [
    "Produksi",
    "Quality Control",
    "Research & Development",
    "Sales & Marketing",
    "Distribusi",
    "Administrasi"
  ]
}

// For backward compatibility with existing components
export const servicesContent = products.map(product => ({
  title: product.name,
  description: product.description,
  features: product.composition || product.indications || [],
  icon: product.category === "Obat Keras" ? "💊" : product.category === "Obat Bebas Terbatas" ? "🔬" : "🌿"
}))

export const portfolioProjects = milestones.map(milestone => ({
  title: milestone.title,
  category: "milestone",
  description: milestone.description,
  year: milestone.year,
  client: "PT Sano Gratia Farma"
}))

export const clientsList = [
  "Apotek K24",
  "Kimia Farma",
  "Guardian",
  "Century",
  "Watson",
  "Apotek Roxy",
  "Rumah Sakit Nasional",
  "Klinik-klinik Kesehatan",
  "Distributor Farmasi Nasional"
]

export const testimonials = [
  {
    name: "Dr. Andika Pratama",
    position: "Dokter Spesialis Kulit",
    organization: "RS Premier Jakarta",
    content: "Produk Pi Kang Shuang dari PT Sano Gratia Farma sangat efektif untuk pasien dengan masalah kulit. Kualitasnya konsisten dan terpercaya.",
    rating: 5
  },
  {
    name: "Apt. Siti Nurhaliza",
    position: "Apoteker",
    organization: "Apotek K24",
    content: "Kami sangat puas dengan produk dan layanan dari PT Sano Gratia Farma. Pengiriman selalu tepat waktu dan produk berkualitas tinggi.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    position: "Distributor",
    organization: "PT Anugrah Pharmindo",
    content: "Kerjasama dengan PT Sano Gratia Farma sangat profesional. Produk mereka memiliki demand tinggi di pasar.",
    rating: 5
  }
]

export const teamMembers = [
  {
    name: "Management Team",
    position: "Executive Leadership",
    bio: "Tim manajemen berpengalaman dalam industri farmasi",
    expertise: ["Strategic Planning", "Business Development", "Quality Management"]
  },
  {
    name: "Production Team",
    position: "Manufacturing Excellence",
    bio: "Tim produksi terlatih dengan standar CPOB",
    expertise: ["CPOB Standards", "Quality Control", "Production Efficiency"]
  },
  {
    name: "R&D Team",
    position: "Research & Development",
    bio: "Tim riset untuk pengembangan produk inovatif",
    expertise: ["Product Development", "Formulation", "Clinical Research"]
  }
]

// Export all content as a single object for convenience
export default {
  companyInfo,
  aboutContent,
  milestones,
  products,
  certifications,
  manufacturingFacility,
  distributors,
  teamInfo,
  servicesContent,
  portfolioProjects,
  clientsList,
  testimonials,
  teamMembers
}