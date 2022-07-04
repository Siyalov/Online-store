import { makeAutoObservable } from "mobx";

class UsersStore {
    role = "guest";

    constructor() {
        makeAutoObservable(this);
    }

    setRole() {
        localStorage.getItem("is_admin") === "false" ? this.role = "user" : localStorage.getItem("is_admin") === "true" ? this.role = "admin" : this.role = "guest"
    }

    getRole() {
        return this.role;
    }
}

export const usersStore = new UsersStore();