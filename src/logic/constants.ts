import urlJoin from "url-join";

export const backendHost = "http://127.0.0.1:8086";
export const backendDataUrl = urlJoin(backendHost, "data");
export const backendHandleUrl = urlJoin(backendHost, "handle");

export const nameRouting = [
    {
        path: "/admin/manage",
        name: "admin",
        title: "用户名",
        description: "用户组",
    },
    {
        path: "/admin/user",
        name: "user",
        title: "用户UUID",
        description: "信息",
    },
    {
        path: "/admin/book",
        name: "book",
        title: "标题",
        description: "信息",
    },
] as NameRouting[];

export interface NameRouting {
    path: string;
    name: string;
    title: string;
    description: string;
}
