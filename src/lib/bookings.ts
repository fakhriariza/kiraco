import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  guestCount: string;
  venue: string;
  message: string;
  budget: string;
  createdAt?: Timestamp;
  status?: string;
}

export async function createBooking(data: BookingData) {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...data,
      createdAt: Timestamp.now(),
      status: "pending",
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, error: "Gagal mengirim booking. Silakan coba lagi." };
  }
}

export async function getBookings() {
  try {
    const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
}
