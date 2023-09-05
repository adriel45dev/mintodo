export default function Footer() {
  return (
    <footer className="bg-gray-800 rounded-lg shadow m-8 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Adriel Alves
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-mediumtext-gray-400 sm:mt-0 text-white">
          <li>
            <a
              href="https://github.com/adriel45dev"
              className="mr-4 hover:underline md:mr-6 "
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/adrielalves45/"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adriel.45/"
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="http://adriel45dev.github.io/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
