import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectLayout({
  title,
  header,
  image,
  tech = [],
  children,
  hero = null,
}) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // IMPORTANT: Files must exist inside /public folder
  const files = [
    "bank_settlement.csv",
    "merchant_orders.csv",
    "payment_gateway.csv",
    "refunds.csv",
  ];

  const faqItems = [
    {
      question: "What problem does this project solve?",
      answer:
        "It eliminates manual reconciliation by automatically matching transactions across gateways, banks, and internal ledgers.",
    },
    {
      question: "How does the matching logic work?",
      answer:
        "Transactions are validated using transaction IDs, timestamps, and amount comparisons with automated exception detection.",
    },
    {
      question: "What tools were used?",
      answer:
        "The system uses SQL, Excel, Python, and Power BI for data processing, validation, and reporting.",
    },
    {
      question: "How are unmatched records handled?",
      answer:
        "Unmatched transactions are flagged, categorized, and prepared for investigation to ensure financial accuracy.",
    },
  ];

  function FileIcon() {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <line x1="8" y1="9" x2="10" y2="9" />
      </svg>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 px-4 sm:px-6 lg:px-16 pt-8 pb-20">

        {/* TOP NAV */}
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-gray-700 hover:text-black transition-all font-medium"
          >
            <span className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              ←
            </span>
            <span className="hidden sm:inline text-sm">Back</span>
          </button>

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center"
          >
            ↗
          </button>
        </div>

        {hero && <div className="mb-1">{hero}</div>}

        <div className="max-w-7xl mx-auto">

          {/* TECH STACK */}
          <div className="flex flex-wrap justify-center gap-3 pb-10">
            {tech.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-gray-200 shadow-sm"
              >
                <img src={t.icon} alt={t.name} className="w-3 h-3" />
                <span className="text-sm font-semibold text-gray-800">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          {/* DASHBOARD IMAGE */}
          {image && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <img src={image} alt={header} className="w-full h-auto" />
              </div>
            </div>
          )}

          {/* PROJECT INFO */}
          <div className="max-w-6xl mx-auto mb-10">
            <p className="text-sm text-gray-500 mb-2">About the project</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Meet the Transaction Reconciliation Engine
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              This project automates complex financial reconciliation processes.
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-6xl mx-auto mb-10 space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl bg-blue-600 text-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-4"
                >
                  {item.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CSV RESOURCES */}
          <div className="max-w-xl mx-auto py-10">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">

              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-500">
                  <FileIcon />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  CSV Resources
                </h3>
              </div>

              <p className="text-sm text-gray-500 mb-5">
                Payment reconciliation datasets including bank settlements,
                merchant orders, gateway logs, and refund records.
              </p>

              <div className="flex flex-wrap gap-2">
                {files.map((file) => (
                  <button
                    key={file}
                    onClick={() => {
                      setSelectedFile(file);
                      setShowPopup(true);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                  >
                    {file}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DOWNLOAD POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl">
            <h4 className="text-lg font-semibold mb-3">Download File</h4>
            <p className="text-sm text-gray-600 mb-6">
              Do you want to download <b>{selectedFile}</b>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 text-sm rounded-lg border"
              >
                Cancel
              </button>

              <a
                href={`/${selectedFile}`}
                download
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}