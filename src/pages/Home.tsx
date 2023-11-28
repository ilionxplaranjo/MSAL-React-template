import {useMsal} from "@azure/msal-react";

const Home = () => {
    const { instance, accounts } = useMsal();
    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        })
    };

    return (
        <div>
            <h1>Home Page</h1>

            {accounts[0]?.name && <p>Welcome {accounts[0].name}</p>}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;