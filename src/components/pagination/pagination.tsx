import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  setItemsPerPage: any;
}

const PaginationCustom: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setItemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers: number[] = [];

  let startPage: number, endPage: number;
  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex flex-wrap justify-center items-center gap-4 py-2">
      <span className="text-gray-500 text-xs sm:text-sm">
        {totalPages} Resultados
      </span>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs sm:text-sm">Página:</span>
        <select
          className="py-1 px-2.5 border border-gray-400 rounded-lg text-gray-500 text-xs sm:text-sm"
          onChange={(e) => paginate(Number(e.target.value))}
          value={currentPage}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <ul className="flex justify-center items-center gap-2">
        {currentPage > 1 && (
          <li className="cursor-pointer text-primary-500">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="#!"
              className="flex items-center"
            >
              <IoIosArrowBack />
            </a>
          </li>
        )}
        {startPage > 1 && <li className="text-xs sm:text-sm">...</li>}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`cursor-pointer ${
              currentPage === number ? "font-bold" : "text-primary-500"
            } text-xs sm:text-sm`}
          >
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="flex items-center"
            >
              {number}
            </a>
          </li>
        ))}
        {endPage < totalPages && <li className="text-xs sm:text-sm">...</li>}
        {currentPage < totalPages && (
          <li className="cursor-pointer text-primary-500">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="#!"
              className="flex items-center"
            >
              <IoIosArrowForward />
            </a>
          </li>
        )}
      </ul>
      <select
        className="py-1 px-2.5 border border-gray-400 rounded-lg text-gray-500 text-xs sm:text-sm"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </nav>
  );
};

export default PaginationCustom;
