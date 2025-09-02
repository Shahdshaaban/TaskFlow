const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>

              <span className="ml-2 text-xl font-bold">TaskFlow</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering teams and individuals to achieve more through smart
              task management and seamless collaboration.
            </p>
            <div className="flex space-x-4">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.7a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.6 0c-2.5 0-4.5 2.03-4.5 4.53 0 .35.04.7.11 1.03A12.8 12.8 0 013 1.15a4.47 4.47 0 00-.61 2.28c0 1.57.8 2.95 2.03 3.76A4.5 4.5 0 012 6.5v.05c0 2.2 1.56 4.03 3.63 4.44a4.52 4.52 0 01-2.03.08c.57 1.8 2.22 3.12 4.18 3.15A9 9 0 012 19.54 12.7 12.7 0 008.29 21c7.55 0 11.68-6.22 11.68-11.61 0-.18 0-.36-.01-.53A8.18 8.18 0 0023 3z" />
              </svg>
              <svg
                className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.81v-9.294H9.692V11.06h3.118V8.412c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.31h3.587l-.467 3.646h-3.12V24h6.116c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z" />
              </svg>
              <svg
                className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.96.24 2.416.403a4.92 4.92 0 011.79 1.04 4.922 4.922 0 011.04 1.79c.164.456.35 1.246.403 2.416.058 1.267.07 1.652.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.416a4.924 4.924 0 01-1.04 1.79 4.922 4.922 0 01-1.79 1.04c-.456.164-1.246.35-2.416.403-1.267.058-1.652.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.416-.403a4.922 4.922 0 01-1.79-1.04 4.92 4.92 0 01-1.04-1.79c-.164-.456-.35-1.246-.403-2.416C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.416a4.922 4.922 0 011.04-1.79 4.922 4.922 0 011.79-1.04c.456-.164 1.246-.35 2.416-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.012 7.052.07 5.776.128 4.68.312 3.804.64a7.12 7.12 0 00-2.6 1.66A7.122 7.122 0 00.64 4.904c-.328.876-.512 1.972-.57 3.248C.012 8.332 0 8.735 0 12c0 3.265.012 3.668.07 4.948.058 1.276.242 2.372.57 3.248a7.127 7.127 0 001.564 2.6 7.127 7.127 0 002.6 1.564c.876.328 1.972.512 3.248.57 1.28.058 1.683.07 4.948.07s3.668-.012 4.948-.07c1.276-.058 2.372-.242 3.248-.57a7.124 7.124 0 002.6-1.564 7.123 7.123 0 001.564-2.6c.328-.876.512-1.972.57-3.248.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.058-1.276-.242-2.372-.57-3.248a7.124 7.124 0 00-1.564-2.6 7.125 7.125 0 00-2.6-1.564c-.876-.328-1.972-.512-3.248-.57C15.668.012 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
              </svg>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <span className="text-gray-400">Contact@taskflow.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="text-gray-400">+20 10 ** ** ** **</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <span className="text-gray-400">Dokki, Egypt</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="list">Privacy Policy</li>
              <li className="list">Terms of Service</li>
              <li className="list">Support</li>
              <li className="list">Blog</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 TaskFlow. All rights reserved. made by me !
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
