"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const login = async () => {
        await gitHubSignIn();
    };

    // Sign out of Firebase
    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <main>
            <h1>Week 9</h1>
            <div>
                {user ? (
                    <div>
                        <p>
                            Welcome, {user.displayName} ({user.email})
                        </p>
                        <button onClick={logout}>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={login}>Sign In with GitHub</button>
                )}
            </div>
        </main>
    );
}
