import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PageLoader } from "@/components/common/PageLoader";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export function MainLayout() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
