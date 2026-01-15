'use client'

import Link from 'next/link'
import { PHONE_HREF } from '@/lib/constants'
import { trackPhoneClick } from '@/lib/analytics'

interface TrackedPhoneLinkProps {
    /** Where on the site this link appears (for analytics) */
    location: string
    /** The content to render inside the link */
    children: React.ReactNode
    /** Optional className to apply to the Link */
    className?: string
}

/**
 * A phone link that automatically tracks clicks to GTM.
 * Use this instead of raw `<Link href={PHONE_HREF}>` throughout the site.
 */
export function TrackedPhoneLink({ location, children, className }: TrackedPhoneLinkProps) {
    const handleClick = () => {
        trackPhoneClick(location)
    }

    return (
        <Link href={PHONE_HREF} className={className} onClick={handleClick}>
            {children}
        </Link>
    )
}

/**
 * Anchor version for cases where we need an <a> tag instead of Next.js Link.
 */
export function TrackedPhoneAnchor({
    location,
    children,
    className
}: TrackedPhoneLinkProps) {
    const handleClick = () => {
        trackPhoneClick(location)
    }

    return (
        <a href={PHONE_HREF} className={className} onClick={handleClick}>
            {children}
        </a>
    )
}
