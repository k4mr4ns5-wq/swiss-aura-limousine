import { site } from "@/lib/site";

export function getReserveLinks() {
  const whatsappText = encodeURIComponent(
    "Hello Swiss Aura Limousine. I would like to reserve a transfer.\n\nPickup:\nDestination:\nDate:\nTime:\nPassengers:\nFlight number (if any):\nLuggage:\n"
  );

  const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${whatsappText}`;

  const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(
    "Reservation request"
  )}&body=${encodeURIComponent(
    "Hello Swiss Aura Limousine,\n\nI would like to reserve a transfer.\n\nPickup:\nDestination:\nDate:\nTime:\nPassengers:\nFlight number (if any):\nLuggage:\n\nThank you."
  )}`;

  return { whatsappLink, mailtoLink };
}
