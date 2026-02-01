import Navbar from "@/components/Navbar";
import EventList from "@/components/events/EventList";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-semibold text-white mb-12">Events</h1>
        <EventList />
      </main>
    </>
  );
}
