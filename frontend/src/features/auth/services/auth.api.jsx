import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

export async function register({ username, email, password }) {
    try {
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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:register',
                message: 'register() before api.post',
                data: {
                    hasPayload: true
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const response = await api.post("/api/auth/register", {
            username,
            email,
            password,
        });

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:register',
                message: 'register() after api.post',
                data: {
                    status: response?.status ?? null,
                    hasData: !!response?.data
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return response.data;

    } catch (error) {
        console.log(error);

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:register',
                message: 'register() error',
                data: {
                    message: error?.message ?? null
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return {
            error: true,
            message: error?.message ?? null
        };
    }
}

export async function login({ email, password }) {
    try {
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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:login',
                message: 'login() before api.post',
                data: {
                    hasPayload: true
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const response = await api.post("/api/auth/login", {
            email,
            password,
        });

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:login',
                message: 'login() after api.post',
                data: {
                    status: response?.status ?? null,
                    hasData: !!response?.data
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return response.data;

    } catch (error) {
        console.log(error);

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:login',
                message: 'login() error',
                data: {
                    message: error?.message ?? null
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return {
            error: true,
            message: error?.message ?? null
        };
    }
}

export async function logout() {
    try {
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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:logout',
                message: 'logout() before api.post',
                data: {},
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const response = await api.post("/api/auth/logout");

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:logout',
                message: 'logout() after api.post',
                data: {
                    status: response?.status ?? null,
                    hasData: !!response?.data
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return response.data;

    } catch (error) {
        console.log(error);

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:logout',
                message: 'logout() error',
                data: {
                    message: error?.message ?? null
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return {
            error: true,
            message: error?.message ?? null
        };
    }
}

export async function getCurrentUser() {
    try {
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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:getCurrentUser',
                message: 'getCurrentUser() before api.get',
                data: {},
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        const response = await api.get("/api/auth/get-me");

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:getCurrentUser',
                message: 'getCurrentUser() after api.get',
                data: {
                    status: response?.status ?? null,
                    hasData: !!response?.data
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return response.data;

    } catch (error) {
        console.log(error);

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
                hypothesisId: 'H1',
                location: 'frontend/src/features/auth/services/auth.api.jsx:getCurrentUser',
                message: 'getCurrentUser() error',
                data: {
                    message: error?.message ?? null
                },
                timestamp: Date.now()
            })
        }).catch(() => { });
        // #endregion

        return {
            error: true,
            message: error?.message ?? null
        };
    }
}
