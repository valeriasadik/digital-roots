import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-neutral-900">
              Digital Roots
            </h3>
            <p className="text-neutral-600 text-sm">
              Connecting rural communities with technology for sustainable
              development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/towns"
                  className="hover:text-green-900 transition-colors"
                >
                  Towns
                </Link>
              </li>
              <li>
                <Link
                  href="/communities"
                  className="hover:text-green-900 transition-colors"
                >
                  Communities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-900">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a
                  href="https://github.com/valeriasadik/digital-roots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; 2025 Digital Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
