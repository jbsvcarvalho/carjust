import axiosInstance from "@/api/axiosInstance";
const baseURL = "/ticket";

const ticketService = {
  getAllTickets() {
    return axiosInstance.get(`${baseURL}`);
  },

  getTicketById(ticketId: number) {
    return axiosInstance.get(`${baseURL}/${ticketId}`);
  },

  getFilter(params: string) {
    return axiosInstance.get(`${baseURL}?search=${params}`);
  },

  getTicketsWithPagination(page: number, limit: number) {
    return axiosInstance.get(`${baseURL}?page=${page}&limit=${limit}`);
  },
};

export default ticketService;
