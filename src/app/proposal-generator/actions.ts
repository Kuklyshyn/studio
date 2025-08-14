'use server';

import { generateProposalDraft, GenerateProposalDraftInput } from '@/ai/flows/generate-proposal-draft';

export async function createProposalAction(input: GenerateProposalDraftInput) {
  try {
    const result = await generateProposalDraft(input);
    if (!result.proposalDraft) {
        return { success: false, error: 'AI failed to generate a proposal. Please check the input and try again.' };
    }
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'An unexpected error occurred while generating the proposal.' };
  }
}
