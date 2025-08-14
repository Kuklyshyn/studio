import { ProposalForm } from "./proposal-form";
import { Lightbulb } from 'lucide-react';

export default function ProposalGeneratorPage() {
  return (
    <>
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
            <Lightbulb className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            AI Proposal Generator
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Vygenerujte si prvý návrh ponuky pre klienta pomocou umelej inteligencie. Zadajte základné informácie o projekte a získajte profesionálny textový základ.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <ProposalForm />
        </div>
      </section>
    </>
  );
}
