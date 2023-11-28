import {InteractionType} from "@azure/msal-browser";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication} from "@azure/msal-react";
import { Outlet} from "react-router-dom";

// config
import {loginRequest} from "../config/authConfig.ts";

export const RootLayout = () => {
    useMsalAuthentication(InteractionType.Redirect, loginRequest);


    return (
        <div className="root-layout">
            <AuthenticatedTemplate>
                {/*<RequestInterceptor>*/}
                    <div className="App">
                        <main className="">
                            <Outlet />
                        </main>
                    </div>
                {/*</RequestInterceptor>*/}
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h4>
                    <center>
                        Please sign-in to see your profile information.
                    </center>
                </h4>
            </UnauthenticatedTemplate>

        </div>
    )
}

