import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GalleryItem,
  SalonInfo,
  Service,
  Testimonial,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSalonInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<SalonInfo>({
    queryKey: ["salonInfo"],
    queryFn: async () => {
      const FALLBACK = {
        hours: "Mon–Sun: 10 AM – 9 PM",
        socialLinks: [],
        email: "volasandkoza@gmail.com",
        address:
          "A5, Sandeep Complex Ground Floor, Shivalik Nagar, Haridwar, Uttarakhand 249403",
        phone: "+91 90681 51060",
      } as SalonInfo;
      if (!actor) return FALLBACK;
      try {
        return await actor.getSalonInfo();
      } catch {
        return FALLBACK;
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGalleryItems() {
  const { actor, isFetching } = useActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["galleryItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      email: string;
      phone: string;
      service: string;
      preferredDate: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        params.name,
        params.email,
        params.phone,
        params.service,
        params.preferredDate,
        params.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
