import React from "react";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-blue-600 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M17 16v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
        <rect width="12" height="8" x="9" y="2" rx="2" />
      </svg>
    ),
    title: "Quick Save",
    desc: "Save any website with just one click. Our browser extension makes bookmarking instant.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-green-600 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Smart Search",
    desc: "Find any saved website instantly with our powerful search and filter system.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-500 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M3 7a2 2 0 0 1 2-2h2l2-2h4l2 2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      </svg>
    ),
    title: "Smart Organization",
    desc: "Organize bookmarks into folders and categories for better management.",
  },
  {
    icon: (
      <span className="block w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
        <svg
          className="w-6 h-6 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M17 16v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
          <rect width="12" height="8" x="9" y="2" rx="2" />
        </svg>
      </span>
    ),
    title: "Cross-Device Folder Sync",
    desc: "Access your bookmarks from any device, anytime.",
  },
  {
    icon: (
      <span className="block w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2">
        <svg
          className="w-6 h-6 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </span>
    ),
    title: "Secure & Private",
    desc: "Your bookmarks are encrypted and only accessible by you.",
  },
  {
    icon: (
      <span className="block w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-2">
        <svg
          className="w-6 h-6 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </span>
    ),
    title: "Easy Sharing",
    desc: "Share your favorite bookmarks with friends and colleagues easily.",
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
