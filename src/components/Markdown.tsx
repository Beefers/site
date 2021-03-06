import { JSX } from "solid-js";

import Solidown from "solidown";

interface MarkdownProps {
    children?: JSX.Element[] | JSX.Element;
    src: string;
}

export default ({ src }: MarkdownProps) => {
    return (
        <Solidown
            children=""
            loading={
                <div class="text-center mt-20">
                    <h1 class="text-3xl">Markdown loading... please wait!</h1>
                    <h2 class="text-2xl">This process may be slow depending on your connection.</h2>
                </div>
            }
            css={`
                .solidown-markdown-root h1 {
                    font-family: "Poppins";
                    margin-top: unset;
                    margin-bottom: 1rem;
                    font-size: 2.25rem;
                }
                .solidown-markdown-root h2 {
                    font-family: "Poppins";
                    margin-bottom: 0.25rem;
                    margin-top: 1.2rem;
                    font-size: 1.5rem;
                }
                .solidown-markdown-root h3 {
                    font-family: "Poppins";
                    margin-bottom: 0.25rem;
                    margin-top: 1rem;
                    font-weight: normal;
                    font-size: 1.25rem;
                }
                .solidown-markdown-root a {
                    color: #09bc8a;
                }
                .solidown-markdown-root table,thead,th,td,tr {
                    background-color: #ADB5BD11;
                    padding: 2px;
                    text-align: center;
                }
            `}
            src={src}
        />
    );
}