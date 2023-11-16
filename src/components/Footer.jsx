'use client'
import { usePathname } from 'next/navigation'


export default function Footer() {
    const pathname = usePathname();

    const isSegurosOrVistoria = pathname === '/seguros' || pathname === '/vistoria' || pathname === '/consumir';

    return isSegurosOrVistoria ? (
        <footer>
            FIAP - Sprint 2 - Responsive Web Development
        </footer>
    ) : null;
}