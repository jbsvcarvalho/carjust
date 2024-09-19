import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { useTickets } from "@/provider/TicketContext";
import Rating from "../rating/rating";
import ButtonMenu from "../buttons/buttonMenu";
import { formatDate } from "@/shared/util/formatDate";
import { Destination } from "@/shared/types/product/Ticket.type";

const CardBody = ({ data }: any) => {
  const { setCapture } = useTickets();
  return (
    <div className="flex flex-col gap-2"> 
      {data.map((item: any) => (
        <div
          key={item.id}
          className="flex flex-row w-full border-b items-center gap-3 p-1" 
        >
          <div
            style={{ backgroundImage: `url(${item.image})` }}
            className="w-28 h-16 bg-no-repeat bg-center bg-cover" 
          ></div>
          <div className="flex items-start justify-start flex-col w-full h-auto pt-4"> 
            <h1 className="text-md font-small text-dark pb-1">{item.name}</h1> 
            <h3 className="text-xs font-small text-dark "> 
              Next reservation: {formatDate(item.next)}
            </h3>
            <Rating data={item.rating} />
          </div>

          <div className="flex h-24 justify-start items-start"> 
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBody;
