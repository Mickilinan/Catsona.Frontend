interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-eggshell flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative blur circles */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-sunset/40 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-cambridge-blue/40 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-5 w-32 h-32 bg-burnt-sienna/40 rounded-full blur-2xl"></div>

            {/* Content container */}
            <div className="max-w-4xl mx-auto text-center relative z-10 w-[600px]">
                {children}
            </div>
        </div>
    );
}