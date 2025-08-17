
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n';
import { Cookie } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function GdprBanner() {
    const t = useTranslations("Gdpr");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('gdpr-consent');
        if (!consent) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gdpr-consent', 'true');
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-secondary/95 backdrop-blur-sm border-t border-border/50 p-4 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Cookie className="h-8 w-8 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                        {t('text')}{' '}
                        <Link href="/privacy-policy" className="underline hover:text-primary">{t('privacy-policy')}</Link>.
                    </p>
                </div>
                <Button onClick={handleAccept} className="rounded-full font-semibold">{t('agree')}</Button>
            </div>
        </div>
    );
}

    