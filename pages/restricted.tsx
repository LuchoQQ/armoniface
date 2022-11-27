import { getSession, useSession } from "next-auth/react";
import Router from "next/router";
import React, { useEffect, useState } from "react";

const Restricted: React.FC = (props) => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            Router.push("/");
        },
    });
      console.log(props)

    const [loading, setLoading] = useState(true);
    return (
        <>
            <h1>Restricted</h1>
            <p>Hi {session?.user?.name}!</p>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default Restricted;
