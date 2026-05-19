"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, User, Phone, MessageCircle, MapPin, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { Modal } from "@/components/ui/Modal";
import { FadeInView } from "@/components/motion/FadeInView";
import { PLAN_OPTIONS, FREQUENCY_OPTIONS, REGIONS } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  region: string;
  occupation: string;
  preferredPlan: string;
  frequency: string;
}

const initialForm: FormData = {
  fullName: "",
  phone: "",
  whatsapp: "",
  region: "",
  occupation: "",
  preferredPlan: "",
  frequency: "",
};

export function ApplyForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setShowModal(true);
    setShowToast(true);
    setForm(initialForm);
    setTimeout(() => setShowToast(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400";

  return (
    <section id="apply" className="py-20 md:py-28 bg-gradient-to-b from-[#f8faf9] to-emerald-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Join Us"
          title="Apply to Join MyTurn"
          subtitle="Fill out the form below and our team will reach out via WhatsApp within 24–48 hours."
        />

        <FadeInView>
          <div className="max-w-2xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-white border border-emerald-100 shadow-xl shadow-emerald-900/5 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-emerald-800 mb-2">
                    <User className="w-4 h-4" /> Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-emerald-800 mb-2">
                    <Phone className="w-4 h-4" /> Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-emerald-800 mb-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => update("whatsapp", e.target.value)}
                    placeholder="+233 XX XXX XXXX"
                    className={inputClass}
                  />
                </div>

                <motion.div>
                  <label className="flex items-center gap-2 text-sm font-medium text-emerald-800 mb-2">
                    <MapPin className="w-4 h-4" /> Region *
                  </label>
                  <select
                    required
                    value={form.region}
                    onChange={(e) => update("region", e.target.value)}
                    className={cn(inputClass, "cursor-pointer")}
                  >
                    <option value="">Select region</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-emerald-800 mb-2">
                    <Briefcase className="w-4 h-4" /> Occupation *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.occupation}
                    onChange={(e) => update("occupation", e.target.value)}
                    placeholder="e.g. Trader, Student, Teacher"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-emerald-800 mb-2 block">
                    Preferred Plan *
                  </label>
                  <select
                    required
                    value={form.preferredPlan}
                    onChange={(e) => update("preferredPlan", e.target.value)}
                    className={cn(inputClass, "cursor-pointer")}
                  >
                    <option value="">Select plan</option>
                    {PLAN_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-emerald-800 mb-2 block">
                    Contribution Frequency *
                  </label>
                  <select
                    required
                    value={form.frequency}
                    onChange={(e) => update("frequency", e.target.value)}
                    className={cn(inputClass, "cursor-pointer")}
                  >
                    <option value="">Select frequency</option>
                    {FREQUENCY_OPTIONS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    Submitting...
                  </motion.span>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to be contacted via WhatsApp. No payment required at this stage.
              </p>
            </motion.form>
          </div>
        </FadeInView>
      </div>

      <Toast
        message="Application submitted successfully! We'll contact you soon."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Application Received">
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
            <Send className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="text-gray-600 mb-6">
            Thank you for applying to MyTurn! Our team will review your application and reach out on
            WhatsApp within 24–48 hours.
          </p>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Got it
          </Button>
        </div>
      </Modal>
    </section>
  );
}
