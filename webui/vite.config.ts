/*
 *     The Peacock Project - a HITMAN server replacement.
 *     Copyright (C) 2021-2022 The Peacock Project Team
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { defineConfig } from "vite"
import rollupLicense from "rollup-plugin-license"
import { join } from "path"

// noinspection JSUnusedGlobalSymbols
export default defineConfig((params) => ({
    plugins: [
        rollupLicense({
            thirdParty: {
                output: {
                    file: join(__dirname, "dist", "THIRDPARTYNOTICES.txt"),
                    encoding: "utf-8",
                },
            },
        }),
    ],
    define: {
        WEBUI_IS_DEV: params.command === "serve",
    },
    server: {
        port: 3000,
        strictPort: true,
    },
}))
