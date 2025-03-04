function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        We love This
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          store
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
      Welcome to our premier destination for exceptional products and unparalleled service. 
  We curate a distinctive selection of premium goods designed to elevate your everyday experience. 
  Our commitment is to deliver excellence with a touch of creativity and meticulous attention to detail. 
  This vision comes to life through the expertise of <strong><span className="bg-primary py-1 px-1 rounded-sm tracking-normal text-white">Pawel</span></strong>, 
  who has thoughtfully crafted this space to meet your needs with sophistication and care. 
  Explore our offerings and discover a world of quality tailored just for you.
      </p>
    </section>
  );
}
export default AboutPage;