import Head from "next/head";
import { useRouter } from "next/router"


// interface User {
//     name: string;
//     email: string;
//     phone: string;
//     website: string;
// }

// interface UserDetailProps {
//     user: User;
// }

export default function UserDetail(props) {
    const router = useRouter();
    const { id } = router.query; 
    const { user } = props;
    return (
        <div className="">
            <Head>
                {/* <title>Mr. Ambatukam | {''}{ id }{''}'s page</title> */}
                <title>Mr. Ambatukam | {user.name}'s page</title>
                <meta name='description' content='Website Mr. Ambatukam' />
            </Head>
            <div className="pl-20 pt-28">
                {/* <p>User Detail Page {''}{ id }{''}</p> */}
                <p className="font-bold text-2xl mb-10">User Detail Page {user.name}</p>
                <p className="text-slate-600 font-medium text-xl">{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p className="hover:text-blue-500 hover:underline">{user.website}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await res.json();
    const paths = dataUsers.map((user) => ({
        params: {
            id: `${user.id}`
        } 
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        props: {
            user,
        }
    }
}
