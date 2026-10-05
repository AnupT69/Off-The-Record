"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PromptCards from "./PromptCards";
import ConfessionWall from "./ConfessionWall";

import Questions from "./Questions";
import WhyThisExists from "./WhyThisExists";
import SummitCTA from "./SummitCTA";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import ConfessionFormModal from "./ConfessionFormModal";
import { ConfessionItem } from "@/types/confession";

export default function OffTheRecordClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [confessions, setConfessions] = useState<ConfessionItem[]>([]);

  const fetchConfessions = useCallback(async () => {
    try {
      const res = await fetch("/api/confessions");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setConfessions(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch confessions:", err);
    }
  }, []);

  useEffect(() => {
    fetchConfessions();
  }, [fetchConfessions]);

  const handleOpenModal = (promptText = "") => {
    setSelectedPrompt(promptText);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrompt("");
  };

  const handleSelectPrompt = (promptText: string) => {
    handleOpenModal(promptText);
  };

  const handleExplorePrompts = () => {
    const el = document.getElementById("prompts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200 selection:text-gray-900 font-sans overflow-x-hidden">
      <Navbar onOpenConfessModal={() => handleOpenModal()} />

      <main>
        <Hero
          onOpenConfessModal={() => handleOpenModal()}
          onExplorePrompts={handleExplorePrompts}
        />

        <ConfessionWall
          confessions={confessions}
          onRefresh={fetchConfessions}
          onOpenConfessModal={() => handleOpenModal()}
        />



        <PromptCards onSelectPrompt={handleSelectPrompt} />

        <Questions
          onOpenConfessModalWithQuestion={(qText) => handleOpenModal(qText)}
        />

        <WhyThisExists />

        <SummitCTA />

        <FinalCTA onOpenConfessModal={() => handleOpenModal()} />
      </main>

      <Footer />

      <ConfessionFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialPrompt={selectedPrompt}
        onSuccessConfessionAdded={fetchConfessions}
      />
    </div>
  );
}
