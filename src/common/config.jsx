export const adminToken = () => {
    const raw = localStorage.getItem("shopifynest-admin-info");

    if (!raw) {
        return null;
    }

    try {
        const parsed = JSON.parse(raw);

        // Support both legacy string storage and object-based storage.
        if (typeof parsed === "string") {
            return parsed || null;
        }

        if (parsed && typeof parsed === "object") {
            return parsed.token || parsed.accessToken || null;
        }
    } catch {
        // If storage has a plain token string (non-JSON), fallback safely.
        return raw;
    }

    return null;
};