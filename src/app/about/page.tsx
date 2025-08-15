import { Check } from "lucide-react";
import Image from "next/image";

const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "https://placehold.co/400x400.png", hint: "man portrait professional" },
    { name: "Jane Smith", role: "Lead Designer", image: "https://placehold.co/400x400.png", hint: "woman smiling" },
    { name: "Mike Johnson", role: "Lead Developer", image: "https://placehold.co/400x400.png", hint: "man glasses" },
]

const values = [
    "Kvalita a precíznosť",
    "Inovácie a moderné technológie",
    "Férový a transparentný prístup",
    "Spokojnosť klienta na prvom mieste",
    "Dlhodobé partnerstvá",
    "Vášeň pre digitálny svet"
]

export default function AboutPage() {
    return (
        <>
            <section className="py-20 md:py-32 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
                        Kto sme?
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Sme tím kreatívnych profesionálov, ktorých spája vášeň pre moderné technológie a zmysel pre detail.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="https://placehold.co/800x600.png" alt="Our Story" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="people discussing work" />
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Náš príbeh</h2>
                            <p className="text-muted-foreground mb-4 text-lg">
                                Naša cesta začala v roku 2020 s jednoduchou víziou: tvoriť weby, ktoré nielen dobre vyzerajú, ale hlavne prinášajú výsledky. Veríme, že úspešný web je kombináciou pútavého dizajnu, bezchybného kódu a premyslenej marketingovej stratégie.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Dnes sme hrdí na to, že sme pomohli desiatkam klientov naštartovať alebo posunúť ich online podnikanie. Každý projekt je pre nás novou výzvou, ku ktorej pristupujeme s nadšením a odhodlaním.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Naše hodnoty</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                             <Image src="https://placehold.co/800x600.png" alt="Our Values" width={800} height={600} className="rounded-lg shadow-2xl" data-ai-hint="abstract shapes" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
                        Náš tím
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-lg">
                                    <Image src={member.image} alt={member.name} width={400} height={400} data-ai-hint={member.hint} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h3 className="font-bold text-xl">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}