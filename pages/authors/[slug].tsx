import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGlobe, FaSun, FaRegMoon } from "react-icons/fa";
import Card from "@/components/Card"
function Authors() {

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

          <div className=" p-10 text-gray-500 sm:text-lg dark:text-gray-400">

            <img className="w-36 h-36 p-2 rounded-full mx-auto ring-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bordered avatar" />

            <h2 className="mb-4 mt-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Rajdeep <span className="font-extrabold">Singh</span></h2>
            <p className="mb-4 font-light text-center">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <ul className="flex flex-wrap p-4 justify-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">

              <li>

                <Link href={"#"} className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 dark:hover:text-blue-700 rounded md:p-0 dark:text-white" aria-current="page">
                  <FaGlobe />
                </Link>

              </li>

              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"> <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white">
                  <FaInstagram />
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </section>

      <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">

          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            More articles from Rajdeep Singh
          </h2>

          <div className="container my-12 mx-auto grid grid-cols-1 gap-12 md:gap-12 lg:gap-12  lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </aside>


    </>
  )

}
export default Authors
