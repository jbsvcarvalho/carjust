export interface Destination {
    id: string;
    name: string;
    next: string;
    image: string;
    description: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
  }
  
export interface DestinationData {
    data: Destination[];
  }