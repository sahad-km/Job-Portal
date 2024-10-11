import Header from "@/components/header";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen p-5">
        <Header />
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="text-gray-600">
              © 2024 Hirrd. All rights reserved.
            </div>
            <nav className="flex space-x-4 text-gray-500">
              <Link href="/about" className="hover:text-gray-700">
                About
              </Link>
              <Link href="/privacy" className="hover:text-gray-700">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-700">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
