import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteConfig } from "@/lib/seo";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <meta name="application-name" content={siteConfig.siteName} />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
