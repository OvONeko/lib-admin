import urlJoin from "url-join";
import { backendDataUrl, backendHost } from "./constants";

export default function getData(path: string): string {
    var request = new XMLHttpRequest();
    request.open("get", urlJoin(backendDataUrl, path), false);
    request.send();
    return request.responseText;
}
