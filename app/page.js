import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            {/* 标题 */}
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Web2 Assignment
            </h1>

            {/* 作业链接列表 */}
            <ul className="w-full max-w-md space-y-4">
                <li>
                    <Link
                        href="/week-2"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 2 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-3"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 3 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-4"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 4 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-5"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 5 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-6"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 6 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-7"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 7 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-8"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 8 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-9"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 9 Assignment
                    </Link>
                </li>
                <li>
                    <Link
                        href="/week-10"
                        className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-lg text-blue-600 font-medium text-center"
                    >
                        Week 10 Assignment
                    </Link>
                </li>
            </ul>
        </main>
    );
}
