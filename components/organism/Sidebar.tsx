import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import { createRoot } from "react-dom/client";

import { BsHouseDoor, BsLaptop } from "react-icons/bs";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BsHouseDoor />, val: "hidden" },
    {
      name: "Divisi Office",
      icon: <BsLaptop />,
      val: "hidden",
      subMenu: [
        {
          subName: "Dvivisi IT",
          url: "oit",
        },
        {
          subName: "Dvivisi Product",
          url: "oit",
        },
        {
          subName: "Sekretaris",
          url: "oit",
        },
      ],
    },
  ];
  const [barMenu, setMenu] = useState(menu);

  function showhide(index: any) {
    if (!menu[index].subMenu) return false;
    let data = [...barMenu];
    barMenu[index].val === "hidden" ? (data[index].val = "block") : (data[index].val = "hidden");
    console.log(barMenu);
    let htmlData = (
      <div className={`bg-blue-100 flex flex-col rounded mt-1 py-1 px-2 min-w-100 ${barMenu[index].val}`}>
        {barMenu[index].subMenu?.map((sm, index) => {
          return (
            <Link href={sm.url} className="px-1 py-1 hover:bg-white rounded" key={index}>
              {sm.subName}
            </Link>
          );
        })}
      </div>
    );
    let container = document.getElementById("changeDropdown" + index) as HTMLElement;
    const root = createRoot(container);
    root.render(htmlData);
  }

  const dataSub = async (nama: String, url: any) => {
    return (
      <>
        <div className="bg-blue-100 flex flex-col rounded mt-1 py-1 px-2 w-full">
          <Link href={url} className="px-1 py-1 hover:bg-white rounded">
            {nama}
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="flex flex-none flex-col min-h-screen bg-white drop-shadow-lg   w-48 px-9 space-y-7  ">
      <div className="flex flex-row items-center pt-8">
        <Image src="/img/www.png" alt="" width={20} height={36} className="object-cover mr-2" />
        <div>Em-Support</div>
      </div>
      <div className="space-y-24">
        <div>
          <div className="mb-4">Menu</div>
          <ul className="space-y-4">
            {menu.map((mn, index) => {
              return (
                <>
                  <li className="flex flex-col items-center" key={index}>
                    <button className="w-full bg-blue-50 flex justify-start items-center px-3 py-1 rounded" onClick={(e) => showhide(index)}>
                      <div className="mr-3">{mn.icon}</div>
                      <div>{mn.name}</div>
                    </button>
                    <div className="w-full" id={`changeDropdown${index}`}></div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
