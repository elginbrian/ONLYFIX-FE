"use client";

import dynamic from "next/dynamic";
import React from "react";

const App = dynamic(() => import("../../App"), { ssr: true });

export function ClientOnly() {
  return <App />;
}
