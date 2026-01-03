import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const coverageLinks = [
        { href: "#", label: "Life Insurance" },
        { href: "#", label: "Mortgage Protection" },
        { href: "#", label: "Final Expense" },
        { href: "#", label: "Living Benefits" },
    ];

    const companyLinks = [
        { href: "#how-it-works", label: "How It Works" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#", label: "About Us" },
        { href: "#", label: "Contact" },
    ];

    const legalLinks = [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Disclosures" },
    ];

    return (
        <footer className="bg-secondary text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-serif font-bold">
                                Future Covered
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Protecting families with affordable life insurance from A-rated carriers.
                            Your future, covered.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:1-800-555-0123"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">1-800-555-0123</span>
                            </a>
                            <a
                                href="mailto:support@futurecovered.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">support@futurecovered.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Nationwide Coverage</span>
                            </div>
                        </div>
                    </div>

                    {/* Coverage Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Coverage Options</h4>
                        <ul className="space-y-3">
                            {coverageLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Future Covered. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs text-center md:text-right max-w-2xl">
                            Life insurance products are offered through licensed insurance agents.
                            Coverage, rates, and availability may vary by state. This is not a
                            guarantee of coverage or benefits. Please consult with a licensed
                            agent for details specific to your situation.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
