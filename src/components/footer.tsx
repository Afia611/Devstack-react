import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[white] text-sm text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand Section */}

        <div>
        <img src={logo} alt="DevStack" className="h-7 w-auto"/>
        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Curated tools, technologies and resources for developers building modern softwares. </p>
          
           {/* Social Links */}
        
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-slate-700">
         <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#EB388C]" > GitHub </a>
         <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#EB388C]" >Twitter </a>
         <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-[#EB388C]" > LinkedIn </a>
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