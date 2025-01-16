import Link from "next/link"

export default function BlogCard3({ item }) {
    return (
        <>
            <Link href="#">
                <img src={`/assets/images/blog/${item.img}`} alt="img" className="img-fluid" />
            </Link>
            <Link href="#" rel="bookmark">{item.title}</Link>
            <br />

        </>
    )
}
