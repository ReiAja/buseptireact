//src/app/blogs/page.tsx
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Halaman Guru</h1>
            <ul>
                <li><Link href="/blogs/first">First Blog</Link></li>
                <li><Link href="/blogs/second">Second Blog</Link></li>
                <li><Link href="/blogs/1">Blog 1</Link></li>
            </ul>
            <br />
            <Link href="/">Back to Home</Link>
        </div>
    );
}