import urlJoin from "url-join";
import { backendHandleUrl, backendHost } from "./constants";

export default function postData(path: string, body: string): string {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', urlJoin(backendHandleUrl, path), false);
    xhr.send(body);
    return xhr.responseText;
}
