import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center">
            <ul className="flex justify-center items-center p-2 rounded-full w-96 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 bg-400% animate-bg-gradient-slow-4">
                <li>
                    <Link className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white transition duration-300 hover:bg-indigo-500  " href="/">
                        Home
                    </Link>
                </li>
            </ul>
        </header>

    )
}