import Navbar from "@/components/navbar";

export default function Why() {
    return (
        <div className="min-h-svh">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl max-w-lg p-10">
                    This Terms of Use Agreement (“Agreement”) is entered into between PTC Inc., acting through its Onshape business unit (“Onshape”), and the Customer or End User (defined below), as applicable. This Agreement governs the use of Onshape’s products and services (the “Service” or “Services”).
                    You are the “Customer” under this Agreement if you are (a) an individual ordering Services; or (b) an organization ordering Services to be used by one or more of your personnel. If you are an organization ordering Services, the individual who agrees to this Agreement on your behalf must have the authority to bind the organization and its End Users to this Agreement. If you are an educator ordering Services to be used by students in an educational environment, the individual who agrees to this Agreement must (1) have authority to bind the educational institution of which you are a part on its behalf, (2) agree to be bound by the Agreement on behalf of your students, (3) acknowledge that you are responsible for such students’ use of the Services, and (4) affirm that you are authorized by the jurisdiction in which you operate to consent to the Agreement on behalf of such students.You are the “End User” under this Agreement if you are using the Service in your capacity as an end user...
                </p>
                <div className="bg-secondary w-full h-svh flex flex-col justify-center items-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl">
                            Blah blah blah!
                        </h1>
                        <p className="text-xl">
                            Aren't you so tired of legal jargon? Well thats where we come in!
                        </p>
                    </div>
                </div>
                <div className="bg-primary w-full h-svh flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-10 max-w-lg">
                        <h1 className="text-9xl">
                            Take back whats yours
                        </h1>
                        <p className="text-xl">
                            We will take your model and sublicense it to you for FREE!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}