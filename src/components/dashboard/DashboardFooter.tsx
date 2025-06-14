
import React from "react";

const DashboardFooter = () => (
  <footer className="bg-muted py-4 border-t w-full mt-auto">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
      <div className="mb-2 md:mb-0">© 2024 e-Soko. All rights reserved.</div>
      <div className="flex flex-wrap gap-4">
        <a href="https://e-soko.com/help" className="hover:underline">Help</a>
        <a href="https://e-soko.com/privacy" className="hover:underline">Privacy</a>
        <a href="https://e-soko.com/terms" className="hover:underline">Terms</a>
      </div>
    </div>
  </footer>
);

export default DashboardFooter;
