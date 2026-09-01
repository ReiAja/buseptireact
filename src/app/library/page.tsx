//src/app/library/page.tsx
import Link from "next/link";

export default function Library() {
    return (
        <div>
            <h1>Daftar Genre Buku</h1>
            <ul>
                <li>Fiksi</li>
                <li>Sains</li>
                <li>Sejarah</li>
            </ul>
            <br />
            <Link href="/">Kembali ke Beranda</Link>
        </div>
    );
}