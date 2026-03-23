const ADMIN_STORAGE_KEY = "shopifynest-admin-info";

export const adminToken = () => {
    // Remove legacy persistent token if it exists.
    localStorage.removeItem(ADMIN_STORAGE_KEY);

    const raw = sessionStorage.getItem(ADMIN_STORAGE_KEY);

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