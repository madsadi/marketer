import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html className="h-full" dir="rtl">
                <Head>
                    <link rel='stylesheet' href='/yekanBakhFont.css'/>
                </Head>
                <body className={"max-h-screen custom-scrollbar"}>
                <Main/>
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument