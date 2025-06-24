import { ResolveOptions } from "webpack";

export function buildResloves():ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
    }
}