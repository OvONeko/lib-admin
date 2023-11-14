import urlJoin from "url-join";
import { backendUrl, backendHost } from "./constants";

export default function getData(path: string): string {
    var request = new XMLHttpRequest();
    request.open("get", urlJoin(backendUrl, path), false);
    request.send();
    return request.responseText;
}
