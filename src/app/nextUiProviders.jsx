"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function NextUiProviders({ children }) {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <div className="container mx-auto">
        <NextUIProvider>{children}</NextUIProvider>
      </div>
    </div>
  );
}
