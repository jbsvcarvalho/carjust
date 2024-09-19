import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { useTickets } from "@/provider/TicketContext";
import {
  Destination,
  DestinationData,
} from "@/shared/types/product/Ticket.type";
import CardBody from "../cards/cadsBody";
import HamburgerMenu from "../buttons/buttonCart";
import Image from "next/image";

import Rating from "../rating/rating";
import ButtonMenu from "../buttons/buttonMenu";
import { formatDate } from "@/shared/util/formatDate";

const optionsData = [
  { title: "Car" },
  { title: "Next Reservation" },
  { title: "Status" },
  { title: "Rating" },
  { title: "ACTIONS" },
];
const Table = ({ data }: DestinationData) => {
  const { setCapture } = useTickets();

  return (
    <>
      {/* Mobile View - Cards */}
      <div className="md:hidden">
        <CardBody data={data} />
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 h-14">
              {optionsData.map((item) => (
                <th className="p-2 text-slate-400" key={item.title}>
                  {item.title.toLowerCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2 flex justify-start gap-3 items-center">
                  <Image
                    alt="Descrição da Imagem"
                    src={item.image}
                    width={50}
                    height={20}
                    className="w-26 h-26 md:h-full bg-no-repeat bg-center bg-cover"
                  />
                  <h1 className="text-lg text-dark pb-2">{item.name}</h1>
                </td>
                <td className="p-2">{formatDate(item.next)}</td>
                <td className="p-2 text-xs">
                  {item.rating > 0 ? (
                    <span className="text-green-900 bg-green-200 px-4 py-1 rounded-md">Available</span>
                  ) : (
                    item.rating === 0 && (
                      <span className="text-red-900 bg-red-200 px-4 py-1 rounded-md">No-available</span>
                    )
                  )}
                </td>

                <td className="place-content-end">
                  <Rating data={item.rating} />
                </td>
                <td className="text-center">
                  <ButtonMenu
                    item={item}
                    options={[
                      {
                        label: "Ver",
                        action: (item: any) => console.log("Ver", item),
                      },
                      {
                        label: "Download",
                        action: (item: any) => console.log("Download", item),
                      },
                      {
                        label: "Saber mais",
                        action: (item: React.SetStateAction<Destination>) =>
                          setCapture(item),
                      },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
