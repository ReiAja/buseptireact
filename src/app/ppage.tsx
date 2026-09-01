//src/app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <nav>
                <ul>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/blogs/first">Blogs First</Link></li>
                    <li><Link href="/blogs/second">Blogs Second</Link></li>
                    <li><Link href="/blogs/1">Blog 1</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/products/1">Product 1</Link></li>
                    <li><Link href="/products/1/reviews/1">Product 1 Review 1</Link></li>
                </ul>
            </nav>
        </div>
    );
}
