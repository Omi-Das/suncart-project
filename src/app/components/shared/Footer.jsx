import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-8">

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Contact
          </h2>

          <p>Email: support@suncart.com</p>
          <p>Phone: +880123456789</p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Social Links
          </h2>

          <div className="flex flex-col gap-2">
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
          </div>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Privacy
          </h2>

          <Link href="/">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}