// import YAML from "yaml"

export namespace importJSON {
    export const asString = (s: string): Object => {
        return JSON.parse(s)
    }
}

// export namespace importYAML {
//     export const asString = (s: string): Object => {
//         return YAML.parse(s)
//     }
// }