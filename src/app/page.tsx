import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MapPin, BookOpen, Users, ArrowRight, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 font-sans text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/detail-alumni-bg.png"
          alt="Latar Belakang Detail Alumni"
          className="h-full w-full object-cover brightness-[0.3] blur-sm"
          fill={true}
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="z-10 container mx-auto px-4 py-12 md:py-24 flex flex-col items-center gap-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-md border border-white/10">
            <Building2 className="w-4 h-4" />
            <span>Pusat Layanan Pembiayaan Pendidikan</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Layanan Informasi Digital <span className="text-blue-400">Puslapdik</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Asisten virtual cerdas yang siap membantu Anda memahami informasi program beasiswa dan bantuan pemerintah secara akurat dan responsif.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Card 1: ADEM */}
          <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg group-hover:scale-110 transition-transform">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">Program ADEM</h2>
            <p className="text-zinc-300 mb-6 flex-grow">
              Afirmasi Pendidikan Menengah untuk siswa dari wilayah Papua, Daerah Khusus (3T), dan Repatriasi (Anak PMI).
            </p>

            <div className="space-y-3 mb-8">
              <FeatureItem text="Cek Kuota & Syarat Seleksi (Papua/3T)" />
              <FeatureItem text="Panduan Tiket Penjemputan & Pemulangan" />
              <FeatureItem text="Info Dana Bantuan & Sanksi Disiplin" />
            </div>

            <Link 
              href="/adem" 
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3.5 font-semibold transition-all hover:bg-emerald-50 hover:gap-3"
            >
              Tanya ADEM
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 2: Beasiswa Unggulan */}
          <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">Beasiswa Unggulan</h2>
            <p className="text-zinc-300 mb-6 flex-grow">
              Beasiswa jenjang S1, S2, dan S3 untuk Masyarakat Berprestasi, Pegawai Kemendikdasmen, dan Penyandang Disabilitas.
            </p>

            <div className="space-y-3 mb-8">
              <FeatureItem text="Syarat IPK, Usia & Dokumen Essay" />
              <FeatureItem text="Rincian Komponen Dana (UKT/Biaya Hidup)" />
              <FeatureItem text="Aturan Tugas Belajar (PNS) & Sanksi" />
            </div>

            <Link 
              href="/bu" 
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3.5 font-semibold transition-all hover:bg-blue-50 hover:gap-3"
            >
              Tanya Beasiswa Unggulan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center text-sm text-white/40">
          <p>© 2025 Kementerian Pendidikan Dasar dan Menengah. Referensi: Pedoman ADEM & BU 2025.</p>
        </div>
      </div>
    </div>
  );
}

// Simple Helper Component for list items
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-sm text-zinc-200">
      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}