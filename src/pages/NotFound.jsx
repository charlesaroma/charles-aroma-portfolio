import { SEO } from "@/components/SEO";

export const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      <div>
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-base sm:text-normal text-muted-foreground">Sorry, the page you requested could not be found.</p>
      </div>
    </main>
  );
};
