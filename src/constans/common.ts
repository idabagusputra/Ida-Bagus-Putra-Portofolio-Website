import { FiHome, FiGlobe, FiClipboard, FiMail, FiUser, FiBookOpen } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/idabagusputra',
  IG: 'https://www.instagram.com/ida.bagus.putra',
  IN: 'https://www.linkedin.com/in/ida-bagus-putu-putra-manuaba/',
  WA: 'https://wa.me/6282260773867',
}

export const RESUME_URL = 'https://www.papermark.io/view/cm3va9cwq0001xxwyqqbulso0'

export const FORMSPREE_KEY = 'mldewnld'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBjqJXbSl51S07e4mTyQkL9gYhKRlF_wAE',
  authDomain: 'idabagusputra-portofolio.firebaseapp.com',
  projectId: 'idabagusputra-portofolio',
  storageBucket: 'idabagusputra-portofolio.firebasestorage.app',
  messagingSenderId: '1063414237555',
  appId: '1:1063414237555:web:f572f9a249e47ec12edd06',
  measurementId: 'G-S1GD55X756',
}
