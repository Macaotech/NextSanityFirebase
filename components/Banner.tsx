const Banner = () => {
  return (
      <div className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between"><h1
          className="mb-4 text-4xl font-bold text-9xl text-black dark:text-white">Blog.</h1>
        <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left BlogHeader_portableText__JCSyj"><p>Articulos desde <a
            href="https://sanity.io/" className="hover:text-sky-500 underline" target="_blank">Sanity</a> using <a
            className="hover:text-blue-500 underline" href="https://nextjs.org/" target="_blank">NextJS</a></p></h4>
      </div>
  );
};

export default Banner;
