import serverImg from "@assets/serverBlock/serverImg1.png"

export default function ServerSection() {
    return (
        <section className="container mx-auto px-4">
            <div className="flex justify-center">
                <div className="rounded-2xl">
                    <div>
                        <img src={serverImg} alt="serverImg" className="rounded-t-2xl" />
                    </div>
                    <div>
                        <div>
                            <h3>🔥MINELANDY🔥</h3>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}