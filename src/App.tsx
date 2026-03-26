/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Features from "./components/Features";
import LiveMap from "./components/LiveMap";
import Safety from "./components/Safety";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-sand selection:bg-orange selection:text-white">
      <Hero />
      <Features />
      <LiveMap />
      <Safety />
      <Footer />
    </main>
  );
}
