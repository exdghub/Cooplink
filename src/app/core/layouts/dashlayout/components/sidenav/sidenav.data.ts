import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const navitems = [
  {
    type: "single",
    name: "Dashboard",
    img: faHouseChimney,
    to: "/dashboard",
  },
  {
    type: "nested",
    title: "Topic",
    children: [
      {
        type: "one",
        name: "Link Account",
        to: "/link-account",
        img: faLink,
      },
      {
        type: "many",
        id: "submenu1",
        parent: "Fund Transfer",
        url: "/fund-transfer",
        img: faMoneyBill,
        subitems: [
          {
            name: "Coop to Bank",
            to: "/coop-to-bank",
            img: faPaperPlane,
          },
          {
            name: "Coop to Coop",
            to: "/coop-to-coop",
            img: faPaperPlane,
          },
          {
            name: "Bank to Coop",
            to: "/bank-to-coop",
            img: faPaperPlane,
          },
        ],
      },
      {
        type: "many",
        id: "submenu2",
        parent: "Report",
        url: "/report",
        img: faStar,
        subitems: [
          {
            name: "Audit Report",
            to: "/audit-report",
            img: faStar,
          },
          {
            name: "Transaction Report",
            to: "/transaction-report",
            img: faStar,
          },
        ],
      },
    ],
  },
  {
    type: "nested",
    title: "General",
    children: [
      {
        type: "one",
        name: "Settings",
        to: "/settings",
        img: faLink,
      },
    ],
  },
  {
    type: "single",
    name: "Logout",
    img: faHouseChimney,
    to: "/",
  },
];
