"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function BookingCancel({ bookingId, booking }) {

    const router = useRouter();
    const handleCancelbooking = async () => {

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        if (data) {
            toast.success(`${booking.roomName} Cancel for booking  !!`)
            // window.location.reload();
            router.refresh();

        }

        console.log(data)

    }


    return (
        <AlertDialog>
            <Button variant="danger">Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Heading>Cancel This Booking ??</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                You'll lose your reserved time slot. The room will become available to others.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Keep booking
                            </Button>
                            <Button onClick={handleCancelbooking} slot="close" variant="danger">
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}