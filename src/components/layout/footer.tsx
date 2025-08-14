import Link from "next/link";
import { Mountain, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="font-bold font-headline text-lg">Moder</span>
            </Link>
            <p className="text-sm text-gray-600">
              Moderné webové riešenia pre rast vášho biznisu.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Navigácia</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">O nás</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-primary">Služby</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-primary">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Nástroje</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/proposal-generator" className="text-gray-600 hover:text-primary">AI Proposal Generator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@moder.sk</li>
              <li>Telefón: +421 123 456 789</li>
              <li>Adresa: Ulica 123, Bratislava, Slovensko</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Moder Web Solutions. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
