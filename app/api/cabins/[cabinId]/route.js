import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(requset, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    console.log(cabin, bookedDates);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "not found" });
  }
}
