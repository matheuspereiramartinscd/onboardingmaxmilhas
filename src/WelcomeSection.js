import React from 'react';

const WelcomeSection = () => {
    return (
        <section className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pr-20 w-full font-semibold bg-green-300 pb-[509px] max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://image-link" alt="" className="object-contain max-w-full aspect-[1.7] w-[276px]" />
                <div className="flex flex-col items-center self-center mt-60 ml-3.5 max-w-full w-[619px] max-md:mt-10">
                    <h1 className="self-stretch text-8xl tracking-tighter leading-tight text-white max-md:max-w-full max-md:text-4xl">
                        Bem-vindo!
                    </h1>
                    <p className="mt-20 text-6xl tracking-tighter text-center leading-[66px] text-white text-opacity-70 max-md:mt-10 max-md:text-4xl max-md:leading-[53px]">
                        ao Onboarding de Emissões
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
