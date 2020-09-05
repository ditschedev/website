import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} link-active-exact`
    } else if (router.pathname.startsWith(href)) {
        className = `${className} link-active`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}