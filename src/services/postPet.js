import {API} from "./api";

export function postPet( pet ) {
    return API.post("pets", pet);
}