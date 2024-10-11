import Script from "next/script";

export default function Reviews() {
  return (
    <div id="background-image-3">
      <section id="reviews" className="m-auto max-w-7xl p-6 my-12 mb-16 sm:mb-12 scroll-mt-10">
        <h2 className="font-medium text-center sm:text-5xl sm:mb-8 gradient-text barber-color">
          Opinie naszych klientów
        </h2>
        <p className="text-white text-2xl margin-bottom text-center">
          Zobacz co sądzą inni
        </p>
        <div className="flex justify-center mt-8">
        <div class="tagembed-widget" style={{ width:'100%', height:'100%' }} data-widget-id="2131558" data-tags="false"  view-url="https://widget.tagembed.com/2131558"></div>        
        </div>
        <Script src="https://widget.tagembed.com/embed.min.js" type="text/javascript" strategy="lazyOnload"></Script>      
        </section>
    </div>
  );
}
