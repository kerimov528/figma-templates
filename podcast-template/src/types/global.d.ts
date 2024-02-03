import { ButtonHTMLAttributes, LazyExoticComponent } from "react";

declare global {
    type IRoute = {
        key: string;
        path: string;
        component: LazyExoticComponent<() => JSX.Element>;
        isPrivate?: boolean;
        children?: IRoute[]
    }
}
