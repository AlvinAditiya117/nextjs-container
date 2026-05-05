export default function Home() {
  const techInterests = [
    "UI/UX Design",
    "Frontend Development",
    "React & Next.js",
    "Figma",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
    "Design Systems",
    "Web Accessibility",
    "JavaScript",
  ];

  const projects = [
    {
      title: "Student Profile App",
      description:
        "Aplikasi profil mahasiswa berbasis Next.js dengan containerisasi Docker dan pipeline CI/CD otomatis.",
      tags: ["Next.js", "Docker", "GitHub Actions"],
    },
    {
      title: "UI Component Library",
      description:
        "Kumpulan komponen UI yang reusable dan aksesibel, dibangun dengan React dan Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Profile Card */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">

            {/* Avatar */}
            <div
              className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
              aria-label="Avatar profil"
            >
              AA
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Alvin Aditiya
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              NIM:{" "}
              <span className="font-semibold text-violet-600 dark:text-violet-400">
                2341720020
              </span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Teknik Informatika
            </p>
            <span className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 px-4 py-2 rounded-full text-sm font-semibold">
              UI/UX Designer &amp; Frontend Developer
            </span>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Tentang Saya
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mahasiswa Teknik Informatika yang passionate di bidang UI/UX Design dan
              Frontend Development. Saya percaya bahwa teknologi yang baik harus
              terasa mudah dan menyenangkan digunakan. Saya senang merancang antarmuka
              yang intuitif di Figma lalu mewujudkannya menjadi kode dengan React dan
              Next.js.
            </p>
          </div>

          {/* Tech Interests */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Minat Teknologi
            </h2>
            <ul className="flex flex-wrap gap-3" aria-label="Minat teknologi">
              {techInterests.map((tech) => (
                <li
                  key={tech}
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Proyek Unggulan
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-600 transition-all"
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label="Tag proyek">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs bg-violet-50 dark:bg-gray-700 text-violet-700 dark:text-violet-300 px-2 py-1 rounded border border-violet-200 dark:border-violet-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:alvin@example.com"
              aria-label="Kirim email"
              className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Dibuat dengan{" "}
          <span className="font-semibold text-violet-600">Next.js 16</span> ·
          Styling dengan{" "}
          <span className="font-semibold text-violet-600">Tailwind CSS v4</span> ·
          Dikontainerisasi dengan{" "}
          <span className="font-semibold text-violet-600">Docker</span>
        </footer>

      </div>
    </div>
  );
}
