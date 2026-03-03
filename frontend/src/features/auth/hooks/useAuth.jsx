import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, logout, register, getCurrentUser } from "../services/auth.api.jsx";

export function useAuth() {
    const context = useContext(AuthContext);

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ email, password }) => {
        setLoading(true);

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogin',
                message: 'handleLogin() before login() call',
                data: {
                    hasPayload: true
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const data = await login({ email, password });

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogin',
                message: 'handleLogin() after login() call',
                data: {
                    hasData: !!data,
                    hasUser: !!data?.user,
                    isError: !!data?.error
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        if (!data || data.error || !data.user) {
            // #region agent log
            fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Debug-Session-Id': 'a18467'
                },
                body: JSON.stringify({
                    sessionId: 'a18467',
                    runId: 'initial',
                    hypothesisId: 'H3',
                    location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogin',
                    message: 'handleLogin() early return due to error or missing user',
                    data: {
                        hasData: !!data,
                        isError: !!data?.error
                    },
                    timestamp: Date.now()
                })
            }).catch(() => { });
            // #endregion

            setLoading(false);
            return;
        }

        setUser(data.user);
        setLoading(false);
    };

    const handleRegiter = async ({ username, email, password }) => {
        setLoading(true);

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleRegiter',
                message: 'handleRegiter() before register() call',
                data: {
                    hasPayload: true
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const data = await register({ username, email, password });

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleRegiter',
                message: 'handleRegiter() after register() call',
                data: {
                    hasData: !!data,
                    hasUser: !!data?.user,
                    isError: !!data?.error
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        if (!data || data.error || !data.user) {
            // #region agent log
            fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Debug-Session-Id': 'a18467'
                },
                body: JSON.stringify({
                    sessionId: 'a18467',
                    runId: 'initial',
                    hypothesisId: 'H3',
                    location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleRegiter',
                    message: 'handleRegiter() early return due to error or missing user',
                    data: {
                        hasData: !!data,
                        isError: !!data?.error
                    },
                    timestamp: Date.now()
                })
            }).catch(() => { });
            // #endregion

            setLoading(false);
            return;
        }

        setUser(data.user);
        setLoading(false);
    };

    const handleLogout = async () => {
        setLoading(true);

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogout',
                message: 'handleLogout() before logout() call',
                data: {},
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const data = await logout();

        // #region agent log
        fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': 'a18467'
            },
            body: JSON.stringify({
                sessionId: 'a18467',
                runId: 'initial',
                hypothesisId: 'H2',
                location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogout',
                message: 'handleLogout() after logout() call',
                data: {
                    hasData: !!data,
                    isError: !!data?.error
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        if (!data || data.error) {
            // #region agent log
            fetch('http://127.0.0.1:7245/ingest/f6a818a0-1793-4cad-886e-4ff1addd08df', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Debug-Session-Id': 'a18467'
                },
                body: JSON.stringify({
                    sessionId: 'a18467',
                    runId: 'initial',
                    hypothesisId: 'H3',
                    location: 'frontend/src/features/auth/hooks/useAuth.jsx:handleLogout',
                    message: 'handleLogout() early return due to error',
                    data: {
                        hasData: !!data,
                        isError: !!data?.error
                    },
                    timestamp: Date.now()
                })
            }).catch(() => { });
            // #endregion

            setLoading(false);
            return;
        }

        setUser(null);
        setLoading(false);
    };

    return {
        user,
        loading,
        login: handleLogin,
        register: handleRegiter,
        logout: handleLogout
    };
}