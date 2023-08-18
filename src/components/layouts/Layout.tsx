import { Box } from "@mui/material"
import Head from "next/head"
import { PropsWithChildren } from "react";
import { Navbar } from "../ui";


interface Props {
    title?: string;
}

export const Layout = ({ title = 'Draft Master - RomApps', children }: PropsWithChildren<Props>) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />


            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}

