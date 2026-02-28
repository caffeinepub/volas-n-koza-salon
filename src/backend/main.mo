import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  // Type declarations
  type Service = {
    name : Text;
    description : Text;
    price : Nat;
    duration : Nat;
    category : Text;
  };

  type Testimonial = {
    name : Text;
    reviewText : Text;
    rating : Nat;
    date : Time.Time;
  };

  type BookingInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    preferredDate : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  type GalleryItem = {
    title : Text;
    description : Text;
    category : Text;
  };

  type SalonInfo = {
    address : Text;
    phone : Text;
    email : Text;
    hours : Text;
    socialLinks : [Text];
  };

  // To persistent stores
  let services = Map.empty<Text, Service>();
  let testimonials = List.empty<Testimonial>();
  let inquiries = List.empty<BookingInquiry>();
  let galleryItems = Map.empty<Text, GalleryItem>();
  var salonInfo : ?SalonInfo = null;

  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Int.compare(t2.date, t1.date);
    };
  };

  // Services functions
  public shared ({ caller }) func addService(id : Text, name : Text, description : Text, price : Nat, duration : Nat, category : Text) : async () {
    let service : Service = {
      name;
      description;
      price;
      duration;
      category;
    };
    services.add(id, service);
  };

  public query ({ caller }) func getServices() : async [Service] {
    services.values().toArray();
  };

  // Testimonials functions
  public shared ({ caller }) func addTestimonial(name : Text, reviewText : Text, rating : Nat) : async () {
    let testimonial : Testimonial = {
      name;
      reviewText;
      rating;
      date = Time.now();
    };
    testimonials.add(testimonial);
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials.toArray().sort();
  };

  // Booking inquiries functions
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, service : Text, preferredDate : Text, message : Text) : async () {
    let inquiry : BookingInquiry = {
      name;
      email;
      phone;
      service;
      preferredDate;
      message;
      submittedAt = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [BookingInquiry] {
    inquiries.toArray();
  };

  // Gallery functions
  public shared ({ caller }) func addGalleryItem(id : Text, title : Text, description : Text, category : Text) : async () {
    let item : GalleryItem = {
      title;
      description;
      category;
    };
    galleryItems.add(id, item);
  };

  public query ({ caller }) func getGalleryItems() : async [GalleryItem] {
    galleryItems.values().toArray();
  };

  // Salon info functions
  public shared ({ caller }) func setSalonInfo(address : Text, phone : Text, email : Text, hours : Text, socialLinks : [Text]) : async () {
    let info : SalonInfo = {
      address;
      phone;
      email;
      hours;
      socialLinks;
    };
    salonInfo := ?info;
  };

  public query ({ caller }) func getSalonInfo() : async SalonInfo {
    switch (salonInfo) {
      case (?info) { info };
      case (null) { Runtime.trap("Salon information is not set.") };
    };
  };
};
