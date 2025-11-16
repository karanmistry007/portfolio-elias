import QuoteImage from "../../assets/quote.svg"

const Quote = () => {
    return (
        <>
            <div className="quote-container py-8 md:py-12 lg:py-16 relative">
                <div className="quote w-fit m-auto">
                    <div className="quote-text text-xl lg:text-2xl p-4 lg:p-8 font-medium border border-[#ABB2BF] w-fit ml-auto relative">
                        <p>
                            With great power comes great electricity bill
                        </p>
                        <div className="h-6 lg:h-8 w-6 lg:w-8 absolute -top-3.5 lg:-top-4 left-2 lg:left-3 bg-[#282C33] flex p-0.5 justify-center items-center">
                            <img src={QuoteImage} alt="" />
                        </div>
                    </div>
                    <div className="quote-author text-xl lg:text-2xl p-2 lg:p-4 font-medium border border-[#ABB2BF] w-fit ml-auto relative">
                        <p>
                            - Karan Mistry
                        </p>
                        <div className="h-6 lg:h-8 w-6 lg:w-8 absolute -top-3.5 lg:-top-4 right-2 lg:right-3 bg-[#282C33] flex p-0.5 justify-center items-center">
                            <img src={QuoteImage} alt="" />
                        </div>
                    </div>
                    <div className="quote-side-square hidden lg:block border border-[#ABB2BF] h-20 w-20 absolute top-1/2 -translate-x-1/2 left-[calc(100%+180px)]">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote