import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "https://placehold.co/400x400.png", hint: "man portrait professional" },
    { name: "Jane Smith", role: "Lead Designer", image: "https://placehold.co/400x400.png", hint: "woman smiling" },
    { name: "Mike Johnson", role: "Lead Developer", image: "https://placehold.co/400x400.png", hint: "man glasses" },
    { name: "Emily Brown", role: "Marketing Specialist", image: "https://placehold.co/400x400.png", hint: "woman professional portrait" },
    { name: "Chris Green", role: "Project Manager", image: "https://placehold.co/400x400.png", hint: "man professional" },
]

export default function AboutPage() {
    return (
        <>
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        O nás
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
                        Sme tím kreatívnych profesionálov, ktorí sa venujú tvorbe výnimočných digitálnych zážitkov.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://placehold.co/800x600.png" alt="Our Team" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="office people collaborating" />
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl font-bold mb-4">Naša misia</h2>
                            <p className="text-gray-600 mb-4">
                                Našou misiou je pomáhať firmám rásť v digitálnom svete prostredníctvom inovatívnych a efektívnych webových a marketingových riešení. Veríme v silu dobrého dizajnu, robustného vývoja a inteligentného marketingu.
                            </p>
                            <h2 className="font-headline text-3xl font-bold mb-4 mt-8">Naše hodnoty</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Partnerstvo:</strong> Budujeme silné vzťahy s našimi klientmi.</li>
                                <li><strong>Kvalita:</strong> Dodávame iba prácu najvyššej kvality.</li>
                                <li><strong>Inovácia:</strong> Neustále hľadáme nové a lepšie spôsoby riešenia problémov.</li>
                                <li><strong>Transparentnosť:</strong> Komunikujeme otvorene a čestne.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
                        Náš tím
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                </Avatar>
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
