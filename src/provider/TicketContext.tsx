"use client"
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import ticketService from "@/services/ticket.service";
import { Destination, DestinationData } from "@/shared/types/product/Ticket.type";

interface TicketsProviderProps {
  children: ReactNode;
}

interface TicketsContextType {
  tickets: Destination[];
  totalItems: number;
  loading: boolean;
  error: string | null;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setCapture: React.Dispatch<React.SetStateAction<Destination>>;
  capture: Destination;
}

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export const useTickets = (): TicketsContextType => {
  const context = useContext(TicketsContext);
  if (!context)
    throw new Error("useTickets must be used within a TicketsProvider");
  return context;
};

export const TicketsProvider: React.FC<TicketsProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tickets, setTickets] = useState<Destination[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);
  const [capture, setCapture] = useState<Destination | any>([]);

  useEffect(() => {
    fetchTotalTickets();
    fetchTickets();
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [currentPage, itemsPerPage]);
  
  useEffect(() => {
    if (searchTerm) getFilter(searchTerm);
  }, [searchTerm]);

  const fetchTotalTickets = async () => {
    try {
      const response = await ticketService.getAllTickets();
      setTotalItems(response.data.length);
    } catch (error) {
      console.error("Failed to fetch total tickets:", error);
    }
  };

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await ticketService.getTicketsWithPagination(
        currentPage,
        itemsPerPage
      );
      setTickets(response.data);
    } catch (error) {
      setError("Failed to fetch tickets");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFilter = async (params: string) => {
    setLoading(true);
    try {
      const response = await ticketService.getFilter(params);
      setTickets(response.data);
    } catch (error) {
      setError("Error on filtering");
      console.error("Error on filtering:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    tickets,
    totalItems,
    loading,
    error,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    setItemsPerPage,
    itemsPerPage,
    capture,
    setCapture,
  };

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
};
