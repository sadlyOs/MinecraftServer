import { useAuth } from "@/context/AuthContext";
import MyServerBlock from "@components/ui/MyServerBlock/MyServerBlock"

export default function MyServersPage() {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="container flex flex-col gap-5 mx-auto px-4">
            {user.servers.map((server) => (
                <MyServerBlock key={server.address.id} id={server.address.id}/>
            ))}
        </div>
    )
}