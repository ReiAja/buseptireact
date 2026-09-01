//src/app/teachers/[teacherId]/page.tsx
import Link from "next/link";

type Props = {
    params: {
        teacherId: string;
    };
};

export default function TeacherProfile({ params }: Props) {
    return (
        <div>
            <h1>Melihat Profil Akademik untuk Guru: {params.teacherId}</h1>
            <br />
            <Link href="/">Kembali ke Beranda</Link>
        </div>
    );
}