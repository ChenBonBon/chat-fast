import { menus, signMenus } from "../../menus";
import MenuIconBtn from "../components/MenuIconBtn";
import useToggle from "../hooks/useToggle";
import GlobalHead from "./GlobalHead";
import LinkButton from "./LinkButton";

const SNSIcon = ({ children }) => {
  return (
    <a
      href="#"
      className="ml-6 rounded-full w-8 h-8 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
    >
      {children}
    </a>
  );
};

export default function Layout({ children }) {
  const [value, toggle] = useToggle(false);

  return (
    <div className="font-body">
      <GlobalHead />
      <header>
        <div className="navbar bg-white py-5 px-4 fixed top-0 font-body z-50">
          <div className="navbar-start">
            <a href="/">
              <h2 className="font-bold text-xl font-Montserrat">ChatFast</h2>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menus.map((menu) => (
                <li key={menu.href}>
                  <a href={menu.href} className="hover:bg-transparent">
                    <button className="btn btn-ghost hover:bg-gray-100 rounded-md">
                      {menu.label}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {value && (
            <div className="navbar-center">
              <ul className="menu bg-base-100 w-full absolute top-full left-0">
                {[...menus, ...signMenus].map((menu) => (
                  <li key={menu.href}>
                    <a
                      href={menu.href}
                      className="hover:bg-transparent justify-center p-0"
                    >
                      <button className="btn btn-ghost hover:bg-gray-100 rounded-md">
                        {menu.label}
                      </button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="navbar-end">
            <label tabIndex={0} className="lg:hidden">
              {value ? (
                <MenuIconBtn onClick={toggle}>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                    ></path>
                  </svg>
                </MenuIconBtn>
              ) : (
                <MenuIconBtn onClick={toggle}>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                    ></path>
                  </svg>
                </MenuIconBtn>
              )}
            </label>
            <div className="hidden lg:flex">
              <LinkButton href="/auth/login" type="dashed">
                Sign in
              </LinkButton>
              <LinkButton href="/auth/register" type="solid" className="ml-3">
                Sign up
              </LinkButton>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="text-gray-700 border-t-gray-200 border border-solid bg-white">
          <div className="flex justify-between py-4 w-full max-w-6xl mx-auto">
            <p>© 2023 ChatFast. All rights reserved</p>
            <div className="flex">
              <a href="/terms-of-use">Terms of Use</a>
              <a className="ml-6" href="/privacy-policy">
                Privacy policy
              </a>
              <SNSIcon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </SNSIcon>
              <SNSIcon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </SNSIcon>
              <SNSIcon>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </SNSIcon>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
