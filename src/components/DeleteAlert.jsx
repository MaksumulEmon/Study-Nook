"use client";

// import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
// import { MdDeleteOutline } from "react-icons/md";

export function DeleteAlert({ room }) {



  const handleDelete = async () => {

    // const { data: tokenData } = await authClient.token();
    // console.log(tokenData);

    const res = await fetch(`http://localhost:5000/room/${room._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${tokenData?.token}`
      }

    });

    const data = await res.json();
    toast.success(`Room Deleted !`);
    redirect('/all-rooms')
    console.log(data)
  }


  return (
    <AlertDialog>

      {/* 
      <Button variant="danger" className="w-full border-2 border-red-500 hover:bg-red-500 hover:text-white py-7 rounded-2xl font-semibold transition duration-200 flex items-center justify-center gap-2" >
        <MdDeleteOutline size={22} />
        Delete Room</Button> */}

      {/* Trigger Button */}
      <AlertDialog.Trigger>
        <button className="flex-1 flex items-center px-8 justify-center gap-1.5 border border-gray-200 hover:bg-red-50 text-red-500 text-sm font-medium py-2.5 rounded-xl transition-colors duration-200">
          <Trash className='w-4 h-4' />
          Delete
        </button>
      </AlertDialog.Trigger>


      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading> {room.roomName} Delete this room permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}