import Link from "next/link";
import { Mountain, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Moder</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Tvoríme moderné webové riešenia, ktoré posúvajú vaše podnikanie vpred. Zameriavame sa na kvalitu, rýchlosť a spokojnosť klienta.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">O nás</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Služby</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Referencie</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Sledujte nás</h3>
             <div className="flex space-x-2">
              <Button asChild variant="ghost" size="icon">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                 <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Moder Web Solutions. Všetky práva vyhradené. | <Link href="/privacy-policy" className="hover:text-primary transition-colors">Zásady ochrany osobných údajov</Link></p>
        </div>
      </div>
    </footer>
  );
}
