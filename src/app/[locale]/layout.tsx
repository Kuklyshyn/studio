import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { GdprBanner } from '@/components/layout/gdpr-banner';


type Props = {
    children: React.ReactNode;
    params: {locale: string};
  };

export default async function LocaleLayout({children, params: { locale } }: Props) {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
             <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body className="font-body antialiased bg-background">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                <Header />
                <main>{children}</main>
                <Footer />
                <Toaster />
                <GdprBanner />
                </ThemeProvider>
            </body>
        </NextIntlClientProvider>
    );
}
