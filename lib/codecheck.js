import { ESLint } from "eslint";


export  default async function CodeCheck(code) {
    const eslint = new ESLint({
        overrideConfig: [
            {
                languageOptions: {
                    ecmaVersion: "latest",
                    sourceType: "module",
                },
                rules: {
                    "no-unused-vars": "error",
                    "no-unreachable": "error",
                    "no-empty": "error",
                    "no-self-assign": "error",
                    "prefer-const": "error",
                },
            },
        ],
    });

    const [result] = await eslint.lintText(code);
    return result.messages;
}

