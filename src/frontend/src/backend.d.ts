import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    duration: bigint;
    name: string;
    description: string;
    category: string;
    price: bigint;
}
export interface SalonInfo {
    hours: string;
    socialLinks: Array<string>;
    email: string;
    address: string;
    phone: string;
}
export type Time = bigint;
export interface GalleryItem {
    title: string;
    description: string;
    category: string;
}
export interface BookingInquiry {
    service: string;
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
    preferredDate: string;
    phone: string;
}
export interface Testimonial {
    date: Time;
    name: string;
    reviewText: string;
    rating: bigint;
}
export interface backendInterface {
    addGalleryItem(id: string, title: string, description: string, category: string): Promise<void>;
    addService(id: string, name: string, description: string, price: bigint, duration: bigint, category: string): Promise<void>;
    addTestimonial(name: string, reviewText: string, rating: bigint): Promise<void>;
    getAllInquiries(): Promise<Array<BookingInquiry>>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getSalonInfo(): Promise<SalonInfo>;
    getServices(): Promise<Array<Service>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    setSalonInfo(address: string, phone: string, email: string, hours: string, socialLinks: Array<string>): Promise<void>;
    submitInquiry(name: string, email: string, phone: string, service: string, preferredDate: string, message: string): Promise<void>;
}
