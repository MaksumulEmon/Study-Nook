
import Addroomform from "@/components/Addroomform";
import { Building2 } from "lucide-react";

export const metadata = {
    title: "StudyNook – Add Room",
};


const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;


    const formData = new FormData(form);

    const room = {
        roomName: formData.get("roomName"),
        image: formData.get("image"),
        location: formData.get("location"),
        pricePerHour: formData.get("pricePerHour"),
        capacity: formData.get("capacity"),
        description: formData.get("description"),

        amenities: formData.getAll("amenities"),
    };

    console.log(room)


    try {

        const res = await fetch(
            `http://localhost:5000/room`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(room),
            }
        );

        const data = await res.json();
        console.log(data)

        if (data?.insertedId || data?.success) {
            // toast.success('Room Added Successfully!');
            form.reset();
        }

    } catch (error) {
        // toast.error('Something went wrong!');
    }
};








// -----------------------------------------------------------




const AddRoomPage = () => {
    return (
        <section className="min-h-screen  px-4">


            <div className="max-w-6xl mx-auto">


                {/* Heading */}
                <div className="text-center pb-14">

                    {/* <div className="inline-flex items-center gap-2 border border-[#9d4edd]/20 px-5 py-2 rounded-full text-sm text-[#9d4edd] mb-5">
                            <Building2 size={18} />
                            Study Room Management
                        </div> */}

                    <h1 className="text-4xl md:text-5xl font-black pt-8 text-gray-900 leading-tight">
                        Add New
                        <span className="text-[#9d4edd]">
                            {' '}Room
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8 text-base md:text-lg">
                        Share your study room with students and earn money.
                    </p>

                </div>

                {/* Client Form */}
                <Addroomform />



            </div>


        </section>
    );
};

export default AddRoomPage;