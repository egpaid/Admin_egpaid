import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    // icon: <FaHome />,
  },
  {
    path: "/member",
    name: "Member",
    // icon: <FaUser />,
    exact: true,
    subRoutes: [
      {
        path: "/Member/User/Customer",
        name: "User/Customer ",
        // icon: <FaUser />,
      },
      {
        path: "/Member/Merchant",
        name: "Merchant",
        // icon: <FaLock />,
      },
      {
        path: "/Member/KYC",
        name: "KYC",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/Member/Scheme Packages",
        name: "Scheme Packages",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/Member/Setting",
        name: "Setting",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/employee",
    name: "Employee",
    // icon: <MdMessage />,
    subRoutes: [
      {
        path: "/employee/employee",
        name: "Employee ",
        // icon: <FaUser />,
      },
      {
        path: "/employee/administrator",
        name: "Administrator",
        // icon: <FaLock />,
      },
      {
        path: "/employee/attendance",
        name: "Attendance",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/jobs",
        name: "Jobs",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/search executive",
        name: "Search Executive",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/employee report",
        name: "Employee Report",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/emp chat",
        name: "Emp Chat",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/e-commerce",
    name: "E-Commerce",
    // icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/e-commerce/employee",
        name: "Manage Brands",
        // icon: <FaUser />,
      },
      {
        path: "/e-commerce/administrator",
        name: "Manage Filters",
        // icon: <FaLock />,
      },
      {
        path: "/employee/attendance",
        name: "Navigation & Category",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/jobs",
        name: "Manage Licence",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/search executive",
        name: "UPI Collect",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/employee/employee report",
        name: "Bhim UPI QR",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/smart collection",
    name: "Smart Collection",
    // icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "UPI ID",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Virtual Account",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "UPI Transaction",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Virtual Transaction",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/payout",
    name: "Payout",
    // icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Wallet Transfer",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Beneficiaries",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Payout History",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Settings",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/recharge & bill pay",
    name: "Recharge & Bill Pay",
    // icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Manage Operator",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Manage Circle",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "API Settings",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "API Operator Code",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "API Switch",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "History",
        // icon: <FaMoneyBill />,
      }
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    // icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "State & District",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Page Setting",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Admin Sidebar",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Merchant Sidebar",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "CRM Sidebar",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Menu & Group",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/accounting",
    name: "Accounting",
    // icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Voucher",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Coupon",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "GST Update",
        // icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Account Statement",
        // icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/support",
    name: "Support",
    // icon: <AiFillHeart />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Ticket",
        // icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Chat History",
        // icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Notification",
        // icon: <FaMoneyBill />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  EGPAID
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
