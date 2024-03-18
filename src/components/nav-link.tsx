import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

export function NavLinkTeste({ to, children }: NavLinkProps) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex h-20 items-center border-b-2 border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border ${isActive ? 'border-blue-400 text-accent-foreground' : ''
                }`}
        >
            {children}
        </Link>
    );
}