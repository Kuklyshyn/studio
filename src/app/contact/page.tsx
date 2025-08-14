import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
            Kontaktujte nás
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Máte projekt alebo nápad? Napíšte nám a spoločne ho premeníme na realitu.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-bold mb-6">Napíšte nám</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vaše Meno</Label>
                    <Input id="name" placeholder="Ján Mrkvička" className="bg-secondary/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Váš Email</Label>
                    <Input id="email" type="email" placeholder="jan.mrvicka@example.com" className="bg-secondary/50 border-border/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Predmet správy</Label>
                  <Input id="subject" placeholder="Napr. Cenová ponuka na web" className="bg-secondary/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Vaša správa</Label>
                  <Textarea id="message" placeholder="Dobrý deň, mal by som záujem o..." rows={5} className="bg-secondary/50 border-border/50" />
                </div>
                <Button type="submit" size="lg" className="rounded-full font-semibold">Odoslať správu</Button>
              </form>
            </div>
            <div className="space-y-8 bg-secondary/30 p-8 rounded-lg">
              <h2 className="font-headline text-3xl font-bold">Kontaktné info</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@moder.sk" className="text-muted-foreground hover:text-primary transition-colors">info@moder.sk</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Telefón</h3>
                    <a href="tel:+421123456789" className="text-muted-foreground hover:text-primary transition-colors">+421 123 456 789</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Adresa</h3>
                    <p className="text-muted-foreground">Ulica 123, 811 01 Bratislava, Slovensko</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
