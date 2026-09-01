//src/app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Selamat datang di Portal Sekolah</h1>
            <nav>
                <ul>
                    <li><Link href="/teachers/budi">Daftar Guru</Link></li>
                    <li><Link href="/library">Perpustakaan</Link></li>
                </ul>
            </nav>
        </div>
    );
}