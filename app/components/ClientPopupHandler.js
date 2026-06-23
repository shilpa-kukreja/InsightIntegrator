'use client';

import { usePathname } from 'next/navigation';
import ContactPopup from './landingcomponents/ContactPopup';

export default function ClientPopupHandler() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact'; // or pathname.startsWith('/contact') if needed

  // Render the popup only if NOT on the contact page
  return !isContactPage ? <ContactPopup /> : null;
}