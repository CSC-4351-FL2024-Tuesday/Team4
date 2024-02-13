import {atom, useAtom} from "jotai"
import {Results, results} from "@/app/utils/data"

type Config = {
    selected: Results['id'] | null
}

const configAtom = atom<Config>({
    selected: results[0].id,
})

export function useResult() {
    return useAtom(configAtom)
}