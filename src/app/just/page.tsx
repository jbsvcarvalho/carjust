"use client";
import React, { useEffect, useState } from "react";

import { useTickets } from "@/provider/TicketContext";
import PaginationCustom from "@/components/pagination/pagination";
import Select from "@/components/inputs/select";
import { SelectOption } from "@/shared/types/components/select.types";
import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import ButtonCustom from "@/components/buttons/buttonCustom";

import Table from "@/components/table/table";
import InputSearch from "@/components/inputs/InputSearch";

const Tickets: React.FC = () => {
  const {
    tickets,
    loading,
    totalItems,
    setCurrentPage,
    currentPage,
    itemsPerPage,
    capture,
    setSearchTerm,
    setItemsPerPage,
  } = useTickets();

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValueText, setInputValueText] = useState("");


  const optionsTwo: SelectOption[] = [
    { value: "value1", label: "Valor 1" },
    { value: "value2", label: "Valor 2" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      selectedValue,
      selectedValueTwo,
      inputValueText,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-light flex flex-col w-full">

      <div className="mx-4 my-8 md:m-8 gap-4 md:gap-8 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-4 md:gap-8 bg-white p-4 md:p-8">
          <InputSearch
            startIcon={<SlLocationPin className="text-blue-500" />}
            endIcon={<CiSearch className="cursor-pointer" onClick={() => setSearchTerm("")} />}
            inputValue={inputValue}
            onChange={handleSearchChange} 
            placeholder="Busque por atração"
          />
          {loading ? (
            "Aguarde..."
          ) : (
            tickets &&
            tickets.length > 0 && (
              <>
                <Table data={tickets} />
                <PaginationCustom
                  setItemsPerPage={setItemsPerPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={totalItems}
                  paginate={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            )
          )}
        </div>

        <div className="flex-1 md:flex-2 flex flex-col gap-4 md:gap-8 bg-white p-4 md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            {capture.name ? (
              <>
                <div className="text-lg font-medium text-dark pb-2">{capture.name}</div>
                <h2 className="flex gap-2.5 items-center text-sm text-blueDark">{capture.next}</h2>
              </>
            ) : (
              <h2 className="flex gap-2.5 items-center text-sm text-blueDark">
                Clique em &quot;Saber mais&quot; para pegar algumas informações
              </h2>
            )}
  
            <input
              className="p-2 border rounded border-gray-300"
              type="text"
              value={inputValueText}
              onChange={(e) => setInputValueText(e.target.value)} 
              placeholder="Digite algo aqui"
            />
            <Select
              options={optionsTwo}
              value={selectedValueTwo}
              onChange={(value: string) => setSelectedValueTwo(value)} 
              placeholder="Selecione uma opção"
            />
  
            <ButtonCustom
              backgroundColor="blue"
              text="Enviar"
              types="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default Tickets;

