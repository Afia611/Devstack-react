import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f0f2f6] text-sm text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <img
              src={logo}
              alt="DevStack"
              className="h-9 w-auto rounded bg-white px-2 py-1"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Curated tools, technologies and resources for developers building modern softwares. </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-[#EB388C] hover:bg-[#EB388C] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.5 5 18.5 5.3 18.5 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .7Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-[#EB388C] hover:bg-[#EB388C] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M18.2 2H22l-8.3 9.5L23.5 22h-7.7l-6-7.8L3 22H-.8l8.9-10.2L-1.3 2h7.9l5.4 7.1L18.2 2Zm-1.3 18h2.1L5.5 3.9H3.2L16.9 20Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-700 transition hover:border-[#EB388C] hover:bg-[#EB388C] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M5.3 3.6A2.3 2.3 0 1 1 .7 3.6a2.3 2.3 0 0 1 4.6 0ZM1.1 7.4h4.3V21H1.1V7.4Zm6.9 0h4.1v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V21h-4.3v-6.5c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V21H8V7.4Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#EB388C]">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-left sm:gap-0 sm:text-left lg:justify-between">

          <p>
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer