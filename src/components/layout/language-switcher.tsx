'use client';

import {useLocale, useTranslations} from 'next-intl';
import { useRouter, usePathname, locales } from '@/i18n';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (value: string) => {
    router.replace(pathname, {locale: value});
  };

  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
        <SelectTrigger className="w-[80px]" aria-label={t("switchLanguage")}>
            <SelectValue placeholder="Lang" />
        </SelectTrigger>
        <SelectContent>
            {locales.map((cur) => (
                <SelectItem key={cur} value={cur}>{cur.toLocaleUpperCase()}</SelectItem>
            ))}
        </SelectContent>
    </Select>
  );
}
