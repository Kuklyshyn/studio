import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Kontaktujte nás
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Máte otázku alebo projekt? Sme tu pre vás. Požiadajte o nezáväznú cenovú ponuku.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6">Napíšte nám</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Meno</Label>
                    <Input id="firstName" placeholder="Ján" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Priezvisko</Label>
                    <Input id="lastName" placeholder="Mrkvička" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jan.mrvicka@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Vaša správa</Label>
                  <Textarea id="message" placeholder="Dobrý deň, mal by som záujem o..." rows={5} />
                </div>
                <Button type="submit" size="lg">Odoslať správu</Button>
              </form>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold mb-6">Kontaktné informácie</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>info@moder.sk</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>+421 123 456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Ulica 123, 811 01 Bratislava, Slovensko</span>
                </div>
              </div>
              <div className="aspect-video w-full bg-gray-200 rounded-lg shadow-md">
                {/* Placeholder for map */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
