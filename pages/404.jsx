import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page404(){
    const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //         console.log('kamu akan berpindah halaman dalam 7 detik');
    //     }, 7000)
    // }, [])
    return (
        <>
        <div className='flex flex-col'>
            {/* <Header /> */}
                <div className="flex-1">
                    <div className="ml-14 mt-[139px]">
                        <div className="text-center font-mono selection:bg-green-500 selection:text-white">
                            <img src="megumichibi-removebg-preview.png" className="mx-auto w-56" alt="" />
                            <h1 className="text-slate-700 text-3xl font-medium">Ehhh, kamu salah masuk halaman?</h1>
                            <h2 className="text-slate-700 text-4xl font-bold"><span className="text-red-500">Aku</span> tidak berniat jahat kok oni-sann....</h2>
                            <h3 className="text-slate-700 text-2xl font-bold mt-5"><span className="text-red-500">Oni-san nyasar yah haha, </span> Silahkan pilih halaman yang berada di navbar</h3>
                            {/* <h3 className="text-slate-700 text-2xl font-bold">atau<span className="text-red-500"> Oni-san </span> tolong tunggu sampai 7 detik untuk berpindah halaman</h3> */}
                        </div>
                    </div>
                </div>
            {/* <Footer /> */}
        </div>
    </>
    )
}
