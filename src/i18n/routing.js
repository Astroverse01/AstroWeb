import {defineRouting} from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hi', 'gu', 'kn', 'ml', 'mr', 'ta', 'te'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: true,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);