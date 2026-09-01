//src/app/courses/[courseId]/materials/[materialId]/page.tsx
import Link from "next/link";

type Props = {
    params: {
        courseId: string;
        materialId: string;
    };
};

export default function CourseMaterial({ params }: Props) {
    return (
        <main>
            <h1>Melihat materi {params.materialId} untuk mata pelajaran {params.courseId}</h1>
            <br />
            <Link href="/">Kembali ke Beranda</Link>
        </main>
    );
}