import path from "path";
import { BuildPaths } from "./../build/types/config";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/BuildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.module.rules = config.module.rules.map((rule) => {
        if (!rule || typeof rule !== "object") return rule;

        if (
            "test" in rule &&
            rule.test instanceof RegExp &&
            rule.test.source.includes("svg")
        ) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config.module?.rules?.push(buildCssLoader(true));

    return config;
};
