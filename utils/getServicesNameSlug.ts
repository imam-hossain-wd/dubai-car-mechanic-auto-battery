

import { services } from "@/data/services/services";


export const getServicesNameSlug = () => {
  return services.map(service => ({
    name: service.name,
    slug: service.slug
  }))
};
