import type { Metadata } from 'next'
import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import ContactForm from './components/ContactForm'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Contact - Ida Bagus Putra',
  openGraph: {
    title: 'Contact - Ida Bagus Putra',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Informasi Kontak */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-bold">Temporary Address</h2>
            <p className="text-sm leading-5">
              Jalan Tanjung Sari No. 5, RT.10/RW.02, Sumurboto, Banyumanik, Kota Semarang, Jawa Tengah.
              <br />
              50269
            </p>
          </div>
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-bold">Email Address</h2>
            <p className="text-sm leading-5">
              <a href="mailto:ibp.putra.m@gmail.com" rel="noopener" className="hover:text-yellow-600">
                ibp.putra.m@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-bold">Mobile Phone</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href="tel:+6282260773867" target="_blank" rel="noopener" className="hover:text-yellow-600">
                +62 822-6077-3867
              </a>
              <br />
              <span>WhatsApp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +62 822-6077-3867
              </a>
            </p>
          </div>
        </div>

        {/* Formulir Kontak */}
        <div className="lg:col-span-2">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
