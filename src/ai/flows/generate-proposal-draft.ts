'use server';

/**
 * @fileOverview An AI agent for generating draft proposals.
 *
 * - generateProposalDraft - A function that generates a proposal draft.
 * - GenerateProposalDraftInput - The input type for the generateProposalDraft function.
 * - GenerateProposalDraftOutput - The return type for the generateProposalDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProposalDraftInputSchema = z.object({
  projectDetails: z
    .string()
    .describe('Detailed description of the project requirements.'),
  clientIndustry: z.string().describe('The industry of the client.'),
  desiredOutcomes: z
    .string()
    .describe('Specific outcomes the client hopes to achieve.'),
});
export type GenerateProposalDraftInput = z.infer<typeof GenerateProposalDraftInputSchema>;

const GenerateProposalDraftOutputSchema = z.object({
  proposalDraft: z.string().describe('The generated draft proposal text.'),
});
export type GenerateProposalDraftOutput = z.infer<typeof GenerateProposalDraftOutputSchema>;

export async function generateProposalDraft(
  input: GenerateProposalDraftInput
): Promise<GenerateProposalDraftOutput> {
  return generateProposalDraftFlow(input);
}

const generateProposalDraftPrompt = ai.definePrompt({
  name: 'generateProposalDraftPrompt',
  input: {schema: GenerateProposalDraftInputSchema},
  output: {schema: GenerateProposalDraftOutputSchema},
  prompt: `You are an expert proposal writer for a web development and marketing agency named Moder.
Your task is to generate a draft proposal based on the client's needs and desired outcomes.

Client Industry: {{{clientIndustry}}}
Project Details: {{{projectDetails}}}
Desired Outcomes: {{{desiredOutcomes}}}

Write a compelling and professional proposal draft that outlines how Moder can help the client achieve their goals.`,
});

const generateProposalDraftFlow = ai.defineFlow(
  {
    name: 'generateProposalDraftFlow',
    inputSchema: GenerateProposalDraftInputSchema,
    outputSchema: GenerateProposalDraftOutputSchema,
  },
  async input => {
    const {output} = await generateProposalDraftPrompt(input);
    return output!;
  }
);
