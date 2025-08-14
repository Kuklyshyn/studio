'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createProposalAction } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  projectDetails: z.string().min(20, 'Project details must be at least 20 characters.'),
  clientIndustry: z.string().min(3, 'Client industry must be at least 3 characters.'),
  desiredOutcomes: z.string().min(20, 'Desired outcomes must be at least 20 characters.'),
});

type FormData = z.infer<typeof formSchema>;

export function ProposalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState('');
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDetails: '',
      clientIndustry: '',
      desiredOutcomes: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setGeneratedProposal('');

    const result = await createProposalAction(data);
    
    setIsLoading(false);
    if (result.success && result.data) {
      setGeneratedProposal(result.data.proposalDraft);
      toast({
        title: "Proposal Generated!",
        description: "Your draft has been successfully created.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.error || 'An unknown error occurred.',
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className='font-headline'>Project Information</CardTitle>
                <CardDescription>Fill in the details below to generate a proposal draft.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="clientIndustry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Client Industry</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Technology, Healthcare, E-commerce" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="projectDetails"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Details</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe the project requirements. e.g., 'Client needs a new 5-page marketing website...'" {...field} rows={5} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="desiredOutcomes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Desired Outcomes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="What does the client want to achieve? e.g., 'Increase online leads by 30%...'" {...field} rows={5} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading} className="w-full">
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                            ) : (
                                <><Sparkles className="mr-2 h-4 w-4" /> Generate Proposal</>
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className='font-headline'>Generated Proposal Draft</CardTitle>
                <CardDescription>The AI-generated draft will appear here. Review and edit as needed.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                        <p className="text-muted-foreground">Generating your proposal...</p>
                    </div>
                )}
                {!isLoading && !generatedProposal && (
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center bg-muted/50 rounded-lg p-8">
                        <Sparkles className="h-10 w-10 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Your generated proposal will be displayed here once you submit the form.</p>
                    </div>
                )}
                {generatedProposal && (
                    <div className="prose prose-sm max-w-none bg-muted/50 p-4 rounded-md whitespace-pre-wrap">
                       {generatedProposal}
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
