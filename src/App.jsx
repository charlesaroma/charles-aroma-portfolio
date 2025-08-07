import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import { siteConfig } from "@/lib/seo";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
