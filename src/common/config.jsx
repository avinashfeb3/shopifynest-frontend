export const adminToken = () => {
    return localStorage.getItem("shopifynest-admin-info")
        ? JSON.parse(localStorage.getItem("shopifynest-admin-info")).token
        : null;
};