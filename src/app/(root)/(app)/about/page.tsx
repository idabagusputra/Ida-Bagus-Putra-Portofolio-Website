import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dedeard from '@/assets/dedeard.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Ida Bagus Putra',
  openGraph: {
    title: 'About - Ida Bagus Putra',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image
            src={dedeard}
            alt="Foto Ida Bagus Putu Putra Manuaba"
            className="block w-full md:aspect-square md:object-cover"
            placeholder="blur"
          />
        </div>
        <div className="text-justify md:flex-1 md:pl-6">
          <h2 className="mb-1 text-xl font-bold">I’m Ida Bagus Putu Putra Manuaba</h2>
          <h2 className="mb-3 ">Full Stack Web & Internet of Things Developer based in Semarang, Indonesia.</h2>
          <h2 className="mb-3 ">
            A fresh graduate in Computer Engineering from Diponegoro University with a GPA of 3.87, completed in four years (2020-2024). My
            expertise spans hardware and full-stack web development, strengthened through hands-on experience in both academic and
            professional settings. Below is a detailed timeline of my key experiences, showcasing my contributions and growth in various
            roles.
          </h2>

          <div className="">
            <div className="mb-1">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left">Year</th>
                    <th className="p-4 text-left">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="w-32 p-4 text-left align-top font-bold">January 2023 February 2023</td>
                    <td className="p-4 text-justify align-top">
                      During this period, I enhanced my technical foundation through an intensive internship at PUSDATIK KEMNAKER (Ministry
                      of Manpower's Data and Information Technology Center). Here, I developed strong programming fundamentals and
                      collaborative teamwork capabilities in a government technology environment.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="w-32 p-4 text-left align-top font-bold">October 2023 September 2024</td>
                    <td className="p-4 text-justify align-top">
                      I spearheaded the development of a critical safety infrastructure project at PT. Cahyo Sumber Migas, designing and
                      implementing a semi-autonomous LPG leak monitoring system integrated with automated ventilation control. This project
                      highlighted my ability to deliver solutions prioritizing industrial safety while incorporating smart automation
                      principles.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="w-32 p-4 text-left align-top font-bold">June 2024 November 2024</td>
                    <td className="p-4 text-justify align-top">
                      As a Full Stack Developer at UD Penggilingan Padi Putra Manuaba, I architected and deployed a comprehensive ERP system
                      that revolutionized business operations. The system included features such as farmer database management, credit
                      tracking, milling transaction processing, automated thermal receipt generation with customizable templates, an
                      advanced financial reporting module with PDF export capabilities, and real-time inventory management.
                    </td>
                  </tr>
                  <tr>
                    <td className="w-32 p-4 text-left align-top font-bold">August 2024 Present</td>
                    <td className="p-4 text-justify align-top">
                      I currently serve as Head of Hardware Division at PT Lazuardy Inovasi Teknologi, where I lead cross-functional teams
                      in developing integrated electronic systems. My role involves overseeing IoT device development, industrial automation
                      controllers, and monitoring infrastructure using agile methodologies. Additionally, as an IoT Developer, I design and
                      implement real-time data solutions to enhance connectivity and automation across various industrial applications,
                      ensuring compliance with industry standards and best practices.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <h2 className="mb-2 text-xl font-bold">Saya Ida Bagus Putu Putra Manuaba</h2>
          <div className="mb-6">
            <p className="mb-1">
              Full Stack Web Developer berbasis di Makassar, Indonesia.
              <br />
              Saya adalah lulusan baru Teknik Komputer dari Universitas Diponegoro dengan IPK 3,87, menyelesaikan studi dalam waktu empat
              tahun (2020-2024), dan telah memperoleh pengalaman praktis dalam pengembangan perangkat keras dan full-stack. Tugas akhir saya
              berfokus pada perancangan sistem pemantauan kebocoran LPG semi-otonomous dan kendali kipas exhaust untuk keselamatan kebakaran
              di PT. Cahyo Sumber Migas, pengalaman magang saya di Pusat Data dan Teknologi Informasi (PUSDATIK) Kementerian Ketenagakerjaan
              membantu memperkuat keterampilan teknis, pemrograman, dan kerja sama tim saya. Baru-baru ini, saya bekerja sebagai Full Stack
              Developer di UD Penggilingan Padi Putra Manuaba, di mana saya mengembangkan sistem ERP komprehensif yang mencakup manajemen
              data petani, pencatatan kredit, dan transaksi penggilingan. Saat ini, saya menjabat sebagai Kepala Divisi Hardware di
              Lazuardy, memimpin tim lintas fungsi dalam mengembangkan sistem elektronik terintegrasi seperti perangkat IoT, pengendali
              otomasi industri, dan infrastruktur pemantauan, menggunakan metodologi agile yang selaras dengan standar industri. Selain itu,
              sebagai IoT Developer, saya fokus pada perancangan dan implementasi solusi data real-time untuk meningkatkan konektivitas dan
              otomasi. Saya memiliki passion di bidang teknologi dan bersemangat untuk berkontribusi pada proyek-proyek inovatif dalam
              pengembangan perangkat lunak maupun perangkat keras.
              <br />
              <br />
              Dalam peran terakhir saya sebagai Kepala Divisi Hardware di Lazuardy, saya berkesempatan memimpin tim lintas fungsi dalam
              pengembangan berbagai solusi IoT dan sistem otomasi industri menggunakan metodologi agile. Pengalaman berharga lainnya
              termasuk pengembangan sistem ERP komprehensif untuk UD Penggilingan Padi Putra Manuaba yang berhasil meningkatkan efisiensi
              operasional hingga 40%. Sistem ini mencakup manajemen data petani, pencatatan kredit, dan transaksi penggilingan yang
              terintegrasi, memberikan solusi end-to-end untuk proses bisnis klien.
              <br />
              <br />
              Tugas akhir saya berfokus pada perancangan sistem pemantauan kebocoran LPG semi-otonomous untuk PT. Cahyo Sumber Migas. Sistem
              ini menggabungkan sensor presisi tinggi, kontrol otomatis untuk exhaust fan, dan interface monitoring real-time, yang kini
              telah diadopsi sebagai standar keamanan perusahaan. Pengalaman magang di PUSDATIK Kementerian Ketenagakerjaan semakin
              memperkaya pemahaman saya tentang pengembangan sistem informasi skala besar dan standar teknologi pemerintahan.
              <br />
              <br />
              Selama masa studi, saya telah mengasah keahlian teknis dalam pengembangan full-stack dengan berbagai framework modern,
              perancangan dan implementasi sistem IoT untuk monitoring real-time, pengembangan sistem kontrol elektronik, dan integrasi
              sensor. Saya juga memiliki pemahaman yang kuat dalam perancangan arsitektur database dan pengembangan API. Dalam setiap
              proyek, saya menerapkan pendekatan sistematis yang memadukan best practices industri dengan inovasi teknologi terbaru.
              <br />
              <br />
              Sebagai lulusan baru yang antusias dalam bidang teknologi, saya memiliki semangat tinggi untuk terus belajar dan berkembang
              dalam menghadirkan solusi teknologi yang inovatif. Pengalaman dalam memimpin tim proyek selama kuliah dan magang telah
              membangun fondasi yang kuat dalam kemampuan kolaborasi dan manajemen proyek. Saya siap untuk berkontribusi dan mengaplikasikan
              pengetahuan serta keterampilan yang saya miliki dalam mengembangkan solusi teknologi yang memberikan dampak positif bagi
              industri.
            </p>
          </div> */}
          <h2 className="mb-1 mt-3 text-xl font-bold">Technologies I Specialize In</h2>
          <div className="mb-6">
            <p className="mb-1">Laravel (PHP), Bootstrap, Next.js, Tailwind, TypeScript, Express.js, Vue, and React.</p>
          </div>
          <div className="flex justify-between">
            <a
              download
              target="_blank"
              rel="nofollow"
              href={RESUME_URL}
              className="mb-4 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
            >
              Resume
            </a>
            <Link
              href="/contact"
              rel="nofollow"
              className="mb-4 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
