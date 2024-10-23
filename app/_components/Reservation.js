import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();
  return (
    <div className="grid grid-cols-2 border border-primary-700 min-h-[400px] ">
      <DateSelector cabin={cabin} settings={settings} bookedDate={bookedDate} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
